import React, { Children } from 'react'
import Navigation from '../navigation'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'
import UserContainer from '@/features/home/components/userbox'
import CommandNavigate from '@/components/layout/roots/components/navigate'
import ItemContainer from '@/components/layout/roots/components/itembox'
import AutoLayout from './autolayout'

type LayoutProps = { 
     children : any
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const RootLayout : React.FC <LayoutProps> = ({children}) => {
  return (
    <main className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )}> 
      <AdjustmentLayers>
        {children}
      </AdjustmentLayers>
    </main>
  )
}

const AdjustmentLayers : React.FC <LayoutProps> = ({children}) => {
  return (
    <>
      <Navigation/>
      <AutoLayout> 
        <ItemContainer/>
        <article className='flex min-[870px]:flex-row flex-col flex gap-2'>
          <section className='w-full  min-[870px]:w-2/5 dark'>
              <UserContainer/>
              <CommandNavigate/>
          </section>
          <section className='w-full dark'>
              {children}
          </section>
        </article>
    </AutoLayout>
    </>
  )
}

export default RootLayout;
