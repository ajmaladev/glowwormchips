"use client";
import Image from "next/image";
import { Category, CategoriesData } from "../../../type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BouncyMotion } from "../Globals/BouncyMotion";

export default function CategoryContainer({ id }: { id?: number }) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories data
    const fetchCategories = async () => {
      try {
        const response = await fetch("/data.json");
        const data: CategoriesData = await response.json();
        const filteredCategories = id
          ? data.categories.filter((category) => category.id !== id)
          : data.categories;
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section
      className="w-full mx-auto px-4 py-16 relative"
      aria-label="Food Categories Section"
      role="region"
    >
      <h2 className="text-center text-[#0c3614] text-2xl md:text-4xl font-medium font-['Jost'] tracking-widest mb-8">
        {id ? "Explore More Food Categories" : "Our Food Category Selection"}
      </h2>

      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${
          id ? "lg:grid-cols-5" : "lg:grid-cols-6"
        } gap-8 md:gap-10 lg:gap-12 justify-items-center py-8 px-4`}
        role="list"
        aria-label="Food category list"
      >
        {categories.map((category: Category) => (
          <BouncyMotion
            key={category.id}
            className="flex flex-col items-center w-full p-4 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <Link
              href={`/${category.id}`}
              aria-label={`Browse ${category.name} category items`}
              className="w-full text-center"
            >
              <Image
                width={155}
                height={141}
                className="w-full max-w-[155px] h-auto object-contain mx-auto"
                src={category.image}
                alt={`${category.name} category illustration`}
                priority={true}
              />
              <h3 className="text-center text-[#0c3614] text-xl md:text-[27.36px] font-normal font-['Jost'] mt-2">
                {category.name}
              </h3>
            </Link>
          </BouncyMotion>
        ))}
      </div>
    </section>
  );
}
