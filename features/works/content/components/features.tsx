import React from 'react'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
   
import { CubeIcon } from '@radix-ui/react-icons';
type containerProps = {
    data : any
}
const Features : React.FC <containerProps> = ({data}) => {
    return (
        data.length > 0 && data.map((item : string , key: number) => { 
           return (
                 <>
                   <Accordion type="single" collapsible defaultValue={data[0]} className="w-full" key = {key}>
                       <AccordionItem value={item} className='border-zinc-800'>
                           <AccordionTrigger className=''>
                                <div className='flex gap-2 items-center'>
                                    <CubeIcon/>
                                    {item}
                                </div>
                            </AccordionTrigger>
                           <AccordionContent className='text-zinc-200'>
                                 Yes. It adheres to the WAI-ARIA design pattern.
                           </AccordionContent>
                       </AccordionItem>
                   </Accordion>
                 </>
               
            )
       })
  )
}

export default Features;