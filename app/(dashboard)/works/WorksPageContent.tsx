'use client'

import React from 'react'
import { WorkDetail, WorkList, Work } from '@/features/works'
import { useWorks } from '@/features/works/hooks/useWorks'
import { notFound } from 'next/navigation'

interface WorksPageContentProps {
  project?: string | null
}

export default function WorksPageContent({ project }: WorksPageContentProps) {
  const { data: workData = [] } = useWorks();
  const currentWork = project ? workData.find((w: any) => w.slug === project) : null;

  if (project && !currentWork) {
    notFound();
  }

  return !project ? <WorkList /> : <WorkDetail work={currentWork as Work} />
}
