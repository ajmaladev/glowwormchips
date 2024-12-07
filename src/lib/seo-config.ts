export const defaultSEO = {
  defaultTitle: "GLOW WORM CHIPS | Premium Kerala Banana Chips & Traditional Snacks",
  titleTemplate: "%s | GLOW WORM CHIPS - Kerala's Finest",
  description: "Buy premium Kerala banana chips and traditional snacks online from GLOW WORM CHIPS. Fresh, handmade snacks made from finest ingredients. Free shipping across Kerala.",
  canonical: "https://glowwormchips.com",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://glowwormchips.com',
    siteName: 'GLOW WORM CHIPS',
    images: [
      {
        url: 'https://glowwormchips.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM CHIPS',
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
    },
  ],
}; 