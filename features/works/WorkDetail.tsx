'use client'

import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RocketIcon, GitHubLogoIcon, ChevronRightIcon, CubeIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ProjectDetails, ProjectFeatures } from './components';
import { workData } from './constants';
import { useRouter, useSearchParams } from 'next/navigation';

const WorkDetail: React.FC = () => {
  const [currentWork, setCurrentWork] = useState<any>({});
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams ? searchParams.get('id') : null;

  const fetchingWorksfromQuery = () => {
    if (id) {
      const results: any = workData?.filter((doc: any) => doc.title === id);
      if (results.length) {
        setCurrentWork(results[0]);
      }
    }
  }

  useEffect(() => {
    fetchingWorksfromQuery();
  }, [id])

  return (
    <article className='flex flex-col gap-6 text-white'>
      <section className='w-full p-4 text-white dark flex flex-col gap-5'>
        <div className='flex gap-1'>
          <p className='font-medium text-sm hover:underline text-zinc-300 cursor-pointer' onClick={() => router.push('/works')}>Works</p>
          <div className='flex  items-center justify-center'>
            <ChevronRightIcon color='gray' />
          </div>
          <p className='font-medium text-sm hover:underline  cursor-pointer'>{currentWork?.title}</p>
        </div>
        <div className='w-full'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <CubeIcon />
              <div>
                <h2 className='text-xl font-bold'>{currentWork?.title}</h2>
                <Separator className='h-1 w-full dark:bg-zinc-600' />
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

        <Tabs defaultValue="tools" >
          <TabsList>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          <TabsContent value="tools">
            <Alert>
              <AlertDescription className='flex flex-col gap-3 pt-2 pb-2'>
                <ProjectDetails data={currentWork} />
              </AlertDescription>
            </Alert>
          </TabsContent>
          <TabsContent value="features" className=''>
            <div className="p-3  border rounded-lg border-zinc-800">
              <ProjectFeatures data={currentWork?.features} />
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <section className='pl-4 pr-4 flex flex-col gap-3'>
        {currentWork?.thumbnail &&
          <div id="video-frame">
            <div className='w-full  min-[870px]:h-[300px] h-[250px]'>
              <iframe width="100%" height="100%" src={currentWork.thumbnail} title={currentWork.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        }

        <div id="Image frame" className='w-full h-full bg-zinc-700 rounded overflow-hidden'>
          {currentWork?.cover &&
            <Image
              loading="lazy"
              src={currentWork?.cover}
              width={0}
              height={0}
              alt={"src"}
              quality={40}
              sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
              style={{ height: '100%', width: '100%', objectFit: "cover" }}
            />
          }
        </div>
      </section>
    </article>
  )
}

export default WorkDetail;
