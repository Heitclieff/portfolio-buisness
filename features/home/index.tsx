import React from 'react'
import { BioData , SkillData , Contact , Personal_Information } from './assets/config';
import CardTracker from './ui/cardtracker';
import CardSkill from './ui/cardskill';

import { RocketIcon , GitHubLogoIcon , EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
Alert,
AlertDescription,
AlertTitle,
} from "@/components/ui/alert"
import {
  TooltipProvider,
} from "@/components/ui/tooltip"


const Homefeature = () => {
     const router = useRouter();
  return (
     <article className='flex flex gap-2'>
          <section className='w-full p-4 text-white dark flex flex-col gap-5'>
               <div className='flex flex-col gap-2'>
                    <Alert>
                         <RocketIcon className="h-4 w-4" />
                         <AlertTitle className='text-lg'>Introduction</AlertTitle>
                         <AlertDescription>
                              {Personal_Information.introduction}
                              <div className='pt-3 flex gap-2'>
                                   <Button onClick={() => router.push('/works')}>Visit my Works</Button>
                                   <Link  href={Personal_Information.link} target='_blank'>
                                        <Button variant={'outline'}>
                                             <GitHubLogoIcon className="mr-2 h-4 w-4" /> 
                                             Github
                                        </Button>
                                   </Link>
                                   
                              </div>
                         </AlertDescription>
                    </Alert>
               </div>
               
               <div className='flex flex-col gap-5'>
                    <div className='w-fit mt-2'>
                         <h2 className='text-lg font-semibold'>Skill and Frameworks</h2>
                         <Separator className='h-1 w-full dark:bg-zinc-600'/>
                    </div>  

                    <div className='grid grid-cols-4  gap-2 min-[630px]:gap-0 min-[480px]:grid-cols-6 min-[630px]:grid-cols-8'>
                         <TooltipProvider>
                              {SkillData.map((skill , key) => (
                                   <CardSkill {...skill} key = {key}>
                                        {skill.icon}
                                   </CardSkill>
                              ))}
                         </TooltipProvider>
                    </div>
               </div>
               <div className='flex flex-col gap-2'>
                    <div className='w-fit'>
                         <h2 className='text-lg font-semibold'>Bio</h2>
                         <Separator className='h-1 w-full dark:bg-zinc-600'/>
                    </div>
               
                    <div className='flex flex-col'>
                         <CardTracker item={BioData}/>
                    </div>
               </div>

               <div className='flex flex-col gap-2'>
                    <Alert>
                         <EnvelopeOpenIcon className="h-4 w-4" />
                         <AlertTitle className='text-lg font-semibold'>On the Web</AlertTitle>
                         <AlertDescription>
                                   <div className='flex flex-col'>     
                                   {Contact?.map((item, key) => (
                                        <Link  href={item.link} target='_blank'>
                                                <Button className='w-fit' key = {key} variant={'ghost'}>                                
                                                  <div className="mr-2 h-4 w-4">
                                                       {item.icon}
                                                  </div>
                                                  {item.title}                                         
                                             </Button>
                                        </Link>         
                                   ))}
                              </div>
                         </AlertDescription>
                    </Alert>   
               </div>
          </section>
               
     </article>     
  )
}

export default Homefeature;
