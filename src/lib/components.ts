export interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  icon: string;
  tags: string[];
}

export interface ComponentCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  components: Component[];
}

export const componentCategories: ComponentCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'globe',
    color: '#ef4444', // red
    components: [
      {
        id: 'react',
        name: 'React',
        category: 'frontend',
        description: 'A JavaScript library for building user interfaces',
        color: '#ef4444',
        icon: 'globe',
        tags: ['javascript', 'ui', 'spa', 'component-based']
      },
      {
        id: 'vue',
        name: 'Vue.js',
        category: 'frontend',
        description: 'Progressive JavaScript framework',
        color: '#ef4444',
        icon: 'globe',
        tags: ['javascript', 'ui', 'spa', 'progressive']
      },
      {
        id: 'angular',
        name: 'Angular',
        category: 'frontend',
        description: 'Platform for building mobile and desktop web applications',
        color: '#ef4444',
        icon: 'globe',
        tags: ['typescript', 'ui', 'spa', 'enterprise']
      },
      {
        id: 'svelte',
        name: 'Svelte',
        category: 'frontend',
        description: 'Cybernetically enhanced web apps',
        color: '#ef4444',
        icon: 'globe',
        tags: ['javascript', 'ui', 'compile-time', 'fast']
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        category: 'frontend',
        description: 'React framework for production',
        color: '#ef4444',
        icon: 'globe',
        tags: ['react', 'ssr', 'framework', 'vercel']
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        category: 'frontend',
        description: 'Utility-first CSS framework',
        color: '#ef4444',
        icon: 'globe',
        tags: ['css', 'utility', 'responsive', 'styling']
      },
      {
        id: 'bootstrap',
        name: 'Bootstrap',
        category: 'frontend',
        description: 'CSS framework for responsive design',
        color: '#ef4444',
        icon: 'globe',
        tags: ['css', 'responsive', 'components', 'grid']
      },
      {
        id: 'material-ui',
        name: 'Material UI',
        category: 'frontend',
        description: 'React components implementing Google\'s Material Design',
        color: '#ef4444',
        icon: 'globe',
        tags: ['react', 'material', 'components', 'google']
      },
      {
        id: 'vite',
        name: 'Vite',
        category: 'frontend',
        description: 'Next generation frontend tooling',
        color: '#ef4444',
        icon: 'globe',
        tags: ['build', 'dev-server', 'fast', 'es-modules']
      },
      {
        id: 'webpack',
        name: 'Webpack',
        category: 'frontend',
        description: 'Static module bundler for JavaScript applications',
        color: '#ef4444',
        icon: 'globe',
        tags: ['bundler', 'build', 'modules', 'assets']
      },
      {
        id: 'rollup',
        name: 'Rollup',
        category: 'frontend',
        description: 'Module bundler for JavaScript',
        color: '#ef4444',
        icon: 'globe',
        tags: ['bundler', 'es-modules', 'tree-shaking', 'library']
      },
      {
        id: 'parcel',
        name: 'Parcel',
        category: 'frontend',
        description: 'Zero configuration build tool',
        color: '#ef4444',
        icon: 'globe',
        tags: ['bundler', 'zero-config', 'fast', 'web-apps']
      },
      {
        id: 'eslint',
        name: 'ESLint',
        category: 'frontend',
        description: 'Pluggable JavaScript linter',
        color: '#ef4444',
        icon: 'globe',
        tags: ['linting', 'javascript', 'code-quality', 'static-analysis']
      },
      {
        id: 'prettier',
        name: 'Prettier',
        category: 'frontend',
        description: 'Opinionated code formatter',
        color: '#ef4444',
        icon: 'globe',
        tags: ['formatting', 'code-style', 'javascript', 'consistent']
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    color: '#3b82f6', // blue
    components: [
      {
        id: 'nodejs',
        name: 'Node.js',
        category: 'backend',
        description: 'JavaScript runtime built on Chrome\'s V8 engine',
        color: '#3b82f6',
        icon: 'server',
        tags: ['javascript', 'runtime', 'server', 'event-driven']
      },
      {
        id: 'express',
        name: 'Express.js',
        category: 'backend',
        description: 'Fast, unopinionated web framework for Node.js',
        color: '#3b82f6',
        icon: 'server',
        tags: ['nodejs', 'framework', 'web', 'api']
      },
      {
        id: 'spring-boot',
        name: 'Spring Boot',
        category: 'backend',
        description: 'Java framework for building microservices',
        color: '#3b82f6',
        icon: 'server',
        tags: ['java', 'framework', 'microservices', 'enterprise']
      },
      {
        id: 'django',
        name: 'Django',
        category: 'backend',
        description: 'High-level Python web framework',
        color: '#3b82f6',
        icon: 'server',
        tags: ['python', 'framework', 'orm', 'full-stack']
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        category: 'backend',
        description: 'Modern, fast web framework for Python APIs',
        color: '#3b82f6',
        icon: 'server',
        tags: ['python', 'api', 'async', 'openapi']
      },
      {
        id: 'flask',
        name: 'Flask',
        category: 'backend',
        description: 'Lightweight WSGI web application framework',
        color: '#3b82f6',
        icon: 'server',
        tags: ['python', 'micro-framework', 'wsgi', 'simple']
      },
      {
        id: 'nestjs',
        name: 'NestJS',
        category: 'backend',
        description: 'Progressive Node.js framework for scalable server-side applications',
        color: '#3b82f6',
        icon: 'server',
        tags: ['nodejs', 'typescript', 'decorators', 'scalable']
      },
      {
        id: 'go',
        name: 'Go',
        category: 'backend',
        description: 'Open source programming language for building simple, reliable software',
        color: '#3b82f6',
        icon: 'server',
        tags: ['golang', 'concurrent', 'fast', 'simple']
      },
      {
        id: 'rust',
        name: 'Rust',
        category: 'backend',
        description: 'Systems programming language focused on safety and performance',
        color: '#3b82f6',
        icon: 'server',
        tags: ['systems', 'memory-safe', 'performance', 'concurrent']
      },
      {
        id: 'php',
        name: 'PHP',
        category: 'backend',
        description: 'Popular general-purpose scripting language for web development',
        color: '#3b82f6',
        icon: 'server',
        tags: ['web', 'scripting', 'server-side', 'dynamic']
      }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    color: '#10b981', // green
    components: [
      {
        id: 'mysql',
        name: 'MySQL',
        category: 'database',
        description: 'Open-source relational database management system',
        color: '#10b981',
        icon: 'database',
        tags: ['relational', 'sql', 'open-source', 'acid']
      },
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        category: 'database',
        description: 'Advanced open source relational database',
        color: '#10b981',
        icon: 'database',
        tags: ['relational', 'sql', 'acid', 'extensible']
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'database',
        description: 'Document-oriented NoSQL database',
        color: '#10b981',
        icon: 'database',
        tags: ['nosql', 'document', 'scalable', 'json']
      },
      {
        id: 'redis',
        name: 'Redis',
        category: 'database',
        description: 'In-memory data structure store',
        color: '#10b981',
        icon: 'database',
        tags: ['cache', 'in-memory', 'key-value', 'fast']
      },
      {
        id: 'elasticsearch',
        name: 'Elasticsearch',
        category: 'database',
        description: 'Distributed search and analytics engine',
        color: '#10b981',
        icon: 'database',
        tags: ['search', 'analytics', 'distributed', 'lucene']
      },
      {
        id: 'cassandra',
        name: 'Cassandra',
        category: 'database',
        description: 'Distributed NoSQL database for big data',
        color: '#10b981',
        icon: 'database',
        tags: ['nosql', 'distributed', 'big-data', 'column-family']
      },
      {
        id: 'neo4j',
        name: 'Neo4j',
        category: 'database',
        description: 'Graph database management system',
        color: '#10b981',
        icon: 'database',
        tags: ['graph', 'relationships', 'cypher', 'connections']
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'database',
        description: 'Self-contained SQL database engine',
        color: '#10b981',
        icon: 'database',
        tags: ['embedded', 'sql', 'lightweight', 'serverless']
      }
    ]
  },
  {
    id: 'cache',
    name: 'Cache',
    icon: 'zap',
    color: '#8b5cf6', // purple
    components: [
      {
        id: 'redis-cache',
        name: 'Redis Cache',
        category: 'cache',
        description: 'In-memory caching solution',
        color: '#8b5cf6',
        icon: 'zap',
        tags: ['cache', 'in-memory', 'fast', 'key-value']
      },
      {
        id: 'memcached',
        name: 'Memcached',
        category: 'cache',
        description: 'Distributed memory caching system',
        color: '#8b5cf6',
        icon: 'zap',
        tags: ['cache', 'distributed', 'memory', 'simple']
      },
      {
        id: 'varnish',
        name: 'Varnish',
        category: 'cache',
        description: 'HTTP accelerator and reverse proxy',
        color: '#8b5cf6',
        icon: 'zap',
        tags: ['http', 'accelerator', 'reverse-proxy', 'web']
      }
    ]
  },
  {
    id: 'api',
    name: 'API',
    icon: 'radio',
    color: '#f59e0b', // amber
    components: [
      {
        id: 'graphql',
        name: 'GraphQL',
        category: 'api',
        description: 'Query language and runtime for APIs',
        color: '#f59e0b',
        icon: 'radio',
        tags: ['query-language', 'api', 'flexible', 'type-safe']
      },
      {
        id: 'rest',
        name: 'REST API',
        category: 'api',
        description: 'Representational State Transfer architectural style',
        color: '#f59e0b',
        icon: 'radio',
        tags: ['http', 'stateless', 'crud', 'json']
      },
      {
        id: 'grpc',
        name: 'gRPC',
        category: 'api',
        description: 'High-performance RPC framework',
        color: '#f59e0b',
        icon: 'radio',
        tags: ['rpc', 'protocol-buffers', 'fast', 'streaming']
      },
      {
        id: 'apollo',
        name: 'Apollo Server',
        category: 'api',
        description: 'GraphQL server implementation',
        color: '#f59e0b',
        icon: 'radio',
        tags: ['graphql', 'server', 'schema', 'resolvers']
      }
    ]
  },
  {
    id: 'integration',
    name: 'Integration',
    icon: 'link',
    color: '#06b6d4', // cyan
    components: [
      {
        id: 'kafka',
        name: 'Apache Kafka',
        category: 'integration',
        description: 'Distributed event streaming platform',
        color: '#06b6d4',
        icon: 'link',
        tags: ['streaming', 'events', 'distributed', 'messaging']
      },
      {
        id: 'rabbitmq',
        name: 'RabbitMQ',
        category: 'integration',
        description: 'Message broker for reliable messaging',
        color: '#06b6d4',
        icon: 'link',
        tags: ['messaging', 'broker', 'amqp', 'reliable']
      },
      {
        id: 'websocket',
        name: 'WebSocket',
        category: 'integration',
        description: 'Real-time bidirectional communication',
        color: '#06b6d4',
        icon: 'link',
        tags: ['real-time', 'bidirectional', 'web', 'persistent']
      },
      {
        id: 'webhook',
        name: 'Webhook',
        category: 'integration',
        description: 'HTTP callbacks for event notifications',
        color: '#06b6d4',
        icon: 'link',
        tags: ['http', 'callbacks', 'events', 'notifications']
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: 'cloud',
    color: '#64748b', // slate
    components: [
      {
        id: 'docker',
        name: 'Docker',
        category: 'infrastructure',
        description: 'Containerization platform',
        color: '#64748b',
        icon: 'cloud',
        tags: ['containers', 'virtualization', 'deployment', 'microservices']
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'infrastructure',
        description: 'Container orchestration platform',
        color: '#64748b',
        icon: 'cloud',
        tags: ['orchestration', 'containers', 'scaling', 'cluster']
      },
      {
        id: 'nginx',
        name: 'Nginx',
        category: 'infrastructure',
        description: 'Web server and reverse proxy',
        color: '#64748b',
        icon: 'cloud',
        tags: ['web-server', 'reverse-proxy', 'load-balancer', 'high-performance']
      },
      {
        id: 'aws',
        name: 'AWS',
        category: 'infrastructure',
        description: 'Amazon Web Services cloud platform',
        color: '#64748b',
        icon: 'cloud',
        tags: ['cloud', 'aws', 'scalable', 'managed']
      }
    ]
  },
  {
    id: 'tooling',
    name: 'Tooling',
    icon: 'wrench',
    color: '#84cc16', // lime
    components: [
      {
        id: 'git',
        name: 'Git',
        category: 'tooling',
        description: 'Distributed version control system',
        color: '#84cc16',
        icon: 'wrench',
        tags: ['version-control', 'distributed', 'collaboration', 'source-code']
      },
      {
        id: 'jenkins',
        name: 'Jenkins',
        category: 'tooling',
        description: 'Automation server for CI/CD',
        color: '#84cc16',
        icon: 'wrench',
        tags: ['ci-cd', 'automation', 'pipeline', 'build']
      },
      {
        id: 'prometheus',
        name: 'Prometheus',
        category: 'tooling',
        description: 'Monitoring and alerting toolkit',
        color: '#84cc16',
        icon: 'wrench',
        tags: ['monitoring', 'metrics', 'alerting', 'time-series']
      },
      {
        id: 'grafana',
        name: 'Grafana',
        category: 'tooling',
        description: 'Analytics and monitoring dashboards',
        color: '#84cc16',
        icon: 'wrench',
        tags: ['dashboards', 'visualization', 'monitoring', 'analytics']
      }
    ]
  }
];

export function getAllComponents(): Component[] {
  return componentCategories.flatMap(category => category.components);
}

export function searchComponents(query: string): Component[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllComponents().filter(component =>
    component.name.toLowerCase().includes(lowercaseQuery) ||
    component.description.toLowerCase().includes(lowercaseQuery) ||
    component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getComponentsByCategory(categoryId: string): Component[] {
  const category = componentCategories.find(cat => cat.id === categoryId);
  return category ? category.components : [];
}
