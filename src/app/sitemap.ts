import { MetadataRoute } from 'next'
import data from '../../public/data.json'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://glowwormchips.com'
  
  // Get all category IDs
  const categoryRoutes = data.categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}#testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}#best-sellers`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    ...categoryRoutes
  ];

  return routes;
}