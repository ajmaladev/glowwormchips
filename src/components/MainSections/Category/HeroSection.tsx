interface HeroSectionProps {
  title: string;
  sub_description: string;
  color: string;
}

export default function HeroSection({ title, sub_description, color }: HeroSectionProps) {
  // Add structured data for the hero section
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": title,
    "description": sub_description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://glowwormchips.com"
    },
    "about": {
      "@type": "Product",
      "name": title,
      "description": sub_description,
      "brand": {
        "@type": "Brand",
        "name": "GLOW WORM CHIPS"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroStructuredData) }}
      />
      <section 
        className="flex-col justify-center w-full gap-6 items-center py-4 md:py-6 lg:py-8 mt-[104px] inline-flex px-4 md:px-6 lg:px-12"
        aria-label="Category hero section"
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <h1 
          className={`self-stretch text-center text-2xl md:text-3xl lg:text-6xl font-black font-['Jost'] tracking-wide`}
          style={{color: color}}
          itemProp="headline"
        >
          {title}
        </h1>
        <p 
          className={`self-stretch text-center text-lg md:text-xl lg:text-2xl font-normal font-['Jost'] tracking-wide max-w-3xl mx-auto`}
          style={{color: color}}
          aria-describedby="category-description"
          itemProp="description"
        >
          {sub_description}
        </p>
        <meta itemProp="image" content="/glowwormchips.webp" />
        <meta itemProp="publisher" content="GLOW WORM CHIPS Premium Snacks" />
      </section>
    </>
  );
}
