'use client';

import { useMemo } from 'react';
import { TemplateCard } from './TemplateCard';
import { templates, getTemplatesByCategory, searchTemplates, type Template } from '@/lib/templates';

interface TemplateGalleryProps {
  selectedCategory: string;
  searchQuery: string;
  onTemplateSelect: (template: Template) => void;
}

export function TemplateGallery({
  selectedCategory,
  searchQuery,
  onTemplateSelect
}: TemplateGalleryProps) {
  const filteredTemplates = useMemo(() => {
    if (searchQuery.trim()) {
      return searchTemplates(searchQuery);
    }
    return getTemplatesByCategory(selectedCategory);
  }, [selectedCategory, searchQuery]);

  if (filteredTemplates.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">No templates found</h3>
          <p className="text-muted-foreground">
            {searchQuery ?
              `No templates match "${searchQuery}"` :
              'No templates in this category yet'
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {searchQuery ?
            `Search results for "${searchQuery}"` :
            selectedCategory === 'all' ? 'All Templates' :
            selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + ' Templates'
          }
        </h2>
        <p className="text-muted-foreground">
          {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onClick={() => onTemplateSelect(template)}
          />
        ))}
      </div>
    </div>
  );
}
