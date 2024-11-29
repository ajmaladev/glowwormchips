"use client"
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
        const response = await fetch('/data.json');
        const data: CategoriesData = await response.json();
        const filteredCategories = id ? data.categories.filter(category => category.id !== id) : data.categories;
        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section 
      className="w-full mx-auto px-4 py-16 relative"
      aria-label="Food Categories"
    >
      <h1 className="text-center text-[#0c3614] text-2xl md:text-4xl font-medium font-['Jost'] tracking-widest mb-8">
        {id ? "EXPLORE MORE DELICIOUS OPTIONS" : "WE GOT BEST VARIETY OF DELICIOUS"}
      </h1>
      
      <div className={`grid grid-cols-3 ${id ? "lg:grid-cols-5" : "lg:grid-cols-6"} justify-items-center py-8`}>
        {categories.map((category: Category) => (
          <BouncyMotion
            key={category.id}
            className="flex flex-col items-center"
          >
            <Link 
              href={`/${category.id}`}
              aria-label={`View ${category.name} category`}
            >
              <Image
                width={155}
                height={141}
                className="w-full max-w-[155px] h-auto object-contain"
                src={category.image}
                alt={`${category.name} category thumbnail`}
                priority={true}
              />
              <h2 className="text-center text-[#0c3614] text-xl md:text-[27.36px] font-normal font-['Jost'] mt-2">
                {category.name}
              </h2>
            </Link>
          </BouncyMotion>
        ))}
      </div>
    </section>
  );
}