'use client'
import React, {useState} from 'react'
import {
Tooltip,
TooltipContent,
TooltipTrigger,
} from "@/components/ui/tooltip"

type containerProps = { 
     children? : any
     title? : string
     color? : string
}

const CardSkill : React.FC <containerProps> = ({children , title , color}) => {
     const [isHovered , setHovered] = useState <boolean>(false);
     
     const setMouseHover = (e : boolean) => {
          setHovered(e)
     }

  return (
     <Tooltip>
     <TooltipTrigger>
          <div 
          onMouseOver={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          className={`w-[65px] h-[65px] p-2 border relative delay-75 transition-all border-zinc-800  flex justify-center items-center rounded-md`}> 
               <div className={`w-full h-full  delay-75 absolute z-10 flex justify-center items-center  transition-all ${isHovered ? color : 'text-white'}`}>
                    {children}
               </div>
               {/* <div className={`h-auto flex justify-center items-center text-sm transition-opacity delay-75 `}>
               <p className='text-center text-black font-medium'>{title}</p> 
               </div>   */}
          </div>
     </TooltipTrigger>
     <TooltipContent>
       <p className='font-medium'>{title}</p>
     </TooltipContent>
   </Tooltip>
    

  )
}


export default CardSkill;