import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'

export default function Home() {
  return (
    <main>
      <Hero />
      <RevealOnScroll delay={0.1}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <FeaturedProjects />
      </RevealOnScroll>
      <RevealOnScroll delay={0.3}>
        <Contact />
      </RevealOnScroll>
      <Footer />
    </main>
  )
}
