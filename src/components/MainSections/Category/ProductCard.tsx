"use client";
import Image from "next/image";
import { Product } from "../../../../type";
import { BouncyMotion } from "../../Globals/BouncyMotion";

export default function ProductCard({ product }: { product: Product }) {
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
              src={product.image}
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
              quality={65}
              priority={true}
              unoptimized={true}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PC9zdmc+"
            />
          </figure>
          <div className="w-full mt-2 h-40 absolute -bottom-20 z-10 flex items-center justify-center px-4 py-2 bg-white rounded-tl-3xl rounded-tr-[55px] rounded-b-lg shadow-sm">
            <h2 className="text-[#4f4f4f] text-2xl pt-9 leading-tight font-normal font-['Jost'] text-center">
              {product.name}
            </h2>
          </div>
        </div>
      </article>
    </BouncyMotion>
  );
}
