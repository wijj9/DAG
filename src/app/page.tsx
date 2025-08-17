'use client';

import { useState, useRef } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TemplateGallery } from '@/components/TemplateGallery';
import { DAGEditor } from '@/components/DAGEditor';
import { ComponentPanel } from '@/components/ComponentPanel';
import { DAGCanvas, type DAGCanvasRef } from '@/components/DAGCanvas';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowLeft, LogIn, Plus } from 'lucide-react';
import type { Template } from '@/lib/templates';
import type { Component } from '@/lib/components';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [isCanvasMode, setIsCanvasMode] = useState(false);
  const canvasRef = useRef<DAGCanvasRef>(null);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setIsEditorMode(true);
    setIsCanvasMode(false);
  };

  const handleBackToGallery = () => {
    setIsEditorMode(false);
    setIsCanvasMode(false);
    setSelectedTemplate(null);
  };

  const handleCanvasMode = () => {
    setIsCanvasMode(true);
    setIsEditorMode(false);
    setSelectedTemplate(null);
  };

  const handleAddComponent = (component: Component) => {
    if (canvasRef.current) {
      canvasRef.current.addComponent(component);
    }
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log('Saving DAG...');
  };

  const handleShare = () => {
    // In a real app, this would create a shareable link
    console.log('Sharing DAG...');
  };

  const currentMode = isCanvasMode ? 'canvas' : isEditorMode ? 'editor' : 'gallery';

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              {isCanvasMode ? (
                <ComponentPanel onAddComponent={handleAddComponent} />
              ) : (
                <Sidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              )}
            </SheetContent>
          </Sheet>

          {(isEditorMode || isCanvasMode) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBackToGallery}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Button>
          )}

          {!isEditorMode && !isCanvasMode && (
            <h1 className="text-lg font-semibold hidden md:block">
              StackDAG - Build, Share, and Discover DAGs
            </h1>
          )}

          {currentMode === 'gallery' && (
            <Button
              onClick={handleCanvasMode}
              size="sm"
              className="ml-4"
            >
              <Plus className="w-4 h-4 mr-2" />
              New DAG
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded text-sm flex items-center gap-2">
            ⚠️ To save your DAG, click the save button and log in. Your work will be lost otherwise.
          </div>
          <Button variant="outline" size="sm">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          {isCanvasMode ? (
            <ComponentPanel onAddComponent={handleAddComponent} />
          ) : (
            <Sidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {isCanvasMode ? (
            <DAGCanvas
              ref={canvasRef}
              onSave={handleSave}
              onShare={handleShare}
            />
          ) : isEditorMode ? (
            <DAGEditor
              template={selectedTemplate || undefined}
              onSave={handleSave}
              onShare={handleShare}
            />
          ) : (
            <TemplateGallery
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onTemplateSelect={handleTemplateSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
