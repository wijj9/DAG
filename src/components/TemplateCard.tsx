import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Copy, Globe, Server, Zap, Smartphone, Cloud, Settings, Database, Eye, Minimize, Beaker } from 'lucide-react';
import type { Template } from '@/lib/templates';

interface TemplateCardProps {
  template: Template;
  onClick?: () => void;
}

const iconMap = {
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

export function TemplateCard({ template, onClick }: TemplateCardProps) {
  const IconComponent = iconMap[template.icon as keyof typeof iconMap] || Globe;

  return (
    <Card
      className="p-6 hover:bg-secondary/50 hover:border-primary/50 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <IconComponent className="w-5 h-5 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            <IconComponent className="w-3 h-3 mr-1" />
            {template.category === 'web' && 'Web Applications'}
            {template.category === 'api' && 'APIs & Microservices'}
            {template.category === 'realtime' && 'Real-Time Systems'}
            {template.category === 'mobile' && 'Mobile & Cross-Platform'}
            {template.category === 'serverless' && 'Serverless & Managed'}
            {template.category === 'devops' && 'DevOps & Infrastructure'}
            {template.category === 'data' && 'Data & Storage'}
            {template.category === 'monitoring' && 'Monitoring & Observability'}
            {template.category === 'minimal' && 'Minimalist & Lightweight'}
            {template.category === 'experiment' && 'Experiment & Sandbox'}
          </Badge>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <Copy className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-foreground">
        {template.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {template.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-primary text-sm">
          <Copy className="w-4 h-4" />
          <span>{template.uses} uses</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {template.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {template.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{template.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
