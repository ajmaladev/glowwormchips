export default function DescriptionSection() {
  const descriptionStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Product Description",
    "description": "GLOW WORM CHIPS OFFERS AN EXTENSIVE SELECTION OF CHIPS FLAVORS Including Classic Chips, Spicy Masala Chips, Tangy Tomato Chips and Many...",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://glowwormchips.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(descriptionStructuredData) }}
      />
      <section 
        className="h-[943px] relative bg-white" 
        style={{ backgroundImage: "url('/description-section-bg.svg')" }}
        role="region"
        aria-label="Product Description"
      >
        <h2 
          className="w-[1033px] left-[198px] top-[587px] absolute text-[#f85741] text-4xl font-black font-['Montserrat'] leading-[60.47px] tracking-[4.02px]"
          itemProp="headline"
        >
          GLOW WORM <span className="sr-only">CHIPS</span> OFFERS AN EXTENSIVE SELECTION OF CHIPS FLAVORS{" "}
        </h2>
        <p 
          className="w-[1033px] h-[87px] left-[197px] top-[703px] absolute text-[#ff725f] text-[21.92px] font-semibold font-['Montserrat'] leading-[43.85px] tracking-widest"
          itemProp="description"
        >
          Including Classic Chips. Spicy Masala Chips, Tangy Tomato Chips and Many
          . . .
        </p>
      </section>
    </>
  );
}
