'use client'
import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

type containerProps = { 
     title : string
     cover : string
     filter : string []
     description : string
}
const WorkBox : React.FC <containerProps> =({title , cover , description}) => {
     const router = useRouter();

  return (
    <div className='flex h-[170px] gap-3 border rounded-lg p-2 border-zinc-800 flex items-center'>
          <div className='w-[250px] p-1'>
               <div id = "Image frame" className='w-[250px] h-full bg-zinc-700 rounded overflow-hidden'>
                    <Image
                    loading = "lazy"
                    src = {cover ? cover : "https://staticg.sportskeeda.com/editor/2022/12/dd983-16699179979799-1920.jpg?w=840"}
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
                    <Button variant={'outline'}>
                         <ExternalLinkIcon className="mr-2 h-4 w-4"/>
                         Source
                    </Button>
               </div>
          </div>
        
    </div>
  )
}

export default WorkBox;
