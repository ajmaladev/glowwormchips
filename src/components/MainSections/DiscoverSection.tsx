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
        <h2 className="text-center  m-auto pt-16 text-white text-[43.92px] font-black font-['Jost'] tracking-[3.07px]">
          Discover your favorite in this crispy collection
        </h2>
        <div className="grid grid-cols-2 w-10/12 m-auto pb-28 sm:grid-cols-4 pt-32 md:grid-cols-6 gap-x-12 gap-y-20 p-4">
          {bananaChips.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              bgColor="bg-neutral-100 h-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
