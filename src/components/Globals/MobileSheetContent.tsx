"use client";
import Link from "next/link";
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "../ui/sheet";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CategoriesData } from "../../../type";
import { socialLinks } from "../MainSections/Footer";
import { BouncyMotion } from "./BouncyMotion";

export default function MobileSheetContent() {
  const [categories, setCategories] = useState<CategoriesData["categories"]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/data.json");
        const data: CategoriesData = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <SheetContent side="right" className="sm:w-[400px] bg-[#5db046]/80" role="dialog" aria-label="Mobile navigation menu">
      <div className="relative" role="navigation">
        <SheetHeader className="flex justify-center items-center h-[150px] relative">
          <SheetTitle>
            <SheetClose asChild>
              <Link href="/" className="flex items-center mt-10" aria-label="Go to homepage">
                <Image
                  src="/glowwormchips.webp"
                  alt="Glow Worm Logo"
                  width={1000}
                  height={1000}
                  className="cursor-pointer w-[158px] h-[98px]"
                  priority
                  quality={100}
                />
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav role="navigation" aria-label="Mobile menu links" className="flex flex-col space-y-4 mt-16 ml-8">
          <div className="inline-flex">
            <SheetClose asChild>
              <Link href="/" className="w-[204px] text-white text-xl font-normal font-['Jost']">
                Home
              </Link>
            </SheetClose>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-white text-xl font-normal font-['Jost'] text-left"
              aria-expanded={isDropdownOpen}
              aria-controls="categories-dropdown"
            >
              Product Categories
              <span className="ml-2">{isDropdownOpen ? '▼' : '▶'}</span>
            </button>
            {isDropdownOpen && (
              <div
                id="categories-dropdown"
                className="absolute top-full left-0 w-full 
                  bg-[#5db046] backdrop-blur-sm
                  rounded-md shadow-lg 
                  mt-2 py-2 
                  space-y-2 
                  transition-all duration-300 
                  z-50"
                role="menu"
              >
                {categories.map((category) => (
                  <SheetClose key={category.id} asChild>
                    <Link
                      href={`/${category.slug}`}
                      className="block px-4 py-2 
                        text-white text-lg font-normal font-['Jost'] 
                        hover:bg-white/20 
                        active:scale-95
                        transition-all duration-200 ease-in-out"
                    >
                      {category.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            )}
          </div>

          <div className="inline-flex">
            <SheetClose asChild>
              <Link href="#about" className="w-[204px] text-white text-xl font-normal font-['Jost']">
                About
              </Link>
            </SheetClose>
          </div>
          <div className="inline-flex">
            <SheetClose asChild>
              <Link href="/blog" className="w-[204px] text-white text-xl font-normal font-['Jost']">
                Blog
              </Link>
            </SheetClose>
          </div>
        </nav>

        <footer className="h-[65px] left-[25px] top-[500px] absolute flex-col justify-center items-center gap-[7px] inline-flex" role="contentinfo">
          <address className="text-center text-white text-[11.05px] font-medium font-['Jost'] leading-[14.50px] tracking-wide">
            Mail<br />
            <a 
              href="mailto:glowwormchips@gmail.com"
              className="hover:underline"
              aria-label="Send email to Glow Worm Chips"
            >
              glowwormchips@gmail.com
            </a>
          </address>
          <address className="text-center text-white text-[11.05px] font-medium font-['Jost'] leading-[14.50px] tracking-wide">
            Contact number<br />
            <a 
              href="tel:+919895193123"
              className="hover:underline"
              aria-label="Call our first contact number"
            >
              +91 9995 700 791
            </a>
            {" | "}
            <a 
              href="tel:+919895193123"
              className="hover:underline"
              aria-label="Call our second contact number"
            >
              +91 9895 193 123
            </a>
          </address>
          <nav
          className="relative z-10 flex justify-center items-center gap-[20px]"
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <BouncyMotion key={social.id} initialY={-20}>
              <SheetClose asChild>
                <a
                  href={social.href}
                  className="p-2 hover:opacity-80 transition-opacity"
                  aria-label={social.ariaLabel}
                  rel="noopener noreferrer"
                  itemProp="sameAs"
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={54}
                    height={54}
                    className="object-contain w-[29px] md:w-[50.99px] h-[29px] md:h-[50.99px]"
                  />
                </a>
              </SheetClose>
            </BouncyMotion>
          ))}
        </nav>
        </footer>
        
      </div>
    </SheetContent>
  );
}
