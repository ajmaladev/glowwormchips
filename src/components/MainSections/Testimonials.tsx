"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialData = [
  {
    id: 1,
    name: "Faizal",
    message: "If you liked these, you'll love these!",
    activeIndex: 0,
  },
  {
    id: 2,
    name: "Sanjay",
    message: "Tasty banana chips. I would recommend to try this",
    activeIndex: 1,
  },
  {
    id: 3,
    name: "Lincy",
    message: "Crispy and delicious ever",
    activeIndex: 2,
  },
  {
    id: 4,
    name: "Sajith",
    message: "Best ones in kerala",
    activeIndex: 3,
  },
];

const testimonialStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": testimonialData.map((testimonial, index) => ({
    "@type": "Review",
    "position": index + 1,
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewBody": testimonial.message,
    "itemReviewed": {
      "@type": "Product",
      "name": "GLOW WORM CHIPS",
      "brand": {
        "@type": "Brand",
        "name": "GLOW WORM CHIPS"
      }
    }
  }))
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;

      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -1000,
      opacity: 0
    }
  };

  return (
    <section className="w-full bg-[#2e9642] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-[#c3f3da] text-[28.58px] md:text-5xl font-extrabold font-['Jost'] tracking-wide text-center mb-12">
          Check out what others say
        </h2>

        <div className="w-full max-w-3xl mx-auto relative">
          <Image
            src="/glowwormchips-quotation.png"
            alt="testimonial-bg"
            width={1000}
            height={1000}
            className="w-[34px] h-[25px] md:w-[56.16px] md:h-[41.57px] mb-4 mx-auto"
          />
          
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {testimonialData.map((testimonial, index) => (
                index === currentIndex && (
                  <motion.div
                    key={testimonial.id}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-[#a5e8c5] text-lg md:text-[29px] font-normal font-['Jost'] tracking-wider mb-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#cdf7e1] text-base md:text-[26.45px] font-normal font-['Jost'] tracking-wider text-center mb-8">
                      {testimonial.message}
                    </p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex gap-4 mt-4 justify-center">
            {testimonialData.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  dotIndex === currentIndex
                    ? "bg-[#123135]"
                    : "bg-[#4cbf82]"
                } hover:bg-[#123135]/80`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialStructuredData) }}
      />
    </section>
  );
};

export default Testimonials;
