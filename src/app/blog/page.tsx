import BlogPage from "@/components/Pages/BlogPage";
import { Metadata } from 'next';
import { organizationInfo } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: 'Blog | GLOW WORM CHIPS - Kerala Snacks Stories',
    template: '%s | GLOW WORM CHIPS Blog'
  },
  description: 'Explore articles about traditional Kerala snacks, banana chips making process, and the story behind GLOW WORM CHIPS premium snacks. Learn about our quality ingredients and authentic recipes.',
  keywords: [
    'Kerala snacks blog',
    'banana chips making',
    'traditional snacks stories',
    'GLOW WORM CHIPS blog',
    'Kerala food culture',
    'snack making process',
    'authentic Kerala recipes',
    'Kerala food traditions',
    'snack manufacturing process',
    'premium snacks blog',
    'Kerala culinary heritage',
    'traditional snack making',
    'food quality standards',
    'Kerala snack varieties',
    'Indian snack culture'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/blog',
    title: 'GLOW WORM CHIPS Blog - Kerala Snacks Stories',
    description: 'Discover the world of traditional Kerala snacks and our journey at GLOW WORM CHIPS. Explore our authentic recipes and quality standards.',
    siteName: organizationInfo.name,
    images: [
      {
        url: '/blog/blog-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM CHIPS Blog - Traditional Kerala Snacks Stories',
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLOW WORM CHIPS Blog - Kerala Snacks Stories',
    description: 'Discover the world of traditional Kerala snacks and our journey at GLOW WORM CHIPS. Explore our authentic recipes and quality standards.',
    images: ['/blog/blog-banner.jpg'],
    creator: '@glowwormchips',
    site: '@glowwormchips'
  },
  alternates: {
    canonical: 'https://www.glowwormchips.com/blog',
    languages: {
      'en-IN': 'https://www.glowwormchips.com/blog',
      'en': 'https://www.glowwormchips.com/blog',
      'ml': 'https://www.glowwormchips.com/ml/blog',
      'x-default': 'https://www.glowwormchips.com/blog',
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
  authors: [{ 
    name: organizationInfo.name,
    url: organizationInfo.socialLinks[0]
  }],
  category: 'Blog',
  creator: organizationInfo.name,
  publisher: organizationInfo.name,
  other: {
    'page-type': 'Blog',
    'content-type': 'articles',
    'blog-category': 'Kerala Snacks',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default async function Page() {
  return <BlogPage />;
}
