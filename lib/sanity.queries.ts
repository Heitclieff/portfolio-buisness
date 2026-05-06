import { groq } from 'next-sanity'

export const worksQuery = groq`*[_type == "work"] {
  ...,
  "slug": slug.current,
  "cover": cover.asset->url,
  "gallery": gallery[].asset->url
}`

export const journeyQuery = groq`*[_type == "journey"] | order(order desc) {
  ...
}`
