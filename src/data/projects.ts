import type { Project } from '@/types/projects'
import { TECH_DICT } from './stack'

export const PROJECTS: Project[] = [
  {
    id: 'devstore',
    title: 'DevStore',
    description:
      'E-commerce fullstack de periféricos tech. Autenticação JWT e API REST própria (Fastify + PostgreSQL). Foco em SSR/SSG/ISR, testes automatizados e CI/CD.',
    image: '/images/projects/devstore.webp',
    category: 'fullstack',
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
    featured: true,
  },
  {
    id: 'freelancer',
    title: 'Website Dev Freelancer',
    description:
      'Site profissional de desenvolvedor web freelancer. Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion. Lighthouse 94/91/100/100. Deploy na Vercel.',
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
    id: 'selma-bolos',
    title: 'Website Selma Bolos',
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
]
