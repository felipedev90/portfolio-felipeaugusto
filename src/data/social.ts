import type { SocialLink } from '@/types/social'

export const SOCIAL_LINKS = [
  {
    platform: 'github',
    label: 'Github',
    href: 'https://github.com/felipedev90',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/felipesilva90/',
  },
  {
    platform: 'email',
    label: 'E-mail',
    href: 'mailto:augusto.felipedev@gmail.com',
  },
] as const satisfies readonly SocialLink[]
