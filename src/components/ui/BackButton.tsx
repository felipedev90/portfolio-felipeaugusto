'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/cn'

type BackButtonProps = {
  fallbackHref?: string
  label?: string
  className?: string
}

export function BackButton({ fallbackHref = '/', label = 'Voltar', className }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallbackHref)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-2',
        'text-sand-muted text-xs uppercase tracking-[0.2em]',
        'transition-colors duration-300',
        'hover:text-accent',
        'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
        className,
      )}
    >
      <ArrowLeft className="size-4" aria-hidden="true" />
      {label}
    </button>
  )
}
