'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'

const GREETINGS = [
  { welcome: 'Bem-vindo ao', highlight: 'meu portfólio' },
  { welcome: 'Welcome to', highlight: 'my portfolio' },
  { welcome: 'Willkommen in', highlight: 'meinem Portfolio' },
]

const STORAGE_KEY = 'skeletonShown'

export function Skeleton() {
  const [faded, setFaded] = useState(false)
  const [index, setIndex] = useState(0)
  const [shouldRender] = useState(() => sessionStorage.getItem(STORAGE_KEY) !== '1')

  useEffect(() => {
    if (!shouldRender) return

    const languageInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % GREETINGS.length)
    }, 1500)

    const fadeTimer = setTimeout(() => {
      setFaded(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
      clearInterval(languageInterval)
    }, 3500)

    return () => {
      clearInterval(languageInterval)
      clearTimeout(fadeTimer)
    }
  }, [shouldRender])

  if (!shouldRender) return null

  const currentGreeting = GREETINGS[index]
  if (!currentGreeting) return null

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-100',
        'bg-bg flex flex-col items-center justify-center gap-8',
        'transition-opacity duration-700',
        faded ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
    >
      <div className="font-display text-sand text-5xl md:text-7xl font-light tracking-[0.03em] flex flex-col items-center text-center">
        {/* Adicionei uma transição suave na troca do texto */}
        <div key={index} className="animate-in fade-in duration-300">
          {currentGreeting.welcome}{' '}
          <em className="text-accent not-italic">{currentGreeting.highlight}</em>
        </div>

        <span className="block text-[24px] font-sans mt-6 text-sand/70 tracking-[0.03em]">
          Felipe Augusto • Frontend Developer
        </span>
      </div>

      <div className="relative h-px w-64 bg-border-strong overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-accent to-transparent animate-scan" />
      </div>
    </div>
  )
}
