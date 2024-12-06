import HomePage from "@/components/Pages/HomePage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://glowwormchips.com'),
  title: {
    default: 'GLOW WORM CHIPS - Premium Kerala Banana Chips Palakkad',
    template: '%s | GLOW WORM CHIPS'
  },
  description: 'Premium Kerala banana chips, traditional murukku, dry fruits, and authentic South Indian snacks. Fresh, handmade delicacies from GLOW WORM CHIPS.',
  keywords: [
    'GLOW WORM Chips',
    'GLOW WORM Kerala snacks',
    'Glowworm chips Palakkad',
    'Glowworm chips Kerala',
    'Glowworm chips Malappuram',
    'Glowworm biscuits',
    'Glowworm snacks',
    'Glowworm murukku',
    'Glowworm dry fruits',
    'Glowworm banana chips',
    'Glowworm chips manufacturer',
    'Glowworm chips online',
    'Glowworm chips store',
    'premium banana chips Kerala',
    'authentic Kerala murukku',
    'traditional Kerala dry fruits',
    'best banana chips Malappuram',
    'buy Kerala snacks online',
    'GLOW WORM premium snacks',
    'handcrafted Kerala delicacies'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://glowwormchips.com',
    title: 'GLOW WORM CHIPS - Premium Kerala Banana Chips Palakkad',
    description: 'Authentic Kerala snacks, premium banana chips, and traditional delicacies from GLOW WORM CHIPS.',
    siteName: 'GLOW WORM CHIPS',
    images: [
      {
        url: 'https://glowwormchips.com/logo.svg',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM CHIPS Premium Snacks'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOW WORM CHIPS - Premium Kerala Snacks',
    description: 'Authentic Kerala snacks and premium banana chips from GLOW WORM CHIPS.',
    images: ['https://glowwormchips.com/logo.svg']
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
  return (
    <HomePage />
  );
}
