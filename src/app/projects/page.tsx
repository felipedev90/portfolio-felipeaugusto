// import { STACKS_PAGE_DATA } from '@/data/stack'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
// import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tecnologias',
  description: 'Tecnologias e ferramentas que utilizo no dia a dia como desenvolvedor frontend.',
}

export default function StackPage() {
  return (
    <div className="relative bg-bg min-h-screen flex flex-col items-center justify-start overflow-hidden px-6 md:px-12 py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-linear-to-t from-bg-2 to-transparent"
      />
      {/* Botão Voltar */}

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center mt-15 md:mt-20">
        <div className="flex font-serif uppercase items-center gap-5 mb-16 text-[18px] tracking-[0.35em] text-sand-muted">
          <span className="w-8 h-px bg-accent" />
          Em construção
          <span className="w-8 h-px bg-accent" />{' '}
        </div>

        <div className="mt-20 items-start self-start">
          <Button href="/" variant="ghost" leadingIcon={ArrowLeft}>
            Voltar
          </Button>
        </div>
      </div>
    </div>
  )
}
