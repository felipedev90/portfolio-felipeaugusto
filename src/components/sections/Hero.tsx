import Image from 'next/image'
import { Button } from '../ui/Button'
import { HERO } from '@/data/hero'
import { Download } from 'lucide-react'
import { ShimmerText } from '../ui/ShimmerText'
import { STACKS_ICONS } from '@/data/stack'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 pb-15">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero_background2.webp"
          alt="Duna solitária sob céu estrelado"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center  opacity-20"
        />
      </div>

      {/* Overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-linear-to-t from-bg/60 to-transparent"
      />

      {/* Content */}
      <div className="relative z-2 max-w-350 w-full flex flex-col items-center justify-center pt-2  md:pt-60">
        {HERO.availability && (
          <div className="inline-flex items-center gap-3 mb-6 text-[11px] uppercase tracking-[0.25em] text-sand-muted">
            <span className="relative w-2 h-2 bg-green rounded-full">
              <span className="absolute inset-1.25 rounded-full bg-green/80 animate-pulse" />
            </span>
            Disponível para novos projetos
          </div>
        )}
        <h1 className="font-display text-center font-light text-[clamp(82px,13vw,190px)] leading-[0.88] tracking-[-0.045em] text-sand mb-12 ">
          <ShimmerText variant="night">
            {HERO.firstName} {HERO.lastName}
          </ShimmerText>
        </h1>
        <p className="font-serif text-center font-light text-xl md:text-2xl text-sand-muted max-w-4xl leading-relaxed mb-8">
          {HERO.tagline}
        </p>
        <Button href="/felipe_augusto_frontend_CV.pdf" trailingIcon={Download} variant="primary">
          Baixar CV
        </Button>

        {/* Stack Icons */}
        <div className="flex flex-wrap justify-center gap-6 z-2 mt-10">
          {STACKS_ICONS.map((stack) => (
            <Image
              key={stack.name}
              src={stack.icon}
              alt={`${stack.name} icon`}
              width={32}
              height={32}
              className="filter grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
