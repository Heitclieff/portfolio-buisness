import React from 'react'
import MainLayout, { SidebarLayout } from '@/layouts/main/MainLayout'
import WorkDetail from '@/features/works/WorkDetail'
import WorkList from '@/features/works/WorkList'
import { useSearchParams } from 'next/navigation'

const Works = () => {
  const params = useSearchParams();
  const id = params.get('id')

  return !id ? <WorkList /> : <WorkDetail />
}

Works.getLayout = function getLayout(page: any) {
  return (
    <MainLayout title="Works">
      <SidebarLayout>
        {page}
      </SidebarLayout>
    </MainLayout>
  )
}

export default Works
