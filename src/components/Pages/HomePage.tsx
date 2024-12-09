
// Keep HeroSection and Slogan with regular imports as they're above the fold
import HeroSection from "../MainSections/HeroSections";
import Slogan from "../MainSections/Slogan";
import { Category, Product } from "../../../type";
import CategoryContainer from "../MainSections/CategoryContainer";
import BestSellers from "../MainSections/BestSellers";
import About from "../MainSections/About";
import BananaChipsSection from "../MainSections/BananaChipsSection";
import DiscoverSection from "../MainSections/DiscoverSection";
import Testimonials from "../MainSections/Testimonials";
import BenefitSection from "../MainSections/BenefitSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GLOW WORM CHIPS Premium Snacks",
  alternateName: ["Glow Worm Chips", "GlowWorm Chips"],
  url: "https://glowwormchips.com",
  logo: "https://glowwormchips.com/glowwormchips.svg",
  description:
    "Premium manufacturer of authentic Kerala banana chips and traditional snacks.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    postalCode: "676505",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919895193123",
    contactType: "customer service",
    availableLanguage: ["English", "Malayalam"],
  },
  sameAs: [
    "https://www.instagram.com/gwglowworm",
    "https://www.facebook.com/share/18a2TKRW6e",
  ],
};

export default function HomePage({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const bestSellers = products.filter((product: Product) =>
    product.tags?.includes("Best Seller")
  );
  const bananaChips = products.filter(
    (product: Product) => product.categoryId === 23456
  );
  const categoryIds = [10234, 15789, 23456, 34567, 45678, 56789];
  
  const discoverProducts = categoryIds.map(categoryId => {
    const categoryProducts = products.filter(
      (product: Product) => product.categoryId === categoryId
    );
    // Get first product from each category, or random product if you prefer
    return categoryProducts[0];
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main role="main" aria-label="Home page content">
        <HeroSection />
        
        <Slogan />

        <CategoryContainer categories={categories} />

        <BestSellers products={bestSellers} />

        <About />

        <BananaChipsSection products={bananaChips} />

        <DiscoverSection products={discoverProducts} />

        <Testimonials />

        <BenefitSection />
      </main>
    </>
  );
}
