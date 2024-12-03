import data from "../../../public/data.json";
import ProductCard from "./Category/ProductCard";

export default function DiscoverSection() {
  const bananaChips = data.products.filter(
    (product) => product.categoryId === 23456
  );

  return (
    <section className="flex flex-col gap-5 md:mb-16">
      <div
        style={{
          backgroundImage: `url(/discover-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-center text-2xl md:text-[43.92px] m-auto md:pt-16 text-white font-black font-['Jost'] tracking-[3.07px]">
          Discover your favorite in this crispy collection
        </h2>
        <div 
          className="flex overflow-x-auto overflow-y-hidden pl-4 md:pl-20 gap-4 md:gap-12 px-2 md:px-4 py-4  md:py-12 pb-28 md:pb-32 mb-10 md:mb-3 items-start md:items-center justify-start md:justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bananaChips.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              bgColor="bg-[#f5f5f5] h-28 md:h-32 pb-2 md:pb-4 -bottom-14 sm:-bottom-14 md:-bottom-16"
              className="w-[140.05px] md:w-[185px]"
              textSize="text-lg sm:text-xl md:text-[20.90px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
