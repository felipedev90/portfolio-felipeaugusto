import { cn } from '@/lib/cn'

type ShimmerVariant = 'night'

type ShimmerTextProps = {
  variant?: ShimmerVariant
  className?: string
  children: React.ReactNode
}

const VARIANT_CLASSES: Record<ShimmerVariant, string> = {
  night:
    'bg-[linear-gradient(110deg,var(--color-sand)_35%,var(--color-sand-dim)_50%,var(--color-sand)_65%)]',
}

export function ShimmerText({ variant = 'night', className, children }: ShimmerTextProps) {
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
