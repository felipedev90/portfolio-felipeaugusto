import { cn } from '@/lib/cn'

type ShimmerVariant = 'sand' | 'moonlight' | 'night'

type ShimmerTextProps = {
  variant?: ShimmerVariant
  className?: string
  children: React.ReactNode
}

const VARIANT_CLASSES: Record<ShimmerVariant, string> = {
  sand: 'bg-[linear-gradient(110deg,var(--color-sand)_35%,#fff_50%,var(--color-sand)_65%)]',

  moonlight:
    'bg-[linear-gradient(110deg,var(--color-sand-muted)_35%,var(--color-sand)_50%,var(--color-sand-muted)_65%)]',

  night:
    'bg-[linear-gradient(110deg,var(--color-sand)_35%,var(--color-sand-dim)_50%,var(--color-sand)_65%)]',
}

export function ShimmerText({ variant = 'sand', className, children }: ShimmerTextProps) {
  return (
    <span
      className={cn(
        'inline bg-size-[250%_100%] bg-clip-text text-transparent',
        'motion-safe:animate-shimmer',
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
