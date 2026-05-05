import React from 'react'
import dynamic from "next/dynamic";
import Navigation from '@/components/layout/navigation'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'

import { useRouter } from 'next/router';
import UserContainer from '@/components/layout/navigation/components/userbox'
import CommandNavigate from '@/components/layout/navigation/command'
import HeroModel from '@/components/layout/main/components/HeroModel'
import Footer from './components/footer'
import PageContainer from './PageContainer'

const StarsCanvas = dynamic(async () => await import('@/components/canvas/star'), {
ssr: false,
})
  

import Head from 'next/head'

type LayoutProps = { 
     children : any
     title : string
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const MainLayout : React.FC <LayoutProps> = ({children , title}) => {
  return (
    <main className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}> 
      <LayoutWrapper title = {title}>
        {children}
      </LayoutWrapper>
    </main>
  )
}

const LayoutWrapper : React.FC <LayoutProps> = ({children , title}) => {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>{title === "Works" ?  Object.keys(router.query).length > 0 ? router.query.id : title : title}</title>
      </Head>
      <Navigation />
      <article className='relative z-0'>
        <PageContainer>
          <HeroModel />
          <article className='flex min-[870px]:flex-row flex-col flex gap-2 bg-zinc-950'>
            <section className='w-full  min-[870px]:w-2/5 dark'>
              <UserContainer />
              <CommandNavigate />
            </section>
            <section className='w-full dark'>
              {children}
              <Footer />
            </section>
          </article>
        </PageContainer>
        <StarsCanvas/>
      </article>

    </>
  )
}

export default MainLayout;
