import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Metadata } from 'next'
import Head from 'next/head'

// Lazy load components
const About = dynamic(() => import("../MainSections/About"), {
  loading: () => <SectionSkeleton />
})
const BananaChipsSection = dynamic(() => import("../MainSections/BananaChipsSection"), {
  loading: () => <SectionSkeleton />
})
const BenefitSection = dynamic(() => import("../MainSections/BenefitSection"), {
  loading: () => <SectionSkeleton />
})
const BestSellers = dynamic(() => import("../MainSections/BestSellers"), {
  loading: () => <SectionSkeleton />
})
const CategoryContainer = dynamic(() => import("../MainSections/CategoryContainer"), {
  loading: () => <CategorySkeleton />
})
const DiscoverSection = dynamic(() => import("../MainSections/DiscoverSection"), {
  loading: () => <SectionSkeleton />
})
const Testimonials = dynamic(() => import("../MainSections/Testimonials"), {
  loading: () => <SectionSkeleton />
})

// Keep HeroSection and Slogan with regular imports as they're above the fold
import HeroSection from "../MainSections/HeroSections"
import Slogan from "../MainSections/Slogan"
import { CategorySkeleton } from '../Skeletons'
import { SectionSkeleton } from '../Skeletons'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GLOW WORM CHIPS Premium Snacks",
  "alternateName": ["Glow Worm Chips", "GlowWorm Chips"],
  "url": "https://glowwormchips.com",
  "logo": "https://glowwormchips.com/logo.svg",
  "description": "Premium manufacturer of authentic Kerala banana chips and traditional snacks.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Malappuram",
    "addressRegion": "Kerala",
    "postalCode": "676505",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919995700791",
    "contactType": "customer service",
    "availableLanguage": ["English", "Malayalam"]
  },
  "sameAs": [
    "https://www.instagram.com/gwglowworm",
    "https://www.facebook.com/share/18a2TKRW6e"
  ]
};

export default function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main role="main" aria-label="Home page content">
        {/* Above the fold content loaded immediately */}
        <HeroSection />
        <Slogan />
        
        {/* Lazy loaded content */}
        <Suspense fallback={<CategorySkeleton />}>
          <CategoryContainer />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BestSellers />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BananaChipsSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <DiscoverSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <BenefitSection />
        </Suspense>
      </main>
    </>
  )
}
