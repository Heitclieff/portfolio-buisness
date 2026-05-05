import React from 'react'
import { UserBox, CommandMenu } from '@/layouts/navigation'
import { personalInfo } from '@/features/home/constants'

/**
 * SidebarLayout for Dashboard-like pages
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className='flex min-[870px]:flex-row flex-col gap-2 bg-zinc-950/50 rounded-lg backdrop-blur-sm'>
      <section className='w-full min-[870px]:w-2/5 dark'>
        <UserBox />
        <CommandMenu />
      </section>
      <section className='w-full dark'>
        {children}
        <footer id="Footer" className='w-full min-[870px]:h-[30px] h-[60px] flex items-center justify-center'>
          <p className='text-zinc-500 text-sm'>
            © 2024 {personalInfo.name}. All Rights Reserved.
          </p>
        </footer>
      </section>
    </article>
  )
}
