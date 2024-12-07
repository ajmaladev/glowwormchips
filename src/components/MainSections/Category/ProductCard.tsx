"use client";
import Image from "next/image";
import { Product } from "../../../../type";
import { BouncyMotion } from "../../Globals/BouncyMotion";
import { useEffect, useState } from "react";
import Link from "next/link";

const generateProductStructuredData = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": product.image,
  "brand": {
    "@type": "Brand",
    "name": "GLOW WORM CHIPS"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR"
  }
});

export default function ProductCard({ product, bgColor, className, textSize }: { product: Product, bgColor?: string, className?: string, textSize?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    setIsLoaded(true);
  },[])

  return (
    <BouncyMotion 
      initialY={10}
      style={{}}
      transition={{
        type: "spring",
        duration: 0.5,
        bounce: 0.2,
        stiffness: 100,
      }}
    >
      <article 
        className={`pt-6 ${className?className:""}`} 
        aria-label={`Product: ${product.name}`}
        itemScope
        itemType="https://schema.org/Product"
        itemProp="itemListElement"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductStructuredData(product)) }}
        />
        <Link href={`/${product.categorySlug}`} className="flex flex-col relative">
          <figure className="w-[85%] aspect-[4/5] z-20">
            <Image
              src={isLoaded ? product.image : product.image.split(".svg")[0] + "-fallback.png"}
              alt={`${product.name} product image`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-lg"
              style={{
                opacity: 1,
                transform: 'scale(1)',
                transition: 'all 0.5s ease-in-out'
              }}
              loading="eager"
              quality={100}
              priority={true}
              unoptimized={true}
              itemProp="image"
              aria-label={`${product.name} - GLOW WORM CHIPS Premium Snacks`}
            />
          </figure>
          <div className={`w-full mt-2 absolute -bottom-20 z-10 flex items-end justify-center px-4 py-2  rounded-tl-3xl rounded-tr-[55px] md:rounded-tr-[75px] rounded-b-lg shadow-sm pb-6 md:pb-10 ${bgColor}`}>
            <h2 className={`text-[#333333] pt-9 z-30 leading-tight font-normal font-['Jost'] text-center ${textSize||"text-lg sm:text-xl md:text-[20.90px] lg:text-3xl"}`} itemProp="name">
              {product.name}
            </h2>
          </div>
        </Link>
      </article>
    </BouncyMotion>
  );
}
