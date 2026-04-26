import type { Metadata } from 'next'
import { Fraunces, DM_Sans, Cinzel } from 'next/font/google'
import './globals.css'
import { Skeleton } from '@/components/layout/Skeleton'
import { Nav } from '@/components/layout/Nav'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Felipe Silva — Frontend Developer',
  description:
    'Frontend developer construindo produtos digitais com React, Next.js e TypeScript. Portfolio de projetos em produção.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Skeleton />
        <Nav />
        {children}
      </body>
    </html>
  )
}
