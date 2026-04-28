import type { Project } from '@/types/projects'
import { TECH_DICT } from './stack'

export const PROJECTS: Project[] = [
  {
    id: 'devstore',
    title: 'DevStore',
    description:
      'DevStore é um e-commerce completo que demonstra na prática o uso de diferentes estratégias de renderização do Next.js (SSG, SSR, ISR), design system próprio, gerenciamento de estado global com Zustand, testes automatizados e pipeline CI/CD.',
    image: '/images/projects/devstore.webp',
    category: 'frontend',
    technologies: [
      TECH_DICT.next,
      TECH_DICT.ts,
      TECH_DICT.tailwind,
      TECH_DICT.zustand,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.githubactions,
      TECH_DICT.vercel,
    ],
    links: {
      github: 'https://github.com/felipedev90/dev-store.git',
      live: 'https://dev-store-zeta.vercel.app/',
    },
    featured: true,
  },
  {
    id: 'devstore-api',
    title: 'DevStore API',
    description:
      'API REST para e-commerce de periféricos tech. Node.js, Fastify, TypeScript, PostgreSQL e Prisma. Autenticação JWT, validação com Zod e deploy no Render com banco Neon.',
    image: '/images/projects/devstore-api.webp',
    category: 'backend',
    technologies: [
      TECH_DICT.node,
      TECH_DICT.fastify,
      TECH_DICT.postgres,
      TECH_DICT.prisma,
      TECH_DICT.zod,
      TECH_DICT.jwt,
    ],
    links: {
      github: 'https://github.com/felipedev90/devstore-api.git',
      live: 'https://dev-store-zeta.vercel.app/',
    },
    featured: false,
  },
  {
    id: 'freelancer',
    title: 'Dev Freelancer',
    description:
      'Site profissional de desenvolvedor web freelancer. Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion. Lighthouse 94/91/100/100. SEO completo com Metadata, Open Graph, sitemap, robots, schema via JSON-LD e Google Search Console verificado. Deploy na Vercel.',
    image: '/images/projects/felipeaugustodev.webp',
    category: 'frontend',
    technologies: [
      TECH_DICT.next,
      TECH_DICT.ts,
      TECH_DICT.tailwind,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.githubactions,
      TECH_DICT.vercel,
    ],
    links: {
      github: 'https://github.com/felipedev90/felipe-dev.git',
      live: 'https://www.felipeaugustodev.com.br/',
    },
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description:
      'Aplicação web moderna para gerenciamento de despesas pessoais, desenvolvida com React, TypeScript e Vite, com sistema completo de filtros, persistência de dados e design responsivo.',
    image: '/images/projects/expense-tracker.webp',
    category: 'frontend',
    technologies: [
      TECH_DICT.react,
      TECH_DICT.ts,
      TECH_DICT.sass,
      TECH_DICT.vite,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.githubactions,
      TECH_DICT.vercel,
    ],
    links: {
      github: 'https://github.com/felipedev90/expense-tracker.git',
      live: 'https://expense-tracker-tawny-beta-38.vercel.app/',
    },
    featured: true,
  },
  {
    id: 'selma-bolos',
    title: 'Selma Bolos',
    description:
      'Landing page para uma confeitaria artesanal real, desenvolvida com Next.js 15 e Tailwind CSS. O projeto inclui cardápio completo, calculadora de preços interativa e integração com WhatsApp para pedidos.',
    image: '/images/projects/selmabolos.webp',
    category: 'frontend',
    technologies: [
      TECH_DICT.next,
      TECH_DICT.ts,
      TECH_DICT.tailwind,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.githubactions,
      TECH_DICT.vercel,
    ],
    links: {
      github: 'https://github.com/felipedev90/selmabolos.git',
      live: 'https://selmabolos.com.br/',
    },
    featured: true,
  },
  {
    id: 'portal',
    title: 'Portal Viagens',
    description:
      'Aplicação web em Next.js 15 com TypeScript que lista 8 destinos turísticos europeus. Utiliza rotas baseadas em arquivos para as páginas Home e Listagem, rota dinâmica [id] para a página de detalhe de cada destino, layout global com Header e Footer reutilizáveis via layout.tsx, CSS Modules para estilização com escopo isolado, next/link para navegação SPA, next/image para otimização de imagens.',
    image: '/images/projects/portal-viagens.webp',
    category: 'frontend',
    technologies: [TECH_DICT.next, TECH_DICT.ts, TECH_DICT.sass, TECH_DICT.vercel],
    links: {
      github: 'https://github.com/felipedev90/portal-viagens.git',
      live: 'https://portal-viagens-nu.vercel.app/',
    },
    featured: true,
  },
  {
    id: 'asimov',
    title: 'Asimov Hero',
    description:
      'Hero section do zero para landing page de curso de Python, com layout animado. Construído com Next.js 16, TypeScript, Tailwind com design tokens via @theme, e Motion para animações. Lighthouse 100 em SEO e Best Practices.',
    image: '/images/projects/asimov.webp',
    category: 'frontend',
    technologies: [
      TECH_DICT.next,
      TECH_DICT.ts,
      TECH_DICT.tailwind,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.githubactions,
      TECH_DICT.vercel,
    ],
    links: {
      github: 'https://github.com/felipedev90/asimov-teste-tecnico.git',
      live: 'https://asimov-hero-felipe-augusto.vercel.app/',
    },
    featured: true,
  },
]
