'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'

export function Skeleton() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-100',
        'bg-bg flex flex-col items-center justify-center gap-8',
        'transition-opacity duration-700',
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
    >
      <div className="font-serif text-sand text-5xl md:text-7xl font-light tracking-[0.03em] gap-4">
        Felipe <em className="text-accent not-italic">Augusto</em>
        <span className="block text-[24px] font-sans mt-6 text-sand/70 text-center tracking-[0.03em]">
          Frontend Developer
        </span>
      </div>

      <div className="relative h-px w-48 bg-border-strong overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent animate-scan" />
      </div>
    </div>
  )
}
