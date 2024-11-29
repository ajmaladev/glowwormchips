import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerHeader,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <div className="w-full h-[104px] bg-white fixed top-0 z-50 flex items-center justify-between px-6 lg:px-20">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={96}
          height={64}
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links - now in a single container */}
      <div className="md:flex w-full invisible md:visible justify-around mx-9 items-center gap-8">
        <Link className="text-black text-xs md:text-base lg:text-lg font-normal font-['Jost']" href="/">
          HOME
        </Link>
        <Link
          className="text-black text-xs md:text-base lg:text-lg font-normal font-['Jost']"
          href="/contact"
        >
          CONTACT
        </Link>
        <Link
          className="text-black text-xs md:text-base lg:text-lg font-normal font-['Jost']"
          href="/about"
        >
          ABOUT
        </Link>
      </div>

      {/* Search and Mobile Menu container */}
      <div className="flex items-center gap-4">
        <Drawer>
          <DrawerTrigger>
            <FiSearch className="w-6 h-6 text-gray-500" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Search Products</DrawerTitle>
              <DrawerDescription>
                Search for products across all categories
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 text-lg border rounded-md outline-none focus:ring-2 focus:ring-[#0c3614] focus:border-transparent"
                autoFocus
                aria-label="Search input"
              />
            </div>
          </DrawerContent>
        </Drawer>

        {/* Mobile Menu Button - only visible on mobile */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <div className="flex flex-col gap-3.5 p-2">
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
              <div className="w-[37px] h-1 bg-[#0c3614]/50 rounded-xl" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle aria-label="GLOW WORM">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={96}
                    height={64}
                    className="cursor-pointer"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="/"
              >
                HOME
              </Link>
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="/contact"
              >
                CONTACT
              </Link>
              <Link
                className="text-black text-lg font-normal font-['Jost'] hover:text-[#0c3614]"
                href="/about"
              >
                ABOUT
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
