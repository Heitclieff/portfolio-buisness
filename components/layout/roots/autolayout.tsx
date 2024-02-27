import React from 'react'

type LayoutProps = { 
     children? : any
}

const AutoLayout : React.FC <LayoutProps> = ({children}) => {
  return (
    <article className='max-w-[1000px] min-[870px]:pt-4 pt-[60px] h-auto m-auto p-4 flex flex-col gap-2'>
        {children}
    </article>
  )
}

export default AutoLayout;