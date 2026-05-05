import React from 'react'
import { WorkDetail, WorkList, Work } from '@/features/works'
import { workData } from '@/features/works/constants'

import { notFound } from 'next/navigation'

interface WorksPageContentProps {
  project?: string | null
}

export default function WorksPageContent({ project }: WorksPageContentProps) {
  const currentWork = project ? workData.find(w => w.slug === project) : null;

  // If a project slug was provided but no project was found, trigger 404
  if (project && !currentWork) {
    notFound();
  }

  return !project ? <WorkList /> : <WorkDetail work={currentWork as Work} />
}
