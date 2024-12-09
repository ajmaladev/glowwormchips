import Image from "next/image";
import { Button } from "../ui/button";
import { WHATSAPP_MESSAGE } from "@/lib/constants";
import { AboutButtons } from "../Globals/AboutButtons";

export default function About() {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/919895193123?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      className="relative w-full pb-20"
      id="about"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Glow Worm Chips" />
      <meta
        itemProp="description"
        content="Your trusted partner for export success, specializing in quality bakery items, Kerala chips, and snacks."
      />
      <meta itemProp="foundingDate" content="2023" />

      <Image
        width={1000}
        height={1000}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        src="/glowwormchips-about-bg.svg"
        alt="Decorative background pattern"
        priority
        aria-hidden="true"
      />

      <div className="relative h-full px-4 md:px-8 lg:px-44">
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
                we're passionate about helping businesses like yours reach
                international market with ease and efficiency. Specializing in
                the export of quality products including bakery items, kerala
                chips, snacks , many more ...
              </p>
            </div>

            <div>
              <p
                className="text-white text-sm md:text-xl font-medium font-['Jost'] tracking-wide leading-relaxed"
                itemProp="knowsAbout"
              >
                Our experienced team manages the entire export process, from
                market research and logistics to documentation and compliance.
              </p>
            </div>
          </div>

          <div className="pr-4 md:pr-20">
            <h3 className="text-white text-xs md:text-[26px] font-bold font-['Jost'] tracking-widest leading-tight">
              READY TO EXPAND YOUR MARKET REACH LETS TAKE YOUR BUSINESS TO NEW
              HEIGHTS
            </h3>
          </div>
        </div>

       <AboutButtons />
      </div>
    </section>
  );
}
