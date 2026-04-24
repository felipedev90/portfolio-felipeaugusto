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

// 'satisfies' é usado para garantir que o array SOCIAL_LINKS seja do tipo readonly SocialLink[], permitindo a imutabilidade e garantindo que cada item do array siga a estrutura definida por SocialLink.
