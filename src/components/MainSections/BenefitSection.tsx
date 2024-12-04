"use client";
import { BouncyMotion } from "@/components/Globals/BouncyMotion";
import { Button } from "../ui/button";
import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    title: "NATURAL",
    icon: "/benifit/n.svg",
  },
  {
    id: 2,
    title: ["NOTHING", "ARTIFICIAL"],
    icon: "/benifit/na.svg",
  },
  {
    id: 3,
    title: "FRESH",
    icon: "/benifit/fresh.svg",
  },
  {
    id: 4,
    title: ["DELICIOUSLY", "CRUNCHY"],
    icon: "/benifit/dc.svg",
  },
  {
    id: 5,
    title: "HAND FREE",
    icon: "/benifit/hf.svg",
  },
];

export const BenefitSection = () => {
  return (
    <section
      aria-label="Product Benefits"
      className="container md:w-full mx-auto pb-12 md:pb-24 py-24 md:py-36 px-4 md:px-8 relative"
    >
      <Button className="absolute left-1/2 -translate-x-1/2 -top-8 pl-[51.25px] pr-[50.33px] py-8 bg-[#43c05b] hover:bg-[#43c05b]/70 rounded-[39.28px] shadow-2xl border-2 border-[#fe5d26]/5 backdrop-blur-[19.64px] justify-center items-center inline-flex">
        <div className="text-center text-white text-lg md:text-[28.64px] font-black tracking-wide">
          ORDER NOW
        </div>
      </Button>
      <h2 className="sr-only">Our Product Benefits</h2>

      <div className="grid lg:mx-0 md:mx-16 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-24">
        {benefitsData.map((benefit, index) => (
          <BouncyMotion key={benefit.id} initialY={-30} className="w-full">
            <article className="flex flex-col items-center gap-6 md:gap-8">
              <figure
                className="rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="flex items-center text-4xl" role="presentation">
                  <Image src={benefit.icon} alt={benefit.title.toString()} width={100} height={100} className="w-[106px] h-[106px] md:w-[72px] md:h-[72px] object-contain" />
                </div>
              </figure>
              <h3 className="text-center text-[#5db046]  text-[13px] md:text-2xl font-normal font-['Jost'] tracking-widest">
                {Array.isArray(benefit.title)
                  ? benefit.title.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))
                  : benefit.title}
              </h3>
            </article>
          </BouncyMotion>
        ))}
      </div>
    </section>
  );
};
