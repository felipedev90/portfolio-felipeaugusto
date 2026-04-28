import { Technology } from './skills'

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack'

export type Project = {
  id: string
  title: string
  description: string
  image: string
  category: ProjectCategory
  technologies: Technology[]
  links: {
    github?: string
    live?: string
    apiDocs?: string
  }
  featured: boolean
}
