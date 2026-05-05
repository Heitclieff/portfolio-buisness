import React from 'react'
import MainLayout from '@/components/layout/main/MainLayout'
import WorkDetail from '@/features/works/WorkDetail'
import WorkList from '@/features/works/WorkList'
import { useSearchParams } from 'next/navigation'

const Works  = () => {
     const params = useSearchParams();    
     const id = params.get('id')

  return (
     !id ? <WorkList/> : <WorkDetail/>
  )
}

Works.getLayout = function getLayout(page: any) {
     return (
          <MainLayout title = {"Works"}>
               {page}
          </MainLayout>
     )
}

export default Works
