import Image from "next/image";
import { Category } from "../../../type";
import Link from "next/link";
import { BouncyMotion } from "../Globals/BouncyMotion";

export default function CategoryContainer({ id, categories }: { id?: number, categories: Category[] }) {
  const categoryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": id ? "More Food Categories" : "Food Categories",
    "itemListElement": categories?.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": category.name,
        "image": category.image,
        "url": `https://glowwormchips.com/${category.slug}`
      }
    }))
  };

  return (
    <section
      className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-[100px] py-5 md:py-16 relative"
      aria-label="Food Categories Section"
      role="region"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryStructuredData) }}
      />
      <h2 className="text-center text-base text-[#0c3614] sm:text-2xl md:text-4xl font-medium font-['Jost'] tracking-wide md:tracking-widest mb-8">
        {id ? "Explore More Food Categories" : "WE GOT BEST VARIETY OF DELICIOUS"}
      </h2>

      <div
        className={`grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 ${
          id ? "lg:grid-cols-5" : "lg:grid-cols-6"
        } gap-3 gap-y-10 md:gap-10 lg:gap-12 justify-items-center py-8 px-4`}
        role="list"
        aria-label="Food category list"
      >
        {categories?.map((category: Category) => (
          <BouncyMotion
            key={category.id}
            className="flex flex-col items-center w-full sm:p-4"
            role="listitem"
          >
            <Link
              href={`/${category.slug}`}
              aria-label={`Browse ${category.name} category items`}
              className="w-full text-center"
              role="link"
            >
              <Image
                width={155}
                height={141}
                className="w-full max-w-[155px] h-auto object-contain mx-auto"
                src={category.image}
                alt={`${category.name} category illustration`}
                priority={true}
              />
              <h3 className="text-center text-[#0c3614] text-lg md:text-[27.36px] font-normal font-['Jost'] mt-2">
                {category.name}
              </h3>
            </Link>
          </BouncyMotion>
        ))}
      </div>
    </section>
  );
}
