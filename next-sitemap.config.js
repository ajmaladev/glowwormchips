/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://glowwormchips.com',
  generateRobotsTxt: false,
  exclude: ['/api/*', '/404', '/500'],
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: 'https://glowwormchips.com',
      hreflang: 'en',
    },
    {
      href: 'https://glowwormchips.com/ml',
      hreflang: 'ml',
    },
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs || [],
    }
  },
} 