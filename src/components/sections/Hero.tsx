import Image from 'next/image'
import { Button } from '../ui/Button'
import { HERO } from '@/data/hero'
import { CORE_STACK } from '@/data/stack'
import { Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero_background.webp"
          alt="Duna solitária sob céu estrelado"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] brightness-[0.85] contrast-105 opacity-50"
        />
      </div>

      {/* Overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(10,15,31,0.85)_0%,rgba(10,15,31,0.45)_35%,rgba(10,15,31,0.15)_60%,transparent_85%),linear-gradient(180deg,rgba(10,15,31,0.2)_0%,rgba(10,15,31,0.3)_20%,var(--color-bg)_100%)]"
      />

      {/* Content */}
      <div className="relative z-2 max-w-350 w-full flex flex-col items-center justify-center pt-60">
        {HERO.availability && (
          <div className="inline-flex items-center gap-3 mb-12 text-[11px] uppercase tracking-[0.25em] text-sand-muted">
            <span className="relative w-2 h-2 bg-green rounded-full">
              <span className="absolute inset-1.25 rounded-full bg-green/40 animate-pulse" />
            </span>
            Disponível para novos projetos
          </div>
        )}
        <h1 className="font-serif text-center font-light text-[clamp(82px,13vw,200px)] leading-[0.88] tracking-[-0.045em] text-sand mb-12">
          {HERO.firstName} <em className="text-accent not-italic">{HERO.lastName}</em>
        </h1>
        <p className="font-serif text-center font-light text-xl md:text-2xl text-sand-muted max-w-4xl leading-relaxed mb-8">
          {HERO.tagline}
        </p>
        <div className="text-sm text-sand-muted tracking-wider mb-12">{CORE_STACK.join(' • ')}</div>
        <Button href="/felipe_augusto_frontend_CV.pdf" trailingIcon={Download} variant="primary">
          Baixar CV
        </Button>
      </div>
    </section>
  )
}
