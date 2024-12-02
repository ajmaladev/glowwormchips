import Image from "next/image";
import { Button } from "../ui/button"

export default function About() {
  return (
    <section className="relative w-full pb-20" aria-label="About Glow Worm" id="about"> 
      <Image
        width={1000} 
        height={1000}
        className="absolute inset-0 w-full h-full object-cover" 
        src="/about-bg.svg" 
        alt="Decorative background pattern"
        priority
      />
      
      {/* Content overlay */}
      <div className="relative h-full px-4 md:px-8 lg:px-44">
        <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20 space-y-8 md:space-y-16">
          {/* Heading */}
          <h1 className="text-white text-[22px] md:text-[40px] font-bold font-['Montserrat'] leading-tight md:leading-[76px] tracking-[3.60px]">
            YOUR TRUSTED PARTNER FOR EXPORT SUCCESS
          </h1>

          {/* Content section */}
          <div className="space-y-8 md:space-y-14">
            <div className="space-y-4 md:space-y-8">
              <h2 className="text-white text-[22px] md:text-[40px] font-bold font-['Jost'] tracking-[3.60px]">
                GLOW WORM
              </h2>
              <p className="text-white text-sm md:text-xl font-medium font-['Jost'] tracking-wide leading-relaxed">
                we're passionate about helping businesses like yours reach international market with ease and efficiency. Specializing in the export of quality products including bakery items, kerala chips, snacks , many more ...
              </p>
            </div>
            
            <div>
              <p className="text-white text-sm md:text-xl font-medium font-['Jost'] tracking-wide leading-relaxed">
                Our experienced team manages the entire export process, from market research and logistics to documentation and compliance.
              </p>
            </div>
          </div>

          {/* Bottom text */}
          <div className="pr-4 md:pr-20">
            <h3 className="text-white text-xs md:text-[26px] font-bold font-['Jost'] tracking-widest leading-tight">
              READY TO EXPAND YOUR MARKET REACH LETS TAKE YOUR BUSINESS TO NEW HEIGHTS
            </h3>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-start mt-8 md:mt-16">
          <Button 
            className="bg-white rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-4 md:px-8 py-4 w-full md:w-auto"
            aria-label="Visit our facilities"
          >
            <span className="text-center w-full md:w-[385px] text-[#2e9642] text-[19px] font-black font-['Jost'] tracking-tight">
              VISIT US
            </span>
          </Button>
          
          <Button 
            className="bg-[#2e9642] rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-4 md:px-8 py-4 w-full md:w-auto"
            aria-label="Contact our export team"
          >
            <span className="text-center text-white text-[19px] font-black font-['Jost'] tracking-tight">
              CONTACT US
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
