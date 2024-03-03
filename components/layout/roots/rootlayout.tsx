import React, { Children } from 'react'
import dynamic from "next/dynamic";
import Navigation from '../navigation'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'

import UserContainer from '@/components/layout/navigation/components/userbox'
import CommandNavigate from '@/components/layout/navigation/command'
import ItemContainer from '@/components/layout/roots/components/itembox'
import Footer from './components/footer'
import AutoLayout from './autolayout'

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

const RootLayout : React.FC <LayoutProps> = ({children , title}) => {
  return (
    <main className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}> 
      <AdjustmentLayers title = {title}>
        {children}
      </AdjustmentLayers>
    </main>
  )
}

const AdjustmentLayers : React.FC <LayoutProps> = ({children , title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      <article className='relative z-0'>
        <AutoLayout>
          <ItemContainer />
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
        </AutoLayout>
        <StarsCanvas/>
      </article>

    </>
  )
}

export default RootLayout;
