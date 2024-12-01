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
      >
        <h2 className="text-center text-[#2e9642] w-3/4 lg:w-2/3 m-auto text-4xl mt-24 font-extrabold font-['Jost'] tracking-[3.24px]">
          OUR KERALA BANANA CHIPS ARE SURE TO DELIGHT
        </h2>
        <div className="grid grid-cols-2 w-10/12 m-auto pb-28 sm:grid-cols-4 mt-10 md:grid-cols-6 gap-x-12 gap-y-20 p-4">
          {bananaChips.map((product) => (
            <ProductCard key={product.id} product={product} bgColor="bg-white h-32" />
          ))}
        </div>
      </div>
    </section>
  );
}
