"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchContent from "./SearchContent";
import { useState } from "react";
import { CategoriesData } from "../../../type";
import { useEffect } from "react";
import MobileSheetContent from "../Globals/MobileSheetContent";

export default function NavBar() {
  const scrollToSection = (elementId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(elementId);
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const [data, setData] = useState<CategoriesData>({
    categories: [],
    products: [],
  });


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData: CategoriesData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <nav
      className="w-full fixed top-0 z-50 flex bg-white/10 backdrop-blur-[5.26px] items-center justify-between px-6 lg:px-20"
      suppressHydrationWarning
      style={{
        height: "var(--nav-height)",
        background: "var(--nav-bg)",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Search Icon - Shown first on mobile, last on desktop */}
      <div className="md:order-3">
        <Drawer>
          <DrawerTrigger
            aria-label="Open search"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiSearch className="w-6 h-6 text-gray-500" aria-hidden="true" />
          </DrawerTrigger>
          <SearchContent />
        </Drawer>
      </div>

      {/* Logo - Center on mobile, left on desktop */}
      <Link
        href="/"
        className="flex items-center md:order-1"
        aria-label="Go to homepage"
      >
        <Image
          src="/logo.svg"
          alt="Glow Worm Logo"
          width={96}
          height={64}
          className="cursor-pointer"
          priority
        />
      </Link>

        <div
          className=" hidden md:!flex bg-white w-full justify-around mx-9 items-center gap-8 md:order-2"
          role="menubar"
        >
          <Link
            className="text-black text-sm font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200"
            href="/"
            role="menuitem"
            suppressHydrationWarning={true}
          >
            <h2 suppressHydrationWarning={true}>Home</h2>
          </Link>
          <Link
            className="text-black text-sm font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200"
            href="#footer"
            role="menuitem"
            onClick={scrollToSection("#footer")}
            suppressHydrationWarning={true}
          >
            <h2 suppressHydrationWarning={true}>Contact</h2>
          </Link>
          <Link
            className="text-black text-sm font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200"
            href="#about"
            role="menuitem"
            onClick={scrollToSection("#about")}
            suppressHydrationWarning={true}
          >
            <h2 suppressHydrationWarning={true}>About</h2>
          </Link>
        </div>

      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="md:hidden md:order-3 bg-white/80">
        <Sheet>
          <SheetTrigger
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open mobile menu"
          >
            <div className="flex flex-col gap-3.5" aria-hidden="true">
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
            </div>
          </SheetTrigger>
          <MobileSheetContent />
        </Sheet>
      </div>
    </nav>
  );
}
