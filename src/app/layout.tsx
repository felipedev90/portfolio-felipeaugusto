import type { Metadata } from 'next'
import { Fraunces, DM_Sans, Cinzel } from 'next/font/google'
import './globals.css'
import { cookies } from 'next/headers'
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
  metadataBase: new URL('https://devfelipeaugusto.com.br'),
  title: {
    default: 'Felipe Augusto — Frontend Developer',
    template: '%s | Felipe Augusto',
  },
  description:
    'Frontend Developer construindo produtos digitais com React, Next.js e TypeScript. Portfolio de projetos em produção com foco em performance, acessibilidade e qualidade de código.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Felipe Augusto',
    'Desenvolvedor Frontend',
    'Jundiaí',
  ],
  authors: [{ name: 'Felipe Augusto', url: 'https://devfelipeaugusto.com.br' }],
  creator: 'Felipe Augusto',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://devfelipeaugusto.com.br',
    siteName: 'Felipe Augusto',
    title: 'Felipe Augusto — Frontend Developer',
    description:
      'Frontend Developer construindo produtos digitais com React, Next.js e TypeScript.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Felipe Augusto — Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Augusto — Frontend Developer',
    description:
      'Frontend Developer construindo produtos digitais com React, Next.js e TypeScript.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://devfelipeaugusto.com.br',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const skeletonShown = cookieStore.get('skeleton_shown')?.value === '1'

  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Felipe Augusto',
              url: 'https://devfelipeaugusto.com.br',
              image: 'https://devfelipeaugusto.com.br/og-image.png',
              sameAs: [
                'https://github.com/felipedev90',
                'https://www.linkedin.com/in/felipesilva90/',
              ],
              jobTitle: 'Frontend Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jundiaí',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Development'],
            }),
          }}
        />
        <Skeleton initialShown={skeletonShown} />
        <Nav />
        {children}
      </body>
    </html>
  )
}
