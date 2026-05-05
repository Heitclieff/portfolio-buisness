import React from 'react'
import dynamic from "next/dynamic";
import { Navigation, UserBox, CommandMenu } from '@/layouts/navigation'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Models from '@/components/canvas/models'
import { personalInfo } from '@/features/home/constants'

const StarsCanvas = dynamic(async () => await import('@/components/canvas/star'), {
  ssr: false,
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type LayoutProps = {
  children: any
  title?: string
}

const PageContainer: React.FC<{ children: any }> = ({ children }) => (
  <article className='max-w-[1000px] min-[870px]:pt-4 pt-[60px] h-auto m-auto p-4 flex flex-col gap-2'>
    {children}
  </article>
)

const HeroModel: React.FC = () => (
  <section className='w-full h-[300px] overflow-hidden flex items-center justify-center text-white'>
    <Models />
  </section>
)

const Footer: React.FC = () => (
  <section id="Footer" className='w-full min-[870px]:h-[30px] h-[60px] flex items-center justify-center'>
    <p className='text-zinc-500 text-sm'>
      © 2024 {personalInfo.name}. All Rights Reserved.
    </p>
  </section>
)

/**
 * MainLayout
 * ใช้ทุกหน้า (Nav, Stars, Font Config)
 */
export const MainLayout: React.FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter();
  const pageTitle = title === "Works" ? (Object.keys(router.query).length > 0 ? router.query.id as string : title) : (title || "Portfolio");

  return (
    <main className={cn(
      "min-h-screen bg-zinc-950 font-sans antialiased relative z-0",
      fontSans.variable
    )}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Navigation />

      <PageContainer>
        <HeroModel />
        {children}
      </PageContainer>

      <StarsCanvas />
    </main>
  )
}

/**
 * SidebarLayout
 * ด้านซ้ายและเนื้อหาด้านขวา
 */
export const SidebarLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <article className='flex min-[870px]:flex-row flex-col gap-2 bg-zinc-950/50 rounded-lg backdrop-blur-sm'>
      <section className='w-full min-[870px]:w-2/5 dark'>
        <UserBox />
        <CommandMenu />
      </section>
      <section className='w-full dark'>
        {children}
        <Footer />
      </section>
    </article>
  )
}

export default MainLayout;
