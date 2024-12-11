import { WHATSAPP_MESSAGE } from "@/lib/constants";
import Link from "next/link";

export const AboutButtons = () => {

  return (
    <div className="container mx-auto px-4 md:px-8 flex flex-row gap-4 md:gap-12 justify-start mt-8 md:mt-16">
      <Link
        href="https://maps.app.goo.gl/Z4GcQEdssMu9E6Ha7?g_st=iw"
        target="_blank"
        className="w-full md:w-[385px] h-14 pt-[15.20px] pb-[13.80px] bg-white rounded-[26.01px] shadow border border-[#fe5d26]/5 backdrop-blur-[13.01px] justify-center items-center inline-flex hover:bg-white/90 transition-colors"
        aria-label="Visit our facilities via Google Maps"
      >
        <span className="text-center text-[#2e9642] text-[18.97px] font-black font-['Jost'] tracking-tight">
          VISIT US
        </span>
      </Link>

      <Link
        href={`https://wa.me/919895193123?text=${encodeURIComponent(
          WHATSAPP_MESSAGE
        )}`}
        className="w-full md:w-[197.05px] h-[55.83px] pl-[33.63px] pr-[33.42px] pt-[15.20px] pb-[13.63px] bg-[#2e9642] rounded-[26.01px] shadow border border-[#fe5d26]/5 backdrop-blur-[13.01px] justify-center items-center inline-flex hover:bg-[#2e9642]/80 transition-colors"
        aria-label="Contact our export team via WhatsApp"
      >
        <span className="text-center text-white text-[18.97px] font-black font-['Jost'] tracking-tight">
          CONTACT US
        </span>
      </Link>
    </div>
  );
};
