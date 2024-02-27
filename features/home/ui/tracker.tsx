import React from 'react'

type containerProps = {
     title : any 
     index : number 
     maxLength : number
}

const Tracker : React.FC <containerProps> = ({index , maxLength , title}) => {
  return (
     <div id = "Pointer" className='relative flex '> 
          <div className=' absolute top-7 flex relative justify-center items-center h-full'>
               <div className='flex w-full h-full gap-5'>
                    <p className='min-w-[40px]'>{`${title}`}</p>
                    <div className='flex items-center flex-col relative pt-1'>
                         <div className='w-[15px] h-[15px] rounded-full absolute flex justify-center items-center bg-zinc-900 z-10 border border-zinc-200'>
                              <p className='w-[10px] h-[10px] rounded-full bg-zinc-200 '></p>
                         </div>
                         {index + 1 !== maxLength && (
                              <p className='w-[3px] h-full  bg-zinc-200 rounded-md absolute z-0'></p>
                         )}
                    </div>
               </div>
          </div>
  
        
     </div>

  )
}

export default Tracker;