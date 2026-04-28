import type { Project } from '@/types/projects'
import { TECH_DICT } from './stack'

export const PROJECTS: Project[] = [
  {
    id: 'devstore',
    title: 'DevStore',
    description:
      'E-commerce de periféricos tech com carrinho global e design responsivo. Focado em alta performance e componentização.',
    image: '/images/projects/devstore.webp',
    category: 'fullstack',
    technologies: [TECH_DICT.next, TECH_DICT.ts, TECH_DICT.tailwind, TECH_DICT.zustand],
    links: {
      github: 'https://github.com/seu-usuario/devstore',
      live: 'https://devstore-live.com',
    },
    featured: true,
  },
  {
    id: 'booklyshelf',
    title: 'BooklyShelf API',
    description:
      'API REST robusta para gerenciamento de livros. Conta com autenticação JWT, migrações de banco de dados e validação estrita.',
    image: '/images/projects/booklyshelf.webp',
    category: 'backend',
    technologies: [TECH_DICT.node, TECH_DICT.fastify, TECH_DICT.postgres, TECH_DICT.prisma],
    links: {
      github: 'https://github.com/seu-usuario/booklyshelf-api',
      apiDocs: 'https://api.booklyshelf.com/docs',
    },
    featured: true,
  },
  {
    id: 'selma-bolos',
    title: 'Selma Bolos',
    description:
      'Landing page profissional para confeitaria artesanal em Várzea Paulista, com foco em SEO, performance e conversão de clientes.',
    image: '/images/projects/selma-bolos.webp',
    category: 'frontend',
    technologies: [TECH_DICT.react, TECH_DICT.ts, TECH_DICT.tailwind, TECH_DICT.vite],
    links: {
      github: 'https://github.com/seu-usuario/selma-bolos',
      live: 'https://selmabolos.com.br',
    },
    featured: false,
  },
]
