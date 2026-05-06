'use client'

import dynamic from 'next/dynamic'

const StudioPageClient = dynamic(
  () => import('./Studio').then((mod) => mod.Studio),
  { ssr: false }
)

export default function StudioPage() {
  return <StudioPageClient />
}
