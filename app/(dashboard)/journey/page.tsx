import { JourneyView } from "@/features/journey";
import { Metadata } from "next";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { client } from '@/lib/sanity'
import { journeyQuery } from '@/lib/sanity.queries'

export const metadata: Metadata = {
  title: "Journey",
  description: "A quiet record of work, study, and the journey of building software with care.",
};

export default async function JourneyPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['journey'],
    queryFn: async () => {
      return await client.fetch(journeyQuery)
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <JourneyView />
    </HydrationBoundary>
  );
}
