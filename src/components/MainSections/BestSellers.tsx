import data from "../../../public/data.json";
import ProductCard from "./Category/ProductCard";

export default function BestSellers() {
  const bestSellers = data.products.filter((product) =>
    product.tags?.includes("Best Seller")
  );

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-center text-[#f5ba45] text-4xl font-extrabold font-['Jost'] tracking-[2.52px]">
        TRY OUR BEST SELLERS
      </h2>
      <div
        style={{
          backgroundImage: `url(/best-seller-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-2 w-10/12 m-auto pt-12 pb-28 sm:grid-cols-4 md:grid-cols-6 gap-x-12 gap-y-20 p-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} bgColor="bg-white h-32" />
          ))}
        </div>
      </div>
    </section>
  );
}
