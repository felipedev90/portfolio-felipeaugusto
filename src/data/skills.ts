import type { SkillCategory } from '@/types/skills'

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'SASS',
      'HTML5',
      'JavaScript (ES6+)',
      'CSS3',
      'CSS Modules',
      'Styled Components',
    ],
  },
  {
    title: 'Qualidade & CI/CD',
    items: [
      'Vitest',
      'Testing Library',
      'Jest',
      'Playwright',
      'E2E Testing',
      'ESLint',
      'Prettier',
      'Husky',
      'Git & GitHub',
      'GitHub Actions',
      'Vite',
      'Railway',
      'Vercel',
      'Render',
    ],
  },
  {
    title: 'Backend & API - Em estudo',
    items: ['Node.js', 'PostgreSQL', 'Fastify', 'Prisma', 'MongoDB', 'Express'],
  },
] as const satisfies readonly SkillCategory[]
