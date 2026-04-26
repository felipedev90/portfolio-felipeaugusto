import type { SkillCategory } from '@/types/skills'

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SASS', 'HTML5', 'CSS3', 'CSS Modules'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'JWT'],
  },
  {
    title: 'Qualidade & CI/CD',
    items: [
      'Vitest',
      'Testing Library',
      'ESLint',
      'Prettier',
      'Git & GitHub',
      'GitHub Actions',
      'Vite',
      'Railway',
      'Vercel',
    ],
  },
] as const satisfies readonly SkillCategory[]
