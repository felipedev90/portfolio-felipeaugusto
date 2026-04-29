import Link from 'next/link'
import { cn } from '@/lib/cn'
import { Icon } from '@/components/ui/Icon'
import type { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'ghost'

type ButtonProps = {
  href: string
  variant?: ButtonVariant
  leadingIcon?: LucideIcon
  trailingIcon?: LucideIcon
  external?: boolean
  download?: boolean | string
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'inline-flex items-center gap-3',
    'border border-sand text-sand',
    'px-7 py-4',
    'text-xs uppercase tracking-[0.2em] font-medium',
    'transition-colors duration-300',
    'hover:bg-sand hover:text-bg',
    'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
  ),
  ghost: cn(
    'inline-flex items-center gap-2',
    'text-sand-muted',
    'text-xs uppercase tracking-[0.2em]',
    'transition-colors duration-300',
    'hover:text-accent',
    'focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2',
  ),
}

function isExternalUrl(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href)
}

function isStaticAsset(href: string): boolean {
  return /\.(pdf|zip|doc|docx|xls|xlsx|png|jpg|jpeg|webp|svg)$/i.test(href)
}

export function Button({
  href,
  variant = 'primary',
  leadingIcon,
  trailingIcon,
  external,
  download,
  className,
  children,
}: ButtonProps) {
  const isExternal = external ?? isExternalUrl(href)
  const useNativeAnchor = isExternal || isStaticAsset(href)
  const classes = cn(variantStyles[variant], className)

  const content = (
    <>
      {leadingIcon && <Icon icon={leadingIcon} className="size-4" />}
      <span>{children}</span>
      {trailingIcon && <Icon icon={trailingIcon} className="size-4" />}
    </>
  )

  if (useNativeAnchor) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={download}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} download={download}>
      {content}
    </Link>
  )
}
