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
        {/* Scrollable Container */}
        <div 
          className="flex overflow-x-auto overflow-y-hidden gap-12 px-4 py-12 pb-44 items-center justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bestSellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              bgColor="bg-white h-32"
              className="flex-shrink-0 w-[185px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
