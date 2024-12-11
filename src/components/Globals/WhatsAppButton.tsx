"use client";

import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";
import Image from "next/image";

export function WhatsAppButton({ className }: { className?: string }) {
  const handleOrderClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/919895193123?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button
      onClick={handleOrderClick}
      className={`fixed bottom-20 right-6 z-50 h-12 pl-[9px] pr-[8.80px] pt-[11px] pb-3 bg-[#5db046]/70 hover:bg-[#5db046] transition-colors rounded-3xl shadow border border-[#fe5d26]/5 backdrop-blur-[11.88px] justify-center items-center inline-flex gap-2 ${className || ""}`}
      aria-label="Contact us on WhatsApp to place an order"
    >
      <Image 
        src="/social/glow-worm-chips-whatsapp.png"
        alt="WhatsApp"
        width={24}
        height={24}
        className="object-contain"
      />
      <span className="text-center text-white text-lg font-black font-['Jost']">
        BUY NOW
      </span>
    </Button>
  );
} 