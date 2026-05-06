import React, { Suspense } from 'react'
import { Metadata } from 'next'
import WorksPageContent from './WorksPageContent'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { client } from '@/lib/sanity'
import { worksQuery } from '@/lib/sanity.queries'

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

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['works'],
    queryFn: async () => {
      return await client.fetch(worksQuery)
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<div className="text-white p-4">Loading works...</div>}>
        <WorksPageContent project={project} />
      </Suspense>
    </HydrationBoundary>
  )
}
