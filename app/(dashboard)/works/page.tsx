'use client'

import React, { Suspense } from 'react'
import WorkDetail from '@/features/works/WorkDetail'
import WorkList from '@/features/works/WorkList'
import { useSearchParams } from 'next/navigation'

function WorksContent() {
  const searchParams = useSearchParams();
  const id = searchParams ? searchParams.get('id') : null

  return !id ? <WorkList /> : <WorkDetail />
}

export default function WorksPage() {
  return (
    <Suspense fallback={<div className="text-white p-4">Loading works...</div>}>
      <WorksContent />
    </Suspense>
  )
}
