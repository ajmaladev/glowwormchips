import Image from "next/image";
import { Button } from "../ui/button"

export default function About() {
  return (
    <div className="relative w-full pb-20">
      {/* Background image */}
      <Image
        width={1000} 
        height={1000}
        className="absolute inset-0 w-full h-full object-cover" 
        src="/about-bg.svg" 
        alt="Background"
      />
      
      {/* Content overlay */}
      <div className="relative h-full px-44">
        <div className="container mx-auto px-8 pt-20 space-y-16">
          {/* Heading */}
          <h4 className="text-white text-[40px] font-bold font-['Montserrat'] leading-[76px] tracking-[3.60px]">
            YOUR TRUSTED PARTNER FOR EXPORT SUCCESS
          </h4>

          {/* Content section */}
          <div className="space-y-14">
            <div className="space-y-8">
              <h4 className="text-white text-[40px] font-bold font-['Jost'] tracking-[3.60px]">
                GLOW WORM
              </h4>
              <p className="text-white text-xl font-medium font-['Jost'] tracking-wide leading-relaxed">
                we're passionate about helping businesses like yours reach international market with ease and efficiency. Specializing in the export of quality products including bakery items, kerala chips, snacks , many more ...
              </p>
            </div>
            
            <div>
              <p className="text-white text-xl font-medium font-['Jost'] tracking-wide leading-relaxed">
                Our experienced team manages the entire export process, from market research and logistics to documentation and compliance.
              </p>
            </div>
          </div>

          {/* Bottom text */}
          <div className="pr-20">
            <h5 className="text-white text-[26px] font-black font-['Jost'] tracking-widest leading-tight">
              READY TO EXPAND YOUR MARKET REACH LETS TAKE YOUR BUSINESS TO NEW HEIGHTS
            </h5>
          </div>
        </div>
        <div className="container mx-auto px-8 flex gap-12 justify-start mt-16">
        <Button className="bg-white rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-8 py-4">
          <div className="text-center w-[385px] text-[#2e9642] text-[19px] font-black font-['Jost'] tracking-tight">
            VISIT US
          </div>
        </Button>
        
        <Button className="bg-[#2e9642] rounded-[26px] shadow border border-[#fe5d26]/5 backdrop-blur-[13px] px-8 py-4">
          <h5 className="text-center text-white text-[19px] font-black font-['Jost'] tracking-tight">
            CONTACT US
          </h5>
        </Button>
      </div>
      </div>

      {/* Action buttons container */}
      
    </div>
  );
}
