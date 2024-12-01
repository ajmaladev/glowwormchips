"use client";
import Image from "next/image";
import { Product } from "../../../../type";
import { BouncyMotion } from "../../Globals/BouncyMotion";
import { useEffect, useState } from "react";

export default function ProductCard({ product, bgColor="bg-white h-40" }: { product: Product, bgColor?: string }) {
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
      <article className="w-full max-w-sm mx-auto pt-6" aria-label={`Product: ${product.name}`}>
        <div className="flex flex-col relative">
          <figure className="w-full aspect-[4/5] z-20">
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
            />
          </figure>
          <div className={`w-full mt-2 absolute -bottom-20 z-10 flex items-center justify-center px-4 py-2 ${bgColor} rounded-tl-3xl rounded-tr-[55px] rounded-b-lg shadow-sm`}>
            <h2 className="text-[#333333] text-[20.90px] pt-9 leading-tight font-normal font-['Jost'] text-center">
              {product.name}
            </h2>
          </div>
        </div>
      </article>
    </BouncyMotion>
  );
}
