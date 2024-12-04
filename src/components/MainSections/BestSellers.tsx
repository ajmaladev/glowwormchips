import { MoveRight } from "lucide-react";
import data from "../../../public/data.json";
import ProductCard from "./Category/ProductCard";
import { FaPlay } from "react-icons/fa";


export default function BestSellers() {
  const bestSellers = data.products.filter((product) =>
    product.tags?.includes("Best Seller")
  );

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-center text-[#f5ba45] text-2xl md:text-4xl relative font-extrabold font-['Jost'] tracking-widest">
        TRY OUR BEST SELLERS 
        {/* <FaPlay className="w-4 h-4 md:hidden md:w-6 md:h-6 text-[#f5ba45] absolute top-1/2 left-[94%] -translate-x-1/2 -translate-y-1/2" /> */}
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
          className="flex overflow-x-auto overflow-y-hidden pl-4 md:pl-20 gap-4 md:gap-12 px-2 md:px-4 py-4  md:py-12 pb-28 md:pb-32 mb-10 md:mb-3 items-start md:items-center justify-start md:justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bestSellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              bgColor="bg-white h-28 md:h-32 pb-2 md:pb-4 -bottom-14 sm:-bottom-14 md:-bottom-16"
              className="w-[140.05px] md:w-[185px]"
              textSize="text-lg sm:text-xl md:text-[20.90px] font-['Jost']"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
