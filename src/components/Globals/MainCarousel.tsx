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
      <div className="h-48 sm:h-72 md:h-96 lg:h-[509px] relative w-full select-none">
        <div className="absolute inset-0 w-full h-full" onContextMenu={(e) => e.preventDefault()}>
          <Image
            width={1920}
            height={1080}
            alt="EVERY CHIP TELLS A TALE OF FLAVOR"
            className="w-full h-full object-cover pointer-events-none"
            src="/carousel/carousel-1.svg"
            priority
            unoptimized
            draggable="false"
          />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="h-48 sm:h-72 md:h-96 lg:h-[509px] relative w-full select-none">
        <div className="absolute inset-0 w-full h-full" onContextMenu={(e) => e.preventDefault()}>
          <Image
            width={1920}
            height={1080} 
            alt="WE CHOOSE THE FINEST FOR YOU "
            className="w-full h-full object-cover pointer-events-none"
            src="/carousel/carousel-2.svg"
            unoptimized
            draggable="false"
          />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="h-48 sm:h-72 md:h-96 lg:h-[509px] relative w-full select-none">
        <div className="absolute inset-0 w-full h-full" onContextMenu={(e) => e.preventDefault()}>
          <Image
            width={1920}
            height={1080}
            alt="EVERY SNACK SPARKS JOY"
            className="w-full h-full object-cover pointer-events-none"
            src="/carousel/carousel-3.svg"
            unoptimized
            draggable="false"
          />
        </div>
      </div>
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
    <div className="relative px-[102px] mx-auto overflow-hidden">
      <div className="w-full h-full bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.5, ease: "easeInOut" },
              scale: { duration: 0.5, ease: "easeOut" }
            }}
            className="w-full h-full"
          >
            {cards[currentIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="relative bg-white/20 rounded-full backdrop-blur-[5.26px] px-3.5 py-1">
          <div className="flex gap-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-5 h-5 rounded-full transition-all duration-300",
                  currentIndex === index
                    ? "bg-white"
                    : "bg-[#aeaeae] hover:bg-white/70"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
