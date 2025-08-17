export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  uses: number;
  technologies: string[];
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All', icon: 'layout-grid' },
  { id: 'web', name: 'Web Applications', icon: 'globe' },
  { id: 'api', name: 'APIs & Microservices', icon: 'server' },
  { id: 'realtime', name: 'Real-Time Systems', icon: 'zap' },
  { id: 'mobile', name: 'Mobile & Cross-Platform', icon: 'smartphone' },
  { id: 'serverless', name: 'Serverless & Managed', icon: 'cloud' },
  { id: 'devops', name: 'DevOps & Infrastructure', icon: 'settings' },
  { id: 'data', name: 'Data & Storage', icon: 'database' },
  { id: 'monitoring', name: 'Monitoring & Observability', icon: 'eye' },
  { id: 'minimal', name: 'Minimalist & Lightweight', icon: 'minimize' },
  { id: 'experiment', name: 'Experiment & Sandbox', icon: 'beaker' },
];

export const templates: Template[] = [
  // Web Applications
  {
    id: 'angular-spring-mysql',
    title: 'Angular + Spring Boot + MySQL',
    description: 'Robust frontend with Angular, Java backend using Spring Boot and MySQL database.',
    category: 'web',
    uses: 67,
    technologies: ['Angular', 'Spring Boot', 'MySQL'],
    icon: 'globe'
  },
  {
    id: 'pern-stack',
    title: 'PERN Stack (PostgreSQL, Express, React, Node.js)',
    description: 'Modern full-stack app with PostgreSQL database, Express.js and Node.js backend, and React frontend.',
    category: 'web',
    uses: 50,
    technologies: ['PostgreSQL', 'Express', 'React', 'Node.js'],
    icon: 'globe'
  },
  {
    id: 'vue-express-mongo',
    title: 'Vue.js + Express + MongoDB + Redis Cache',
    description: 'Vue frontend with Express backend, MongoDB database and Redis caching.',
    category: 'web',
    uses: 27,
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis'],
    icon: 'globe'
  },
  {
    id: 'sveltekit-go-postgres',
    title: 'SvelteKit + Go (net/http) + PostgreSQL',
    description: 'Modern SvelteKit frontend, Go backend, and PostgreSQL database.',
    category: 'web',
    uses: 22,
    technologies: ['SvelteKit', 'Go', 'PostgreSQL'],
    icon: 'globe'
  },
  {
    id: 'nextjs-fastapi-postgres',
    title: 'Next.js + FastAPI + PostgreSQL + Redis Cache',
    description: 'Next.js frontend with FastAPI backend, PostgreSQL DB, and Redis cache.',
    category: 'web',
    uses: 13,
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis'],
    icon: 'globe'
  },

  // APIs & Microservices
  {
    id: 'fastapi-rabbitmq-postgres',
    title: 'FastAPI + RabbitMQ + PostgreSQL + Redis Cache',
    description: 'Python FastAPI service communicating asynchronously over RabbitMQ, storing data in PostgreSQL and caching in Redis.',
    category: 'api',
    uses: 52,
    technologies: ['FastAPI', 'RabbitMQ', 'PostgreSQL', 'Redis'],
    icon: 'server'
  },
  {
    id: 'nestjs-graphql-postgres',
    title: 'NestJS + GraphQL Federation + PostgreSQL',
    description: 'NestJS backend exposing federated GraphQL services, connected to PostgreSQL.',
    category: 'api',
    uses: 42,
    technologies: ['NestJS', 'GraphQL', 'PostgreSQL'],
    icon: 'server'
  },
  {
    id: 'spring-kafka-postgres',
    title: 'Spring Boot + Kafka + PostgreSQL',
    description: 'Java service with Spring Boot using Kafka for event streaming and PostgreSQL for data storage.',
    category: 'api',
    uses: 40,
    technologies: ['Spring Boot', 'Kafka', 'PostgreSQL'],
    icon: 'server'
  },

  // Real-Time Systems
  {
    id: 'go-websocket-nats',
    title: 'Go + WebSocket + NATS + TimescaleDB',
    description: 'Go backend with WebSocket real-time communication, NATS messaging, and TimescaleDB for time-series data.',
    category: 'realtime',
    uses: 31,
    technologies: ['Go', 'WebSocket', 'NATS', 'TimescaleDB'],
    icon: 'zap'
  },
  {
    id: 'phoenix-pubsub-redis',
    title: 'Elixir Phoenix + PubSub + Redis Cache + PostgreSQL',
    description: 'Phoenix framework leveraging built-in PubSub for real-time events, Redis cache, and PostgreSQL.',
    category: 'realtime',
    uses: 23,
    technologies: ['Elixir', 'Phoenix', 'PubSub', 'Redis', 'PostgreSQL'],
    icon: 'zap'
  },

  // Mobile & Cross-Platform
  {
    id: 'swiftui-django-postgres',
    title: 'SwiftUI + Django + PostgreSQL + Firebase Analytics',
    description: 'iOS app built with SwiftUI, Django backend with PostgreSQL, and Firebase Analytics for user tracking.',
    category: 'mobile',
    uses: 36,
    technologies: ['SwiftUI', 'Django', 'PostgreSQL', 'Firebase'],
    icon: 'smartphone'
  },
  {
    id: 'jetpack-spring-mysql',
    title: 'Jetpack Compose + Spring Boot + MySQL + Keycloak',
    description: 'Android app built with Jetpack Compose, Spring Boot backend with MySQL, and Keycloak for identity management.',
    category: 'mobile',
    uses: 33,
    technologies: ['Jetpack Compose', 'Spring Boot', 'MySQL', 'Keycloak'],
    icon: 'smartphone'
  },
  {
    id: 'flutter-fastapi-mongo',
    title: 'Flutter + FastAPI + MongoDB + Auth0',
    description: 'Flutter frontend connecting to Python FastAPI backend, storing data in MongoDB and using Auth0 for user authentication.',
    category: 'mobile',
    uses: 30,
    technologies: ['Flutter', 'FastAPI', 'MongoDB', 'Auth0'],
    icon: 'smartphone'
  },

  // Serverless & Managed
  {
    id: 'netlify-hasura-postgres',
    title: 'Netlify Functions + Hasura GraphQL + PostgreSQL + Redis',
    description: 'Serverless functions on Netlify, Hasura exposing GraphQL over PostgreSQL, and Redis for caching.',
    category: 'serverless',
    uses: 45,
    technologies: ['Netlify Functions', 'Hasura', 'PostgreSQL', 'Redis'],
    icon: 'cloud'
  },
  {
    id: 'azure-cosmos-redis',
    title: 'Azure Functions + Cosmos-style MongoDB + Redis',
    description: 'Azure Functions handling backend logic, MongoDB API as Cosmos-style managed DB, and Redis for caching.',
    category: 'serverless',
    uses: 42,
    technologies: ['Azure Functions', 'Cosmos DB', 'Redis'],
    icon: 'cloud'
  },

  // DevOps & Infrastructure
  {
    id: 'argocd-k8s-prometheus',
    title: 'Argo CD + Kubernetes + Prometheus + Grafana',
    description: 'GitOps style delivery: Argo CD manages Kubernetes deployments, monitored by Prometheus and visualized by Grafana.',
    category: 'devops',
    uses: 44,
    technologies: ['Argo CD', 'Kubernetes', 'Prometheus', 'Grafana'],
    icon: 'settings'
  },
  {
    id: 'jenkins-ansible-docker',
    title: 'Jenkins + Ansible + Docker + Kubernetes',
    description: 'Jenkins for CI/CD, Ansible for provisioning, Docker for containers, Kubernetes for orchestration.',
    category: 'devops',
    uses: 40,
    technologies: ['Jenkins', 'Ansible', 'Docker', 'Kubernetes'],
    icon: 'settings'
  },

  // Data & Storage
  {
    id: 'mongo-redis-elastic',
    title: 'MongoDB + Redis + Elasticsearch',
    description: 'Document DB with Redis caching and Elasticsearch for full-text search.',
    category: 'data',
    uses: 48,
    technologies: ['MongoDB', 'Redis', 'Elasticsearch'],
    icon: 'database'
  },
  {
    id: 'postgres-redis-timescale',
    title: 'PostgreSQL + Redis + TimescaleDB',
    description: 'Relational DB with caching and time-series extension for analytics.',
    category: 'data',
    uses: 26,
    technologies: ['PostgreSQL', 'Redis', 'TimescaleDB'],
    icon: 'database'
  },

  // Monitoring & Observability
  {
    id: 'zipkin-prometheus-grafana',
    title: 'Zipkin + Prometheus + Grafana',
    description: 'Tracing with Zipkin combined with metrics and dashboards.',
    category: 'monitoring',
    uses: 49,
    technologies: ['Zipkin', 'Prometheus', 'Grafana'],
    icon: 'eye'
  },
  {
    id: 'prometheus-grafana-loki',
    title: 'Prometheus + Grafana + Loki',
    description: 'Metrics with Prometheus, visualization with Grafana, and logs with Loki.',
    category: 'monitoring',
    uses: 47,
    technologies: ['Prometheus', 'Grafana', 'Loki'],
    icon: 'eye'
  },

  // Minimalist & Lightweight
  {
    id: 'vue-firebase',
    title: 'Vue.js + Firebase',
    description: 'Lightweight app with Vue.js frontend and Firebase as backend & database.',
    category: 'minimal',
    uses: 44,
    technologies: ['Vue.js', 'Firebase'],
    icon: 'minimize'
  },
  {
    id: 'alpine-go-sqlite',
    title: 'Alpine.js + Go (net/http) + SQLite',
    description: 'Ultra lightweight setup: Alpine.js for interactivity, Go net/http backend, SQLite.',
    category: 'minimal',
    uses: 31,
    technologies: ['Alpine.js', 'Go', 'SQLite'],
    icon: 'minimize'
  },

  // Experiment & Sandbox
  {
    id: 'vue-apollo-neo4j',
    title: 'Vue.js + Apollo Server + Neo4j',
    description: 'Prototype using Vue.js frontend, Apollo Server as GraphQL gateway, and Neo4j graph database.',
    category: 'experiment',
    uses: 50,
    technologies: ['Vue.js', 'Apollo Server', 'Neo4j'],
    icon: 'beaker'
  },
  {
    id: 'sveltekit-supabase-webhooks',
    title: 'SvelteKit + Supabase + Webhooks + OpenTelemetry',
    description: 'Prototype stack mixing SvelteKit frontend, Supabase backend, reactive webhooks, and distributed tracing with OpenTelemetry.',
    category: 'experiment',
    uses: 40,
    technologies: ['SvelteKit', 'Supabase', 'Webhooks', 'OpenTelemetry'],
    icon: 'beaker'
  },
];

export function getTemplatesByCategory(categoryId: string): Template[] {
  if (categoryId === 'all') {
    return templates;
  }
  return templates.filter(template => template.category === categoryId);
}

export function searchTemplates(query: string): Template[] {
  const lowercaseQuery = query.toLowerCase();
  return templates.filter(template =>
    template.title.toLowerCase().includes(lowercaseQuery) ||
    template.description.toLowerCase().includes(lowercaseQuery) ||
    template.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  );
}
