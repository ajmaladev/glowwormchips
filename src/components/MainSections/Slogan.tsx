import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Slogan() {
  return (
    <div className="w-full h-[452px] relative bg-white">
      <Image
        width={1000}
        height={452}
        className="w-full absolute inset-0"
        src="/slogan-bg.svg"
        alt="slogan background"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black font-montserrat leading-[60.47px] tracking-[4.02px] bg-gradient-to-r from-[#f85741] to-[#f5a644] text-transparent bg-clip-text text-start max-w-[1033px]">
          GLOW WORM OFFERS AN EXTENSIVE SELECTION OF CHIPS FLAVORS
        </h1>
        <p className="text-[21.92px] font-semibold font-montserrat leading-[43.85px] tracking-widest bg-[#f85741] text-transparent bg-clip-text text-center max-w-[1033px] mt-4">
          Including Classic Chips. Spicy Masala Chips, Tangy Tomato Chips and Many . . .
        </p>
      </div>
    </div>
  );
}
