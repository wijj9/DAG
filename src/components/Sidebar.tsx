'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, MessageSquare, LayoutGrid, Globe, Server, Zap, Smartphone, Cloud, Settings, Database, Eye, Minimize, Beaker } from 'lucide-react';
import { categories, getTemplatesByCategory } from '@/lib/templates';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClose?: () => void;
}

const iconMap = {
  'layout-grid': LayoutGrid,
  globe: Globe,
  server: Server,
  zap: Zap,
  smartphone: Smartphone,
  cloud: Cloud,
  settings: Settings,
  database: Database,
  eye: Eye,
  minimize: Minimize,
  beaker: Beaker,
};

export function Sidebar({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onClose
}: SidebarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="w-80 h-full bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">StackDAG</h2>
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
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="pl-10 bg-background border-border"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              onClick={() => onSearchChange('')}
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

      {/* Categories */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-1">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || LayoutGrid;
              const templateCount = getTemplatesByCategory(category.id).length;
              const isSelected = selectedCategory === category.id;

              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "secondary" : "ghost"}
                  className="w-full justify-start h-10"
                  onClick={() => onCategoryChange(category.id)}
                >
                  <IconComponent className="w-4 h-4 mr-3" />
                  <span className="flex-1 text-left">{category.name}</span>
                  {category.id !== 'all' && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {templateCount}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p className="mb-2">**Click** on a node or edge to view details. Press **Backspace** to delete, **Ctrl+Click** to multiselect</p>
          <Button variant="link" className="h-auto p-0 text-primary text-xs">
            Discord
          </Button>
        </div>
      </div>
    </div>
  );
}
