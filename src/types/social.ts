export type SocialPlatform = 'github' | 'linkedin' | 'email'

export type SocialLink = {
  platform: SocialPlatform
  label: string
  href: string
}
