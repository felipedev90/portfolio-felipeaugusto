import type { Technology, TechCategory } from '../types/skills'

export const TECH_DICT = {
  // Linguagens & Core
  html: { name: 'HTML5', icon: '/images/stacks/html5.svg' },
  css: { name: 'CSS3', icon: '/images/stacks/css3.svg' },
  js: { name: 'JavaScript', icon: '/images/stacks/javascript.svg' },
  ts: { name: 'TypeScript', icon: '/images/stacks/typescript.svg' },

  // Ecossistema Frontend
  react: { name: 'React', icon: '/images/stacks/react.svg' },
  next: { name: 'Next.js', icon: '/images/stacks/nextjs.svg' },
  tailwind: { name: 'Tailwind CSS', icon: '/images/stacks/tailwindcss.svg' },
  sass: { name: 'SASS', icon: '/images/stacks/sass.svg' },
  bootstrap: { name: 'Bootstrap', icon: '/images/stacks/bootstrap.svg' },
  zustand: { name: 'Zustand', icon: '/images/stacks/zustand.svg' },

  // Ecossistema Backend
  node: { name: 'Node.js', icon: '/images/stacks/nodejs3.svg' },
  fastify: { name: 'Fastify', icon: '/images/stacks/fastify.svg' },
  postgres: { name: 'PostgreSQL', icon: '/images/stacks/postgresql.svg' },
  prisma: { name: 'Prisma', icon: '/images/stacks/prisma.svg' },
  jwt: { name: 'JWT', icon: '/images/stacks/jwt.svg' },
  zod: { name: 'Zod', icon: '/images/stacks/zod.svg' },

  // Qualidade, Ferramentas & Métodos
  git: { name: 'Git', icon: '/images/stacks/git.svg' },
  github: { name: 'GitHub', icon: '/images/stacks/github.svg' },
  githubactions: { name: 'GitHub Actions', icon: '/images/stacks/githubactions.svg' },
  npm: { name: 'NPM', icon: '/images/stacks/npm.svg' },
  vite: { name: 'Vite', icon: '/images/stacks/vitejs.svg' },
  vscode: { name: 'VS Code', icon: '/images/stacks/vs-code.svg' },
  figma: { name: 'Figma', icon: '/images/stacks/figma.svg' },
  vercel: { name: 'Vercel', icon: '/images/stacks/vercel.svg' },
  eslint: { name: 'ESLint', icon: '/images/stacks/eslint.svg' },
  vitest: { name: 'Vitest', icon: '/images/stacks/vitest.svg' },
  playwright: { name: 'Playwright', icon: '/images/stacks/playwright.svg' },
  testinglibrary: { name: 'Testing Library', icon: '/images/stacks/testinglibrary.svg' },

  ia: { name: 'Claude', icon: '/images/stacks/claude.svg' },
} as const satisfies Record<string, Technology>

export const CORE_STACK: Technology[] = [
  TECH_DICT.react,
  TECH_DICT.next,
  TECH_DICT.ts,
  TECH_DICT.node,
]

export const STACKS_PAGE_DATA: TechCategory[] = [
  {
    title: 'Frontend',
    stacks: [
      TECH_DICT.html,
      TECH_DICT.css,
      TECH_DICT.js,
      TECH_DICT.ts,
      TECH_DICT.react,
      TECH_DICT.next,
      TECH_DICT.tailwind,
      TECH_DICT.sass,
      TECH_DICT.bootstrap,
      TECH_DICT.zustand,
    ],
  },
  {
    title: 'Qualidade, Ferramentas & Métodos',
    stacks: [
      TECH_DICT.git,
      TECH_DICT.github,
      TECH_DICT.githubactions,
      TECH_DICT.npm,
      TECH_DICT.vite,
      TECH_DICT.eslint,
      TECH_DICT.vitest,
      TECH_DICT.testinglibrary,
      TECH_DICT.playwright,
      TECH_DICT.figma,
      TECH_DICT.vercel,
      TECH_DICT.vscode,
    ],
  },
  {
    title: 'Em estudo - Backend & API',
    stacks: [
      TECH_DICT.node,
      TECH_DICT.fastify,
      TECH_DICT.postgres,
      TECH_DICT.prisma,
      TECH_DICT.zod,
      TECH_DICT.jwt,
    ],
  },
]
