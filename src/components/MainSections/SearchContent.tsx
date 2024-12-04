"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import Image from "next/image";
import { CategoriesData } from "../../../type";
import Link from "next/link";
import { BouncyMotion } from "../Globals/BouncyMotion";
import { Search, Tag } from "lucide-react";

export default function SearchContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<CategoriesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const searchResults = useMemo(() => {
    if (!data) return { categories: [], products: [] };
    if (!searchTerm.trim())
      return { categories: data.categories, products: data.products };

    const term = searchTerm.toLowerCase();

    const categories = data.categories.filter((category) => {
      return (
        category.name.toLowerCase().includes(term) ||
        category.description.toLowerCase().includes(term) ||
        category.short_description.toLowerCase().includes(term) ||
        category.title.toLowerCase().includes(term)
      );
    });

    const products = data.products.filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        product.alt.toLowerCase().includes(term) ||
        (product.tags &&
          product.tags.some((tag) => tag.toLowerCase().includes(term)))
      );
    });

    return { categories, products };
  }, [data, searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
    inputRef.current?.focus();
  };

  const CategoryLink = ({
    category,
    children,
  }: {
    category: any;
    children: React.ReactNode;
  }) => (
    <DrawerClose asChild>
      <Link href={`/${category.id}`} className="block">
        {children}
      </Link>
    </DrawerClose>
  );

  return (
    <DrawerContent className="max-h-[90vh]">
      <DrawerHeader className="border-b">
        <DrawerTitle className="text-2xl font-['Jost'] text-[#0c3614]">
          Browse Our Collection
        </DrawerTitle>
      </DrawerHeader>

      <div className="p-4 sticky top-0 bg-white z-10 shadow-sm">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories..."
            className="w-full p-3 pl-12 pr-10 text-lg border rounded-lg outline-none focus:ring-2 focus:ring-[#0c3614] focus:border-transparent font-['Jost']"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={24}
          />

          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="overflow-y-auto p-4">
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="space-y-8">
            {/* Categories Section */}
            {searchResults.categories.length > 0 && (
              <div>
                <h3 className="text-xl font-['Jost'] text-[#0c3614] mb-4 flex items-center gap-2">
                  Categories
                  {searchTerm && (
                    <span className="text-sm text-gray-500">
                      ({searchResults.categories.length} results)
                    </span>
                  )}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.categories.map((category, index) => (
                    <BouncyMotion 
                      key={category.id}
                      initialY={-10}
                      transition={{
                        type: "spring",
                        duration: 0.3,
                        bounce: 0.1,
                        delay: index * 0.03,
                        scale: {
                          type: "spring",
                          damping: 20,
                          stiffness: 300,
                          restDelta: 0.001
                        }
                      }}
                    >
                      <CategoryLink category={category}>
                        <div
                          className="flex items-center p-4 bg-white rounded-lg border hover:shadow-lg transition-shadow"
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <Image
                            src={category.image}
                            alt={category.alt}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                          <div className="ml-4">
                            <h4 className="font-['Jost'] text-lg text-[#0c3614]">
                              {category.name}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {category.short_description}
                            </p>
                          </div>
                        </div>
                      </CategoryLink>
                    </BouncyMotion>
                  ))}
                </div>
              </div>
            )}

            {/* Products Section */}
            {searchResults.products.length > 0 && (
              <div>
                <h3 className="text-xl font-['Jost'] text-[#0c3614] mb-4 flex items-center gap-2">
                  Products
                  {searchTerm && (
                    <span className="text-sm text-gray-500">
                      ({searchResults.products.length} results)
                    </span>
                  )}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {searchResults.products.map((product, index) => (
                    <BouncyMotion 
                      key={product.id}
                      initialY={-10}
                      transition={{
                        type: "spring",
                        duration: 0.3,
                        bounce: 0.1,
                        delay: index * 0.03,
                        scale: {
                          type: "spring",
                          damping: 20,
                          stiffness: 300,
                          restDelta: 0.001
                        }
                      }}
                      className="h-full"
                    >
                      <div className="relative p-4 bg-white rounded-lg border hover:shadow-lg transition-shadow h-full flex flex-col">
                        <div className="relative h-32 mb-2 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h4 className="font-['Jost'] text-center text-[#0c3614] flex-grow flex items-center justify-center">
                          {product.name}
                        </h4>
                        {product.tags && product.tags.length > 0 && (
                          <div className="absolute top-2 right-2">
                            <Tag size={16} className="text-[#0c3614]" />
                          </div>
                        )}
                      </div>
                    </BouncyMotion>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchTerm &&
              searchResults.categories.length === 0 &&
              searchResults.products.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No results found for "{searchTerm}"
                </div>
              )}
          </div>
        )}
      </div>
    </DrawerContent>
  );
}
