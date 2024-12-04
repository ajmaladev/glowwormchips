"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic';
import data from "../../../public/data.json";

// Lazy load ProductCard
const ProductCard = dynamic(() => import("./Category/ProductCard"), {
  loading: () => <ProductCardSkeleton />,
});

// SEO constants
const SECTION_TITLE = "TRY OUR BEST SELLERS";
const SECTION_DESCRIPTION = "Discover our most popular premium snacks and food products";

export default function BestSellers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const bestSellers = data.products.filter((product) =>
    product.tags?.includes("Best Seller")
  );

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col gap-5"
      aria-label="Best Selling Products"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={SECTION_TITLE} />
      <meta itemProp="description" content={SECTION_DESCRIPTION} />
      <meta itemProp="numberOfItems" content={bestSellers.length.toString()} />

      <h2 
        className="text-center text-[#f5ba45] text-2xl md:text-4xl relative font-extrabold font-['Jost'] tracking-widest"
        itemProp="headline"
      >
        {SECTION_TITLE}
      </h2>

      <div
        style={{
          backgroundImage: `url(/best-seller-bg.png)`,
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
          {isVisible && bestSellers.map((product, index) => (
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
    </section>
  );
}

function ProductCardSkeleton() {
  return (
    <div 
      className="animate-pulse w-[140.05px] md:w-[185px] h-[250px] bg-gray-200 rounded-lg"
      role="presentation"
      aria-label="Loading product card"
    />
  );
}
