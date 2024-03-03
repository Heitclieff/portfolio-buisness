'use client'
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
type containerProps = { 
     title : string
     cover : string
     source : string
     filter : string []
     description : string
}
const WorkBox : React.FC <containerProps> =({title , cover , source , description}) => {
     const router = useRouter();

  return (
    <div className='flex min-[530px]:h-[170px] min-[530px]:flex-row gap-3 border rounded-lg p-2 border-zinc-800 flex flex-col items-center'>
          <div className='min-[530px]:w-[250px] w-full p-1'>
               <div id = "Image frame" className='w-full h-full bg-zinc-700 rounded overflow-hidden'>
                    <Image
                    loading = "lazy"
                    src = {cover ? cover : ""}
                    width={0}
                    height={0}
                    alt={"src"}
                    quality={40}
                    sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                    style={{ height: '100%', width: '100%' , objectFit : "cover" }}
                    />
               </div>
          </div>
          <div className='flex flex-col p-3 gap-4'>
               <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    <p className='text-zinc-400 text-sm'>{description}</p>
               </div>
               <div className='flex gap-2'>
                    <Button onClick = {() => router.push(`/works?id=${title}`)}>Visit</Button>
                    <Link href={source} target='_blank'>
                         <Button variant={'outline'} >
                              <ExternalLinkIcon className="mr-2 h-4 w-4"/>
                              Source
                         </Button>
                    </Link>
                    
               </div>
          </div>
        
    </div>
  )
}

export default WorkBox;
