import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

type containerProps = {
    data : any
}
const ProjectProjectDetailss : React.FC <containerProps> = ({data}) => {
    return (
        data?.projectProjectDetails && Object.keys(data.projectProjectDetails).map((item , key) => { 
           return (
                 <div key = {key} >
                      <div className='flex gap-2'>
                           <div className='w-[100px]'>
                                <Badge variant={'secondary'}>
                                     {item}
                                </Badge>
                           </div>
                           <p>{data?.projectProjectDetails[item]}</p>
                      </div>
                      {key + 1 !== Object.keys(data.projectProjectDetails).length &&
                           <Separator className='mt-2'/>
                      }
                 </div>
               
            )
       })
  )
}

export default ProjectProjectDetailss;