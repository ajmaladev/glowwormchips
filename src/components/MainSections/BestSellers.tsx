"use client";

import data from "../../../public/data.json";
import { Product } from "../../../type";
import ProductCard from "./Category/ProductCard";


// SEO constants
const SECTION_TITLE = "TRY OUR BEST SELLERS";
const SECTION_DESCRIPTION = "Discover our most popular premium snacks and food products";

// Add after SEO constants
const bestSellersStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": SECTION_TITLE,
  "description": SECTION_DESCRIPTION,
  "itemListElement": data.products
    .filter(product => product.tags?.includes("Best Seller"))
    .map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "brand": {
          "@type": "Brand",
          "name": "GLOW WORM CHIPS"
        }
      }
    }))
};

export default function BestSellers({ products }: { products: Product[] }) {
  return (
    <section 
      className="flex flex-col gap-5"
      aria-label="Best Selling Products"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={SECTION_TITLE} />
      <meta itemProp="description" content={SECTION_DESCRIPTION} />
      <meta itemProp="numberOfItems" content={products.length.toString()} />

      <h2 
        className="text-center text-[#f5ba45] text-2xl md:text-4xl relative font-extrabold font-['Jost'] tracking-widest"
        itemProp="headline"
      >
        {SECTION_TITLE}
      </h2>

      <div
        style={{
          backgroundImage: `url(/glowwormchips-best-seller-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div 
          className="flex overflow-x-auto overflow-y-hidden pl-4 md:pl-20 gap-4 md:gap-12 px-2 md:px-4 py-4 md:py-12 pb-28 md:pb-32 mb-10 md:mb-3 items-start md:items-center justify-start md:justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
          role="list"
          aria-label="Best selling products carousel"
        >
          {products?.map((product, index) => (
            <div 
              key={product.id}
              itemScope
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={`${index + 1}`} />
              <ProductCard 
                key={product.id} 
                product={product} 
                bgColor="bg-white h-28 md:h-32 pb-2 md:pb-4 -bottom-14 sm:-bottom-14 md:-bottom-16"
                className="w-[140.05px] md:w-[185px]"
                textSize="text-lg sm:text-xl md:text-[20.90px] font-['Jost']"
              />
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestSellersStructuredData) }}
      />
    </section>
  );
}
