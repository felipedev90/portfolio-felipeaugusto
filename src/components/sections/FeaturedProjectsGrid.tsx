import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/types/projects'

type Props = {
  projects: Project[]
}

export function FeaturedProjectsGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-10 justify-items-center mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
