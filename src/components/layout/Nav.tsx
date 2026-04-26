'use client'
import { useState } from 'react'
import { MenuOverlay } from './MenuOverlay'

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-7 flex justify-between items-center mix-blend-difference">
        <a
          href="#"
          className="font-display text-[17px] text-sand uppercase tracking-[0.2em] font-medium"
        >
          Felipe<span className="text-accent">.</span>DEV
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          className="border border-border-strong text-sand text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 hover:bg-sand hover:text-bg transition-colors"
        >
          Menu
        </button>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
