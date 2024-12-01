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
      <Image
        width={1920}
        height={1080}
        alt="Artisanal Premium Potato Chips - Handcrafted in Small Batches with Natural Ingredients"
        title="Premium Gourmet Potato Chips"
        className="w-full h-full object-cover pointer-events-none"
        src="/carousel/carousel-1.svg"
        priority
        unoptimized
        draggable="false"
      />
    ),
  },
  {
    id: 2,
    content: (
      <Image
        width={1920}
        height={1080}
        alt="Organic Premium Ingredients - Sourced from Local Farmers for Superior Quality Snacks"
        title="Premium Quality Ingredients"
        className="w-full h-full object-cover pointer-events-none"
        src="/carousel/carousel-2.svg"
        unoptimized
        draggable="false"
      />
    ),
  },
  {
    id: 3,
    content: (
      <Image
        width={1920}
        height={1080}
        alt="Gourmet Artisanal Snacks - Crafted with Love for an Exceptional Snacking Experience"
        title="Artisanal Snack Collection"
        className="w-full h-full object-cover pointer-events-none"
        src="/carousel/carousel-3.svg"
        unoptimized
        draggable="false"
      />
    ),
  },
];

export function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative px-4 sm:px-8 md:px-16 lg:px-[102px] mx-auto overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Product Highlights Carousel"
    >
      <div className="w-full h-full bg-white sm:px-8 md:px-16 lg:px-[102px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 0.5, ease: "easeOut" },
            }}
            className="w-full h-full"
            aria-live="polite"
          >
            {cards[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2">
        <nav className="relative bg-white/20 rounded-full backdrop-blur-[5.26px] px-2 sm:px-3 md:px-3.5 py-0.5 sm:py-1">
          <div
            className="flex gap-1.5 sm:gap-2 md:gap-3"
            role="tablist"
            aria-label="Carousel Navigation"
          >
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-white"
                    : "bg-[#aeaeae] hover:bg-white/70"
                )}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`View slide ${index + 1}`}
                aria-controls={`slide-${index + 1}`}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
