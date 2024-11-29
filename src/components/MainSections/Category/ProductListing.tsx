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
      <div className="grid grid-cols-2 pt-12 pb-28 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-20 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
