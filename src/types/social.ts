export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'whatsapp'

export type SocialLink = {
  platform: SocialPlatform
  label: string
  href: string
}

export type SocialIcon = {
  [key in SocialPlatform]: string
}
