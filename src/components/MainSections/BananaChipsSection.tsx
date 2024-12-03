import data from "../../../public/data.json";
import ProductCard from "./Category/ProductCard";

export default function BananaChipsSection() {
  const bananaChips = data.products.filter(
    (product) => product.categoryId === 23456
  );

  return (
    <section className="flex flex-col gap-5">
      <div
        style={{
            backgroundImage: `url(/delight-bg.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}
        className="relative mt-[100px] md:mt-0"
      >
        <h2 className="text-center text-[#2e9642] w-3/4 lg:w-2/3 m-auto text-lg md:text-4xl mt-[-50px] md:mt-24 font-extrabold font-['Jost'] tracking-[3.24px]">
          OUR KERALA BANANA CHIPS ARE SURE TO DELIGHT
        </h2>
        <div 
          className="flex overflow-x-auto overflow-y-hidden pl-4 md:pl-20 gap-4 md:gap-12 px-2 md:px-4 py-4  md:py-12 pb-28 md:pb-32 mb-10 md:mb-3 items-start md:items-center justify-start md:justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bananaChips.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              bgColor="bg-white h-28 md:h-32 pb-2 md:pb-4 -bottom-14 sm:-bottom-14 md:-bottom-16"
              className="w-[140.05px] md:w-[185px]"
              textSize="text-lg sm:text-xl md:text-[20.90px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
