'use client';

import { useCallback, useState } from 'react';
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
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Save, Share, Play } from 'lucide-react';
import type { Template } from '@/lib/templates';

interface DAGEditorProps {
  template?: Template;
  onSave?: () => void;
  onShare?: () => void;
}

// Create nodes from template technologies
function createNodesFromTemplate(template: Template): Node[] {
  const nodes: Node[] = [];
  const technologies = template.technologies;

  technologies.forEach((tech, index) => {
    const x = (index % 3) * 200 + 100;
    const y = Math.floor(index / 3) * 150 + 100;

    nodes.push({
      id: `${index}`,
      type: 'default',
      position: { x, y },
      data: {
        label: tech,
      },
      style: {
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        color: 'hsl(var(--foreground))',
        borderRadius: '8px',
        padding: '10px',
        fontSize: '14px',
        fontWeight: '500',
      },
    });
  });

  return nodes;
}

// Create edges to form a simple DAG
function createEdgesFromTemplate(template: Template): Edge[] {
  const edges: Edge[] = [];
  const techCount = template.technologies.length;

  // Create a simple flow pattern
  for (let i = 0; i < techCount - 1; i++) {
    if (i < techCount - 1) {
      edges.push({
        id: `e${i}-${i + 1}`,
        source: `${i}`,
        target: `${i + 1}`,
        style: { stroke: 'hsl(var(--primary))' },
        animated: true,
      });
    }
  }

  return edges;
}

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Frontend' },
    style: {
      background: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      borderRadius: '8px',
      padding: '10px',
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 300, y: 100 },
    data: { label: 'Backend' },
    style: {
      background: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      borderRadius: '8px',
      padding: '10px',
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 500, y: 100 },
    data: { label: 'Database' },
    style: {
      background: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      borderRadius: '8px',
      padding: '10px',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    style: { stroke: 'hsl(var(--primary))' },
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    style: { stroke: 'hsl(var(--primary))' },
    animated: true,
  },
];

export function DAGEditor({ template, onSave, onShare }: DAGEditorProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    template ? createNodesFromTemplate(template) : initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    template ? createEdgesFromTemplate(template) : initialEdges
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({
      ...params,
      style: { stroke: 'hsl(var(--primary))' },
      animated: true,
    }, eds)),
    [setEdges]
  );

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <div>
            {template && (
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-xl font-semibold">{template.title}</h1>
                <Badge variant="secondary" className="text-xs">
                  {template.uses} uses
                </Badge>
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              {template?.description || 'Create your custom DAG by adding nodes and connecting them'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onShare}>
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Play className="w-4 h-4 mr-2" />
              Run
            </Button>
            <Button size="sm" onClick={onSave}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </div>

      {/* React Flow Editor */}
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          className="bg-background"
        >
          <Controls className="bg-card border-border" />
          <MiniMap
            className="bg-card border-border"
            nodeColor="hsl(var(--primary))"
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

      {/* Footer with instructions */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>Press enter or space to select a node</span>
            <span>Use arrow keys to move</span>
            <span>Press delete to remove</span>
            <span>Escape to cancel</span>
          </div>
          <div className="text-primary">
            Powered by React Flow
          </div>
        </div>
      </div>
    </div>
  );
}
