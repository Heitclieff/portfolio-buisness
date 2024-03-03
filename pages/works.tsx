import React from 'react'
import RootLayout from '@/components/layout/roots/rootlayout'
import Contentfeature from '@/features/works/pages/content'
import Worksfeature from '@/features/works/pages/list'
import { useSearchParams } from 'next/navigation'

const Works : React.FC = () => {
     const params = useSearchParams();    
     const id = params.get('id')

  return (
     !id ? <Worksfeature/> : <Contentfeature/>
  )
}

Works.getLayout = function getLayout(page: any) {
     const params = useSearchParams();  
     const id = params.get('id')

     return (
          <RootLayout title = {`${id ? id : "Works"}`}>
               {page}
          </RootLayout>
     )
}

export default Works
