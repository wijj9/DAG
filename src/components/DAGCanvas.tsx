'use client';

import { useCallback, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  type Connection,
  type Edge,
  type Node,
  type NodeTypes,
  type ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Save, Share, Edit, Layers, Menu, Download, Upload } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import type { Component } from '@/lib/components';

// Custom Node Component
function CustomNode({ data }: { data: { label: string; category: string; color: string; component: Component } }) {
  return (
    <div
      className="px-4 py-3 border-2 rounded-lg bg-card text-foreground min-w-[120px] text-center shadow-lg"
      style={{
        borderColor: data.color,
        boxShadow: `0 4px 12px ${data.color}20`
      }}
    >
      <div className="font-semibold text-sm mb-1">
        {data.label}
      </div>
      <div
        className="text-xs font-medium px-2 py-1 rounded uppercase tracking-wide text-white"
        style={{ backgroundColor: data.color }}
      >
        {data.category}
      </div>
    </div>
  );
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

interface DAGCanvasProps {
  title?: string;
  onSave?: () => void;
  onShare?: () => void;
  onAddComponent?: (component: Component) => void;
}

export interface DAGCanvasRef {
  addComponent: (component: Component) => void;
}

export const DAGCanvas = forwardRef<DAGCanvasRef, DAGCanvasProps>(
  ({ title = "Untitled DAG", onSave, onShare }, ref) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [dagTitle, setDagTitle] = useState(title);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [showLayers, setShowLayers] = useState(false);
    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

    const onConnect = useCallback(
      (params: Connection) => setEdges((eds) => addEdge({
        ...params,
        style: { stroke: 'hsl(var(--primary))', strokeWidth: 2 },
        animated: true,
      }, eds)),
      [setEdges]
    );

    const addComponentToCanvas = useCallback((component: Component, position?: { x: number; y: number }) => {
      const newNode: Node = {
        id: `${component.id}-${Date.now()}`,
        type: 'custom',
        position: position || {
          x: Math.random() * 400 + 200,
          y: Math.random() * 300 + 150
        },
        data: {
          label: component.name,
          category: component.category,
          color: component.color,
          component: component,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    // Expose addComponent function via ref
    useImperativeHandle(ref, () => ({
      addComponent: addComponentToCanvas,
    }), [addComponentToCanvas]);

    const onDrop = useCallback(
      (event: React.DragEvent) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
        const componentData = event.dataTransfer.getData('application/reactflow');

        if (componentData && reactFlowBounds && reactFlowInstance) {
          const component = JSON.parse(componentData);
          const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
          });

          addComponentToCanvas(component, position);
        }
      },
      [reactFlowInstance, addComponentToCanvas]
    );

    const onDragOver = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }, []);

    const handleTitleEdit = () => {
      setIsEditingTitle(false);
    };

    const clearCanvas = () => {
      setNodes([]);
      setEdges([]);
    };

    return (
      <div className="flex-1 h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isEditingTitle ? (
                <Input
                  value={dagTitle}
                  onChange={(e) => setDagTitle(e.target.value)}
                  onBlur={handleTitleEdit}
                  onKeyDown={(e) => e.key === 'Enter' && handleTitleEdit()}
                  className="text-xl font-semibold bg-transparent border-none p-0 h-auto"
                  autoFocus
                />
              ) : (
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold">{dagTitle}</h1>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => setIsEditingTitle(true)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" onClick={onShare}>
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" onClick={onSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative">
          <div ref={reactFlowWrapper} className="w-full h-full">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              fitView
              className="bg-background"
              proOptions={{ hideAttribution: true }}
            >
              <Controls className="bg-card border-border" />
              <MiniMap
                className="bg-card border-border"
                nodeColor={(node) => node.data.color}
                maskColor="rgba(0, 0, 0, 0.2)"
              />
              <Background
                variant={BackgroundVariant.Dots}
                gap={20}
                size={1}
                color="hsl(var(--muted-foreground))"
              />
            </ReactFlow>
          </div>

          {/* Right Sidebar for Layers */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Sheet open={showLayers} onOpenChange={setShowLayers}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="bg-card">
                  <Layers className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Layers</h3>

                  {/* Node List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Nodes ({nodes.length})</h4>
                    {nodes.map((node) => (
                      <div
                        key={node.id}
                        className="flex items-center gap-3 p-2 rounded-lg border border-border"
                      >
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: node.data.color }}
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{node.data.label}</div>
                          <div className="text-xs text-muted-foreground uppercase">
                            {node.data.category}
                          </div>
                        </div>
                      </div>
                    ))}
                    {nodes.length === 0 && (
                      <div className="text-sm text-muted-foreground text-center py-4">
                        No nodes yet. Add components from the panel.
                      </div>
                    )}
                  </div>

                  {/* Edge List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Connections ({edges.length})</h4>
                    {edges.map((edge) => {
                      const sourceNode = nodes.find(n => n.id === edge.source);
                      const targetNode = nodes.find(n => n.id === edge.target);
                      return (
                        <div
                          key={edge.id}
                          className="flex items-center gap-2 p-2 rounded-lg border border-border text-sm"
                        >
                          <span className="truncate">{sourceNode?.data.label || edge.source}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="truncate">{targetNode?.data.label || edge.target}</span>
                        </div>
                      );
                    })}
                    {edges.length === 0 && (
                      <div className="text-sm text-muted-foreground text-center py-4">
                        No connections yet. Connect nodes by dragging.
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={clearCanvas}
                      disabled={nodes.length === 0}
                    >
                      Clear Canvas
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="outline" size="sm" className="bg-card">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer with instructions */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Click + to add components</span>
              <span>Drag to connect</span>
              <span>Double-click to edit</span>
            </div>
            <div className="text-primary">
              Powered by React Flow
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DAGCanvas.displayName = 'DAGCanvas';
