import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RocketIcon , GitHubLogoIcon , ChevronRightIcon , CubeIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
Alert,
AlertDescription,
AlertTitle,
} from "@/components/ui/alert"
import { WorkData } from '../assets/config';
import { useRouter } from 'next/router';
const Contentfeature : React.FC = () => {
     const [currentWork ,setCurrentWork] = useState<{}>({});
     const router = useRouter();

     const fetchingWorksfromQuery = () => {
          
          if(router.query.id) { 
              const results : any = WorkData?.filter((doc: any) => doc.title === router.query.id);
              if(results.length) { 
                    setCurrentWork(results[0]);
              }
          }
     }

     useEffect(() => {
          fetchingWorksfromQuery();
     }, [router.query])

  return (
     <article className='flex flex-col gap-6 text-white'>
        <section className='w-full p-4 text-white dark flex flex-col gap-5'>
               <div className='flex gap-1'>
                    <p className='font-medium text-sm hover:underline text-zinc-300 cursor-pointer' onClick={() => router.push('/works')}>Works</p>
                    <div className='flex  items-center justify-center'>
                         <ChevronRightIcon color='gray'/>
                    </div>
                    <p className='font-medium text-sm hover:underline  cursor-pointer'>{currentWork?.title}</p>
               </div>
               <div className='w-full'>
                    <div className='flex justify-between'>
                         <div className='flex gap-2 items-center'>
                              <CubeIcon/>
                              <div>
                                   <h2 className='text-xl font-bold'>{currentWork?.title}</h2>
                                   <Separator className='h-1 w-full dark:bg-zinc-600'/>
                              </div>
                         </div>
                  
                
                         <Button variant={'outline'}>
                              <GitHubLogoIcon className="mr-2 h-4 w-4" /> 
                              Source
                         </Button>
                    </div>
                    
                    
               </div> 
          
               <p className='text-zinc-300'>  
                    {currentWork?.description}
               </p>
         
               <Alert>
                    {/* <RocketIcon className="h-4 w-4" />
                    <AlertTitle className='text-lg'>Nobelist</AlertTitle> */}
                    <AlertDescription className='flex flex-col gap-2 pt-2 pb-2'> 
                         {currentWork?.project_detail && Object.keys(currentWork.project_detail).map((item , key) => {  
                              console.log(key)
                             return (
                                   <>
                                        <div className='flex gap-2' key = {key}>
                                             <div className='w-[100px]'>
                                                  <Badge variant={'secondary'}>
                                                       {item}
                                                  </Badge>
                                             </div>
                                             <p>{currentWork?.project_detail[item]}</p>
                                        </div>
                                        {key+1 !== Object.keys(currentWork.project_detail).length &&
                                             <Separator/>
                                        }
                                   </>
                                 
                              )
                         })}
                    </AlertDescription>        
               </Alert>
        </section>
        <section className='pl-4 pr-4 flex flex-col gap-3'>
          {currentWork?.thumnail && 
               <div id = "video-frame">
                    <div className='w-full h-full'>
                         <iframe width="100%" height="350" src={currentWork.thumnail} title= {currentWork.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
                    </div>
               </div>
          }
        
          <div id = "Image frame" className='w-full h-full bg-zinc-700 rounded overflow-hidden'>
               {currentWork?.cover && 
                    <Image
                    loading = "lazy"
                    src =  {currentWork?.cover}
                    width={0}
                    height={0}
                    alt={"src"}
                    quality={40}
                    sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                    style={{ height: '100%', width: '100%' , objectFit : "cover" }}
                    />
               }
          </div>
        </section>
     </article>
  )
}

export default Contentfeature;
