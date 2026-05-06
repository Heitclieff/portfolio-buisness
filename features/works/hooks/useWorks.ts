import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/sanity'
import { worksQuery } from '@/lib/sanity.queries'

export function useWorks() {
  return useQuery({
    queryKey: ['works'],
    queryFn: async () => {
      return await client.fetch(worksQuery)
    },
  })
}
