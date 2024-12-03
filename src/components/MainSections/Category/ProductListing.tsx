import Image from "next/image";
import { Product } from "../../../../type";
import ProductCard from "./ProductCard";

export default function ProductListing({
  bg,
  products,
}: {
  bg: string;
  products: Product[];
}) {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-2 pt-12 pb-28 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-20 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} bgColor="bg-white h-[120px] sm:h-[150px] md:h-[200px] -bottom-14 md:-bottom-20"  />
        ))}
      </div>
    </div>
  );
}
