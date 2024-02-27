import React from 'react'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'

interface ProviderProps {  
     children  : any
}

export const fontSans = FontSans({
     subsets: ["latin"],
     variable: "--font-sans",
})
   
const Provider : React.FC <ProviderProps> = ({children}) => {
  return (
     <main className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          {children}
     </main>
  )
}

export default Provider;

