import { MetadataRoute } from 'next'
import { workData } from '@/features/works/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heitclieff.github.io'

  // Core pages
  const routes = ['', '/journey', '/works'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Individual project pages (using slugs)
  const projectRoutes = workData.map((work) => ({
    url: `${baseUrl}/works?project=${work.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes]
}
