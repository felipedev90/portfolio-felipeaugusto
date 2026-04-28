import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  )
}
