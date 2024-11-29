import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

export default function NavBar() {
  return (
    <div className=" w-full h-[104px] bg-white justify-center items-center gap-[179px] inline-flex">
      {/* Logo */}
      <div className="w-20 h-[58px] justify-center items-center flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={96}
          height={64}
          className="w-[96.20px] h-16 cursor-pointer"
        />
      </div>

      {/* Navigation Links - split into individual containers */}
      <div className="w-20 px-[22.50px] pt-5 pb-[21px] justify-center items-center flex">
        <Link className="text-black text-xs font-normal font-['Jost']" href="/">
          HOME
        </Link>
      </div>
      <div className="w-20 px-[13.50px] pt-5 pb-[21px] justify-center items-center flex">
        <Link
          className="text-black text-xs font-normal font-['Jost']"
          href="/contact"
        >
          CONTACT
        </Link>
      </div>
      <div className="w-20 pl-[20.50px] pr-[21.50px] pt-5 pb-[21px] justify-center items-center flex">
        <Link
          className="text-black text-xs font-normal font-['Jost']"
          href="/about"
        >
          ABOUT
        </Link>
      </div>

      {/* Search Icon with Drawer */}
      <Drawer>
          {/* Search Content */}
          <DrawerTrigger>
            <FiSearch className="w-6 h-6 text-gray-500" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>Search</DrawerTitle>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 text-lg border-none outline-none focus:ring-0"
              autoFocus
            />
          </DrawerContent>
      </Drawer>

      {/* Mobile Menu Button - updated positioning */}
      <div className="w-[60px] h-[38px] relative">
        <div className="w-[37px] h-1 left-[8px] top-[10px] absolute bg-[#0c3614]/50 rounded-xl" />
        <div className="w-[37px] h-1 left-[8px] top-[24px] absolute bg-[#0c3614]/50 rounded-xl" />
      </div>
    </div>
  );
}
