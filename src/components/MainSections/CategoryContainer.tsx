"use client"
import Image from "next/image";
import { Category, CategoriesData } from "../../../type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BouncyMotion } from "../Globals/BouncyMotion";

export default function CategoryContainer() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories data
    const fetchCategories = async () => {
      try {
        const response = await fetch('/data.json');
        const data: CategoriesData = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-[1440px] h-[395px] relative">
      <div className="left-[374px] top-[35px] absolute text-center text-[#0c3614] text-4xl font-medium font-['Jost'] tracking-widest">
        WE GOT BEST VARIETY OF DELICIOUS
      </div>
      
      {categories.map((category: Category, index: number) => {
        const leftPositions = [97, 312, 527, 756, 979, 1199];
        
        return (
          <BouncyMotion
            key={category.id}
            className="h-[188px] absolute flex-col justify-start items-center inline-flex"
            style={{ left: `${leftPositions[index]}px`, top: '138px' }}
          >
            <Link href={`/${category.id}`}>
              <Image
                width={155}
                height={141}
                className="w-[155px] h-[141px]"
                src={category.image}
                alt={category.name}
              />
              <h2 className="self-stretch text-center text-[#0c3614] text-[27.36px] font-normal font-['Jost']">
                {category.name}
              </h2>
            </Link>
          </BouncyMotion>
        );
      })}
    </div>
  );
}