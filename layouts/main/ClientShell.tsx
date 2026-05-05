'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const StarsCanvas = dynamic(async () => await import('@/components/canvas/star'), {
  ssr: false,
})

const Models = dynamic(async () => await import('@/components/canvas/models'), {
  ssr: false,
})

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative z-10">
        {/* Persistent Hero Model Section */}
        <section className='w-full h-[300px] overflow-hidden flex items-center justify-center text-white'>
          <Models />
        </section>

        {children}
      </div>

      <StarsCanvas />
    </>
  )
}
