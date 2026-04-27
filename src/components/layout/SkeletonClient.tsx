'use client'

import dynamic from 'next/dynamic'

export const SkeletonClient = dynamic(() => import('./Skeleton').then((mod) => mod.Skeleton), {
  ssr: false,
})
