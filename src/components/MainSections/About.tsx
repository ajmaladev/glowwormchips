"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Suspense, useState } from "react";
import { WHATSAPP_MESSAGE } from "@/lib/constants";

// Loading skeleton component
const AboutSkeleton = () => (
  <div className="space-y-8 md:space-y-16 w-full">
    <Skeleton className="h-8 md:h-12 w-3/4" />
    <div className="space-y-8 md:space-y-14">
      <div className="space-y-4 md:space-y-8">
        <Skeleton className="h-8 md:h-12 w-1/2" />
        <Skeleton className="h-20 md:h-24 w-full" />
      </div>
      <Skeleton className="h-16 md:h-20 w-full" />
    </div>
    <Skeleton className="h-8 md:h-12 w-full" />
  </div>
);

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/919995700791?text=${encodedMessage}`, '_blank');
  };

  return (
    <section 
      className="relative w-full pb-20" 
      id="about"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Glow Worm Chips" />
      <meta itemProp="description" content="Your trusted partner for export success, specializing in quality bakery items, Kerala chips, and snacks." />
      <meta itemProp="foundingDate" content="2023" />
      
      <Image
        width={1000}
        height={1000}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src="/about-bg.svg"
        alt="Decorative background pattern"
        priority
        onLoad={() => setImageLoaded(true)}
        aria-hidden="true"
      />

      <div className="relative h-full px-4 md:px-8 lg:px-44">
        <Suspense fallback={<AboutSkeleton />}>
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20 space-y-8 md:space-y-16">
            <h4 
              className="text-white text-[22px] md:text-[40px] font-bold font-['Montserrat'] leading-tight md:leading-[76px] tracking-[3.60px]"
              itemProp="slogan"
            >
              YOUR TRUSTED PARTNER FOR EXPORT SUCCESS
            </h4>

            <div className="space-y-8 md:space-y-14">
              <div className="space-y-4 md:space-y-8">
                <h2 
                  className="text-white text-[22px] md:text-[40px] font-bold font-['Jost'] tracking-[3.60px]"
                  itemProp="name"
                >
                  GLOW WORM
                </h2>
                <p 
                  className="text-white text-sm md:text-xl font-medium font-['Jost'] tracking-wide leading-relaxed"
                  itemProp="description"
                >
                  we're passionate about helping businesses like yours reach international market with ease and efficiency. Specializing in the export of quality products including bakery items, kerala chips, snacks , many more ...
                </p>
              </div>

              <div>
                <p 
                  className="text-white text-sm md:text-xl font-medium font-['Jost'] tracking-wide leading-relaxed"
                  itemProp="knowsAbout"
                >
                  Our experienced team manages the entire export process, from market research and logistics to documentation and compliance.
                </p>
              </div>
            </div>

            <div className="pr-4 md:pr-20">
              <h3 className="text-white text-xs md:text-[26px] font-bold font-['Jost'] tracking-widest leading-tight">
                READY TO EXPAND YOUR MARKET REACH LETS TAKE YOUR BUSINESS TO NEW HEIGHTS
              </h3>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-start mt-8 md:mt-16">
            <Button
              className="bg-white rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-4 md:px-8 py-4 w-full md:w-auto hover:bg-white/90 transition-colors"
              aria-label="Visit our facilities via WhatsApp"
              onClick={handleWhatsAppClick}
            >
              <span className="text-center w-full md:w-[385px] text-[#2e9642] text-[19px] font-black font-['Jost'] tracking-tight">
                VISIT US
              </span>
            </Button>

            <Button
              className="bg-[#2e9642] rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-4 md:px-8 py-4 w-full md:w-auto hover:bg-[#2e9642]/90 transition-colors"
              aria-label="Contact our export team via WhatsApp"
              onClick={handleWhatsAppClick}
            >
              <span className="text-center text-white text-[19px] font-black font-['Jost'] tracking-tight">
                CONTACT US
              </span>
            </Button>
          </div>
        </Suspense>
      </div>
    </section>
  );
}
