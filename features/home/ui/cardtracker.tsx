import React from 'react'
import Tracker from './tracker';
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"

type containerProps = { 
     item : any
}

const CardTracker : React.FC  <containerProps> = ({item}) => {
     
     const sortItems = item?.sort(function(a : any ,b : any) {
          return b.years - a.years
     })

  return (
     <div className='flex flex-col'>
     {sortItems?.map((docs : any , index:number) => (
          <article className='flex gap-4' key = {index}> 
               <Tracker 
               index={index} 
               maxLength={3}
               title = {docs.years}
               />     
               <Card className='mt-2 mb-2'>
                    <CardHeader>
                         <CardTitle>{docs.title}</CardTitle>
                         <CardDescription>{docs.description}</CardDescription>
                    </CardHeader>
               </Card>
          </article>
     ))}

</div>
  )
}

export default CardTracker;
