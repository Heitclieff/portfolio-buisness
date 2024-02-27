import React from 'react'
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

type containerProps = {
    data : any
}
const Details : React.FC <containerProps> = ({data}) => {
    return (
        data?.project_detail && Object.keys(data.project_detail).map((item , key) => { 
           return (
                 <>
                      <div className='flex gap-2' key = {key}>
                           <div className='w-[100px]'>
                                <Badge variant={'secondary'}>
                                     {item}
                                </Badge>
                           </div>
                           <p>{data?.project_detail[item]}</p>
                      </div>
                      {key+1 !== Object.keys(data.project_detail).length &&
                           <Separator/>
                      }
                 </>
               
            )
       })
  )
}

export default Details;