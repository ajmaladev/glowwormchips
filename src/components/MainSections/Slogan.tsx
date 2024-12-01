import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Slogan() {
  return (
    <section 
      className="w-full relative bg-white py-8 sm:py-16 md:py-24"
      aria-label="Product Offerings"
      style={{
        backgroundImage: `url(/slogan-bg.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8">
        <h1 
          className="text-2xl md:text-3xl lg:text-4xl font-black font-montserrat leading-tight md:leading-[60.47px] lg:leading-[60.47px] tracking-[4.02px] bg-gradient-to-r from-[#f85741] to-[#f5a644] text-transparent bg-clip-text text-center lg:text-start max-w-[1033px]"
          aria-label="Main product offering"
        >
          GLOW WORM OFFERS AN EXTENSIVE SELECTION OF CHIPS FLAVORS
        </h1>
        <p 
          className="text-base md:text-lg lg:text-[21.92px] font-semibold font-montserrat leading-relaxed md:leading-[43.85px] tracking-widest bg-[#f85741] text-transparent bg-clip-text text-center max-w-[1033px] mt-4"
          aria-label="Available flavors"
        >
          Including Classic Chips. Spicy Masala Chips, Tangy Tomato Chips and Many . . .
        </p>
      </div>
    </section>
  );
}
