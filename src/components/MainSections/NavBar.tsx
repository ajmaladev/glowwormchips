"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchContent from "./SearchContent";

export default function NavBar() {
  const scrollToSection = (elementId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(elementId);
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.scrollY - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <nav className="w-full h-[104px] bg-white fixed top-0 z-50 flex items-center justify-between px-6 lg:px-20" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <Link href="/" className="flex items-center" aria-label="Go to homepage">
        <Image
          src="/logo.svg"
          alt="Glow Worm Logo"
          width={96}
          height={64}
          className="cursor-pointer"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="md:flex w-full invisible md:visible justify-around mx-9 items-center gap-8" role="menubar">
        <Link 
          className="text-black text-xs font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200" 
          href="/"
          role="menuitem"
        >
          <h2>Home</h2>
        </Link>
        <Link 
          className="text-black text-xs font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200" 
          href="#footer"
          role="menuitem"
          onClick={scrollToSection('#footer')}
        >
          <h2>Contact</h2>
        </Link>
        <Link 
          className="text-black text-xs font-normal font-['Jost'] hover:text-[#0c3614] transition-colors duration-200" 
          href="#about"
          role="menuitem"
          onClick={scrollToSection('#about')}
        >
          <h2>About</h2>
        </Link>
      </div>

      {/* Search and Mobile Menu container */}
      <div className="flex items-center gap-4">
        <Drawer>
          <DrawerTrigger aria-label="Open search" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FiSearch className="w-6 h-6 text-gray-500" aria-hidden="true" />
          </DrawerTrigger>
          <SearchContent/>
        </Drawer>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Open mobile menu">
            <div className="flex flex-col gap-3.5" aria-hidden="true">
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center" aria-label="Go to homepage">
                  <Image
                    src="/logo.svg"
                    alt="Glow Worm Logo"
                    width={96}
                    height={64}
                    className="cursor-pointer"
                    priority
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8" role="navigation" aria-label="Mobile navigation">
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="/"
              >
                <h2>Home</h2>
              </Link>
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="#footer"
                onClick={scrollToSection('#footer')}
              >
                <h2>Contact</h2>
              </Link>
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="#about"
                onClick={scrollToSection('#about')}
              >
                <h2>About</h2>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
