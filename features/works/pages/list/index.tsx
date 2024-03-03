'use client'
import React,{useState , useEffect} from 'react'
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import FilterBox from './components/filterbox'
import WorkBox from './components/workbox'
import { WorkData } from '../../assets/config'

type pageProps = {

}
const Worksfeature : React.FC <pageProps> = () => {
   const [selectedData , setSelectedData] = useState <any[]>(WorkData);
   const [keywords , setKeywords] = useState<string>("");
   const [frameworks, setFrameWorks] = React.useState("")
   
   const handleSearching = () => {
      if(keywords) {
         const results = WorkData.filter((doc) => doc.title.toLowerCase().includes(keywords.toLowerCase()))
         setSelectedData(results);
      }else { 
         setSelectedData(WorkData);
      }
   }

   const handleFrameworkSelected = () => {
      if(frameworks){ 
          const results = WorkData.filter((doc) => doc.filter.includes(frameworks));
          setSelectedData(results)
      }else { 
         setSelectedData(WorkData);
      }
   }

   useEffect(() => {
      handleSearching();
   } , [keywords])

   useEffect(() => {
      handleFrameworkSelected()
   } , [frameworks])
   
  return (
     <article className='flex flex gap-2 text-white'>
        <section className='w-full p-4 text-white dark flex flex-col gap-5'>
               <div className='w-fit mt-2'>
                    <h2 className='text-lg font-semibold'>Works</h2>
                    <Separator className='h-1 w-full dark:bg-zinc-600'/>
               </div>  
               <div className='flex gap-3 '>
                    <Input type="email" placeholder="Search" onChange={(e) => setKeywords(e.target.value)}/>
                    <FilterBox value = {frameworks} setValue = {setFrameWorks}/>
               </div>
               <div className='grid gap-3'>
                  {selectedData?.map((item ,key) => (
                     <WorkBox key = {key} {...item}/>
                  ))}
               </div>
        </section>
     </article>
  )
}

export default Worksfeature;
