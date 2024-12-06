import { MainCarousel } from "../Globals/MainCarousel";

// Add structured data for the hero section
const heroStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPageElement",
  name: "Hero Section",
  description: "Featured products and promotions from GLOW WORM CHIPS Premium Snacks",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://glowwormchips.com",
  },
};

export default function HeroSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroStructuredData) }}
      />
      <section
        aria-label="Hero Carousel Section"
        className="w-full h-full mt-[58px] md:mt-[104px] bg-gradient-to-b from-[#76b066] to-[#ffffff]"
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <MainCarousel />
      </section>
    </>
  );
}
