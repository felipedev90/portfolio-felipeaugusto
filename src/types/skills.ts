export type SkillCategory = {
  title: string
  items: readonly string[]
}

export type Technology = {
  name: string
  icon: string
}

export type TechCategory = {
  title: string
  stacks: readonly Technology[]
}
