export const defaultSEO = {
  defaultTitle: "GLOW WORM CHIPS | Premium Kerala Banana Chips & Traditional Snacks",
  titleTemplate: "%s | GLOW WORM CHIPS - Kerala's Finest",
  description: "Buy premium Kerala banana chips and traditional snacks online from GLOW WORM CHIPS. Fresh, handmade snacks made from finest ingredients. Free shipping across Kerala.",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'GLOW WORM CHIPS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM CHIPS - Premium Kerala Snacks',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@glowwormchips',
    site: '@glowwormchips',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#5db046',
    },
    {
      name: 'keywords',
      content: 'Kerala banana chips, traditional snacks, premium snacks, Kerala food, online snacks delivery, GLOW WORM CHIPS',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5db046',
    },
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  languageAlternates: [
    {
      hrefLang: 'en-IN',
      href: '/',
    },
    {
      hrefLang: 'en',
      href: '/',
    },
    {
      hrefLang: 'ml',
      href: '/ml',
    },
    {
      hrefLang: 'self',
      href: '/',
    },
    {
      hrefLang: 'x-default',
      href: '/',
    },
  ],
}; 