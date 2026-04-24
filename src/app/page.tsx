import { Button } from '@/components/ui/Button'
import { Download, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="p-20 flex flex-col gap-6 items-start">
      <Button href="/cv.pdf" trailingIcon={Download}>
        Baixar CV
      </Button>

      <Button href="https://github.com/felipedev90" variant="ghost" trailingIcon={ArrowRight}>
        GitHub
      </Button>
    </main>
  )
}
