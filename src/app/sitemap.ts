import { MetadataRoute } from 'next'
import data from '../../public/data.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://glowwormchips.com'
  
  // Generate category URLs
  const categoryUrls = data.categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}