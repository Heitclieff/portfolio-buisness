import React, { Suspense } from 'react'
import { Metadata } from 'next'
import WorksPageContent from './WorksPageContent'

export const metadata: Metadata = {
  title: "Selected Works",
  description: "A gallery of digital products crafted with focus and simplicity.",
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function WorksPage({ searchParams }: Props) {
  const params = await searchParams;
  const project = typeof params.project === 'string' ? params.project : null;

  return (
    <Suspense fallback={<div className="text-white p-4">Loading works...</div>}>
      <WorksPageContent project={project} />
    </Suspense>
  )
}
