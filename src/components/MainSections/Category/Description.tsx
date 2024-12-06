export default function Description({
  description,
  disc_bg,
}: {
  description: string;
  disc_bg: string;
}) {
  // Add structured data for the description section
  const descriptionStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Category Description",
    "description": description,
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
        className="flex justify-center items-center"
        style={{ backgroundImage: `url(${disc_bg})` }}
        role="region"
        aria-label="Category Description"
      >
        <article 
          className="md:w-4/5 p-8 md:p-16 text-white text-base md:text-lg lg:text-3xl font-normal font-['Jost'] leading-[21px] md:leading-[26px] lg:leading-[55px] tracking-wide"
        >
          <p>{description}</p>
        </article>
      </section>
    </>
  );
}
