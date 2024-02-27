import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from '@radix-ui/react-icons'
const Postsfeature : React.FC = () => {
  return (
     <article className='flex flex gap-2 text-white'>
          <section className='w-full p-4 text-white dark flex flex-col gap-5'>
               <div className='w-fit mt-2'>
                    <h2 className='text-lg font-semibold'>Posts</h2>
                    <Separator className='h-1 w-full dark:bg-zinc-600'/>
               </div>  

               <div className='flex gap-3'>
               <Alert>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                         Nothing to Post right now.
                    </AlertDescription>
               </Alert>
               </div>
          </section>
  </article>
  )
}

export default Postsfeature