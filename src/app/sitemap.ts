import { MetadataRoute } from 'next'
import data from '../../public/data.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glowwormchips.com'
  
  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Category routes
  const categoryRoutes = data.categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...categoryRoutes]
}

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false