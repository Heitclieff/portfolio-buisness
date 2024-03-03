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
        data.length > 0 && data.map((item : any , key: number) => { 
           return (
                <Accordion type="single" collapsible  defaultValue={data?.[0].title} className="w-full" key = {key}>
                    <AccordionItem value={item.title} className='border-zinc-800'>
                        <AccordionTrigger className=''>
                            <div className='flex gap-2 items-center'>
                                <CubeIcon/>
                                {item.title}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='text-zinc-200 pl-1'>
                                {item.description}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>   
            )
       })
  )
}

export default Features;