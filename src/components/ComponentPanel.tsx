'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  X,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Plus,
  Globe,
  Server,
  Database,
  Zap,
  Radio,
  Link,
  Cloud,
  Wrench
} from 'lucide-react';
import { componentCategories, searchComponents, type Component } from '@/lib/components';

interface ComponentPanelProps {
  onAddComponent: (component: Component) => void;
  onClose?: () => void;
}

const iconMap = {
  globe: Globe,
  server: Server,
  database: Database,
  zap: Zap,
  radio: Radio,
  link: Link,
  cloud: Cloud,
  wrench: Wrench,
};

export function ComponentPanel({ onAddComponent, onClose }: ComponentPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['frontend']));

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredComponents = searchQuery ? searchComponents(searchQuery) : null;

  return (
    <div className="w-80 h-full bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Components</h2>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              onClick={() => setSearchQuery('')}
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Notice */}
      {!searchQuery && (
        <div className="p-4 text-sm text-muted-foreground border-b border-border">
          <p>Don't see what you're looking for? Send feedback!</p>
        </div>
      )}

      {/* Feedback Button */}
      <div className="p-4 border-b border-border">
        <Button variant="outline" className="w-full justify-start">
          <MessageSquare className="w-4 h-4 mr-2" />
          Feedback
        </Button>
      </div>

      {/* Component Categories or Search Results */}
      <div className="flex-1 overflow-y-auto">
        {filteredComponents ? (
          // Search Results
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Search Results ({filteredComponents.length})
              </h3>
            </div>
            <div className="space-y-2">
              {filteredComponents.map((component) => {
                const IconComponent = iconMap[component.icon as keyof typeof iconMap] || Server;
                return (
                  <div
                    key={component.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${component.color}20` }}
                      >
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: component.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{component.name}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {component.category}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => onAddComponent(component)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Category View
          <div className="p-4">
            {/* All Category */}
            <div className="mb-4">
              <Button
                variant="ghost"
                className="w-full justify-start h-10 mb-2"
                onClick={() => setExpandedCategories(new Set(componentCategories.map(c => c.id)))}
              >
                <Database className="w-4 h-4 mr-3" />
                <span className="flex-1 text-left">All</span>
              </Button>
            </div>

            {/* Categories */}
            <div className="space-y-1">
              {componentCategories.map((category) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Server;
                const isExpanded = expandedCategories.has(category.id);

                return (
                  <div key={category.id}>
                    {/* Category Header */}
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-10"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <IconComponent
                        className="w-4 h-4 mr-3"
                        style={{ color: category.color }}
                      />
                      <span className="flex-1 text-left">{category.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {category.components.length}
                        </Badge>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </Button>

                    {/* Category Components */}
                    {isExpanded && (
                      <div className="ml-4 mt-2 space-y-2">
                        {category.components.map((component) => (
                          <div
                            key={component.id}
                            className="flex items-center justify-between p-2 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div
                                className="w-8 h-6 rounded flex items-center justify-center text-xs font-medium text-white"
                                style={{ backgroundColor: component.color }}
                              >
                                {component.name.slice(0, 2).toUpperCase()}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">{component.name}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                  {component.category}
                                </div>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              className="h-8 w-8 p-0"
                              onClick={() => onAddComponent(component)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
