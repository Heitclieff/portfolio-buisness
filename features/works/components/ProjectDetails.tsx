import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

type containerProps = {
    data : any
}
const ProjectDetails : React.FC <containerProps> = ({data}) => {
    return (
        data?.projectDetail && Object.keys(data.projectDetail).map((item , key) => { 
           return (
                 <div key = {key} >
                      <div className='flex gap-2'>
                           <div>
                                <Badge variant={'secondary'}>
                                     {item}
                                </Badge>
                           </div>
                           <p>{data?.projectDetail[item]}</p>
                      </div>
                      {key + 1 !== Object.keys(data.projectDetail).length &&
                           <Separator className='mt-2'/>
                      }
                 </div>
           )
        })
  )
}

export default ProjectDetails;