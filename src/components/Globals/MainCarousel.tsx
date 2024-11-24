"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    content: (
      <div className="h-48 md:h-full bg-white mx-auto  relative w-5/6">
        <div className="h-full relative mx-auto">
          <div className="relative w-5/6 bg-gradient-to-t h-full mx-auto from-[#207e06] to-[#f4f1e6]">
            <h1 className="mx-auto text-center w-5/6 text-[#207e06] text-[86.74px] pt-20 z-20 font-black font-['Jost'] leading-[97.25px]">
              EVERY CHIP TELL A TALE
              OF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLAVOR
            </h1>
            <div className="relative mx-auto ml-[174px]">
              <Image
                width={181}
                height={216}
                alt="carousel-image"
                className="w-[180.93px] h-[215.71px] left-[55.20px] top-[-40px] z-10 absolute"
                src="/carousel/carousel-product-1.svg"
              />
              <Image
                width={166}
                height={216}
                alt="carousel-image"
                className="w-[165.95px] h-[215.71px] left-[722.14px] top-[-40px] absolute"
                src="/carousel/carousel-product-2.svg"
              />
              <Image
                width={198}
                height={231}
                alt="carousel-image"
                className="w-[197.57px] h-[231.36px] left-[552.32px] top-[-35px] absolute"
                src="/carousel/carousel-product-3.svg"
              />
              <Image
                width={190}
                height={232}
                alt="carousel-image"
                className="w-[190.39px] h-[231.76px] left-[205.15px] top-[-35px] absolute"
                src="/carousel/carousel-product-4.svg"
              />
              <Image
                width={284}
                height={353}
                alt="carousel-image"
                className="w-[284.39px] h-[352.73px] left-[335.34px] top-[-115px] absolute"
                src="/carousel/carousel-product-5.svg"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className=" h-48 md:h-56  relative w-5/6">
        <div className="w-full h-full left-0 top-0 absolute bg-white" />
        <Image
          width={393}
          height={262}
          alt="carousel-image"
          className="w-full h-full left-0 top-0 absolute object-cover"
          src="/carousel/carousel-category-2.svg"
        />
        <div className="w-full h-[46px] md:h-[56px] lg:h-[66px] left-0 top-[71px] md:top-[80px] lg:top-[90px] absolute bg-[#f4f1e6] justify-center items-center inline-flex">
          <div className="w-full h-full text-center text-[#63301e] text-[15px] md:text-[18px] lg:text-[20px] font-black font-['Montserrat'] tracking-widest flex items-center justify-center">
            WE CHOOSE THE FINEST FOR YOU
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className=" h-48 md:h-56  relative w-5/6">
        <Image
          width={393}
          height={192}
          alt="carousel-image"
          className="w-full h-full left-0 top-0 absolute object-cover"
          src="/carousel/carousel-category-3.svg"
        />
        <div className="w-[352px] md:w-[420px] lg:w-[480px] h-[145px] md:h-[165px] lg:h-[185px] left-[20px] md:left-[25px] lg:left-[30px] top-[23px] md:top-[28px] lg:top-[32px] absolute text-white text-[56.57px] md:text-[65px] lg:text-[75px] font-black font-jost">
          Every Snack Sparks Joy
        </div>
      </div>
    ),
  },
];

export function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative  to-[#f4f1e6]  h-48 md:h-56 lg:h-[509px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {cards[currentIndex].content}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-all",
              currentIndex === index
                ? "bg-black w-4 md:w-5 lg:w-6"
                : "bg-black/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
