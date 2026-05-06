import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/sanity'
import { journeyQuery } from '@/lib/sanity.queries'

export function useJourney() {
  return useQuery({
    queryKey: ['journey'],
    queryFn: async () => {
      return await client.fetch(journeyQuery)
    },
  })
}
