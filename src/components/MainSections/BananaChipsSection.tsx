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
          className="flex overflow-x-auto overflow-y-hidden gap-12 px-4 py-[15px] md:py-12 pb-28 md:pb-44 items-center justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bananaChips.map((product) => (
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
