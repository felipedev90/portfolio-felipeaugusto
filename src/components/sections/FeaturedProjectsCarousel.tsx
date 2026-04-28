'use client'

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/types/projects'

type Props = {
  projects: Project[]
}

export function FeaturedProjectsCarousel({ projects }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    requestAnimationFrame(() => {
      onSelect()
    })

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="-mx-6 overflow-hidden" ref={emblaRef}>
      <div className="flex touch-pan-y gap-4 px-6 py-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={index === selectedIndex}
            priority={index < 2}
          />
        ))}
      </div>
    </div>
  )
}
