import data from "../../../public/data.json";
import ProductCard from "./Category/ProductCard";

export default function DiscoverSection() {
  const bananaChips = data.products.filter(
    (product) => product.categoryId === 23456
  );

  return (
    <section className="flex flex-col gap-5 mb-16">
      <div
        style={{
          backgroundImage: `url(/discover-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-center text-2xl md:text-[43.92px] m-auto pt-16 text-white font-black font-['Jost'] tracking-[3.07px]">
          Discover your favorite in this crispy collection
        </h2>
        <div 
          className="flex overflow-x-auto overflow-y-hidden gap-12 px-4 py-4 md:py-12 pb-28 md:pb-44 items-center justify-center scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {bananaChips.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              bgColor="bg-neutral-100 h-32"
              className="flex-shrink-0 w-[185px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
