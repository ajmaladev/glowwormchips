import HomePage from "@/components/Pages/HomePage";
import { Metadata } from 'next';
import data from '../../public/data.json';

export const metadata: Metadata = {
  metadataBase: new URL('https://glowwormchips.com'),
  title: {
    default: 'GLOW WORM CHIPS - Premium Kerala Banana Chips Palakkad',
    template: '%s | GLOW WORM CHIPS'
  },
  description: 'Buy premium Kerala banana chips online from GLOW WORM CHIPS Palakkad. Fresh, handmade banana chips, traditional murukku, and authentic South Indian snacks delivered to your doorstep.',
  keywords: [
    'buy banana chips online',
    'Kerala banana chips online',
    'banana chips Palakkad',
    'best banana chips Kerala',
    'Kerala snacks online',
    'traditional murukku online',
    'South Indian snacks online',
    'Palakkad banana chips',
    'Kerala style banana chips',
    'homemade banana chips',
    'fresh banana chips online',
    'traditional Kerala snacks',
    'authentic Kerala chips',
    'GLOW WORM CHIPS online store',
    'buy Kerala snacks Palakkad',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'GLOW WORM CHIPS - Premium Kerala Banana Chips Palakkad',
    description: 'Buy authentic Kerala banana chips online from GLOW WORM CHIPS Palakkad. Fresh, handmade snacks delivered across India.',
    siteName: 'GLOW WORM CHIPS',
    images: [
      {
        url: '/glowwormchips.webp',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM CHIPS Premium Snacks'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOW WORM CHIPS - Premium Kerala Snacks',
    description: 'Buy authentic Kerala banana chips online from GLOW WORM CHIPS Palakkad. Fresh, handmade snacks delivered across India.',
    images: ['/glowwormchips.webp']
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'en': '/',
      'ml': '/ml',
      'x-default': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  const { products, categories } = data;
  return <HomePage products={products} categories={categories} />;
}
