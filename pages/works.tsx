import React from 'react'
import RootLayout from '@/components/layout/roots/rootlayout'
import Contentfeature from '@/features/works/content'
import Worksfeature from '@/features/works/list'
import { useSearchParams } from 'next/navigation'

const Works : React.FC = () => {
     const params = useSearchParams();    
     const id = params.get('id')

  return (
     !id ? <Worksfeature/> : <Contentfeature/>
  )
}

Works.getLayout = function getLayout(page: any) {
     return (
          <RootLayout>
               {page}
          </RootLayout>
     )
}

export default Works
