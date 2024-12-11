"use client";
import Image from "next/image";
import { Product } from "../../../../type";
import { BouncyMotion } from "../../Globals/BouncyMotion";
import {  useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppButton } from "../../Globals/WhatsAppButton";
import { motion } from "framer-motion";

const generateProductStructuredData = (product: Product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: "GLOW WORM CHIPS",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
  },
});

const getProductDescription = (product: Product) => {
  const descriptions: { [key: string]: string } = {
    "banana-chips": "Discover our authentic Kerala-style banana chips, carefully crafted from hand-picked Nendran bananas. Each slice is expertly cut and fried in pure coconut oil to achieve that perfect golden crunch. A traditional snack that brings the authentic taste of Kerala to your home.",
    "murukku": "Experience the perfect blend of rice flour and urad dal, expertly spiced and hand-crafted into these traditional spiral delights. Our murukku is made following time-honored recipes, ensuring that perfect crunch and authentic South Indian taste in every bite.",
    "tapioca-chips": "Made from premium quality cassava roots, our tapioca chips are a unique twist on traditional snacks. Each piece is carefully sliced and crafted to deliver the perfect crunch, seasoned with our special blend of spices for an unforgettable snacking experience.",
    "dry-fruits": "Premium quality dried fruits, carefully selected and naturally preserved to maintain their nutritional value and authentic taste. Perfect for healthy snacking or adding to your favorite recipes.",
    "biscuits": "Handcrafted with love using traditional recipes, our biscuits are baked to perfection. Made with premium ingredients and just the right amount of sweetness, they're perfect with your evening tea or coffee.",
    "many-others": "A special selection from our innovative snack collection, combining traditional methods with unique ingredients to create extraordinary flavors that surprise and delight."
  };

  return descriptions[product.categorySlug] || "Experience the authentic taste of Kerala with our premium snacks. Made with the finest ingredients and traditional recipes.";
};


export default function ProductCard({
  product,
  bgColor,
  className,
  textSize,
}: {
  product: Product;
  bgColor?: string;
  className?: string;
  textSize?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BouncyMotion>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild onClick={() => setIsOpen(true)}>
          <article
            className={`pt-6 cursor-pointer ${className ? className : ""}`}
            aria-label={`Product: ${product.name}`}
            itemScope
            itemType="https://schema.org/Product"
            itemProp="itemListElement"
          >
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateProductStructuredData(product)),
              }}
            />
            <div
              // href={`/${product.categorySlug}`}
              className="flex flex-col relative"
            >
              <figure className="w-[85%] aspect-[4/5] z-20 relative mx-auto">
                <img
                  src={product.image}
                  alt={`${product.name} product image`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain rounded-lg w-full h-full"
                  style={{
                    opacity: 1,
                    transform: "scale(1)",
                    transition: "all 0.5s ease-in-out",
                  }}
                  aria-label={`${product.name} - GLOW WORM CHIPS Premium Snacks`}
                />
              </figure>

              <div
                className={`w-full md:mt-2 absolute -bottom-20 z-10 flex items-end justify-center px-4 md-py-2  rounded-tl-3xl rounded-tr-[55px] md:rounded-tr-[75px] rounded-b-lg shadow-sm pb-6 md:pb-10 ${bgColor}`}
              >
                <h2
                  className={`text-[#333333] pt-9 z-30 leading-tight font-normal font-['Jost'] text-center ${
                    textSize || "text-lg sm:text-xl md:text-[20.90px] lg:text-3xl"
                  }`}
                  itemProp="name"
                >
                  {product.name}
                </h2>
              </div>
            </div>
          </article>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] h-[85vh] bg-gradient-to-br from-amber-50 via-white to-orange-50/30 p-0 border-none overflow-hidden">
          {/* Updated Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          {/* Enhanced Decorative Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-white to-orange-50/30" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
            <DialogHeader className="relative mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-3 sm:space-y-4 text-center"
              >
                <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Jost'] bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  {product.name}
                </DialogTitle>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-['Jost'] italic">
                  {product.alt}
                </p>
              </motion.div>
            </DialogHeader>

            <div className="flex-1 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
              {/* Left Column - Enhanced Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square relative w-[180px] xs:w-[220px] sm:w-full max-w-[340px] mx-auto">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-orange-300/40 rounded-full blur-3xl animate-pulse" />
                  
                  <motion.div 
                    className="relative z-10"
                    whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={340}
                      height={340}
                      className="object-contain w-full h-full drop-shadow-xl"
                      sizes="(max-width: 480px) 180px, (max-width: 768px) 220px, 340px"
                      priority
                    />
                  </motion.div>

                  {/* Enhanced Floating Particles */}
                  <motion.div
                    className="absolute inset-0 scale-75 sm:scale-100"
                    animate={{
                      background: [
                        "radial-gradient(circle at 30% 50%, rgba(251,191,36,0.15) 0%, transparent 50%)",
                        "radial-gradient(circle at 70% 50%, rgba(251,191,36,0.15) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
              </motion.div>

              {/* Right Column - Enhanced Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6 sm:space-y-8 flex flex-col justify-around h-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-amber"
                >
                  <DialogDescription className="text-[14px] sm:text-lg md:text-xl font-['Jost'] text-gray-600 leading-relaxed">
                    {getProductDescription(product)}
                  </DialogDescription>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 sm:space-y-6 flex flex-col justify-center"
                >
                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-[12px] sm:text-base text-amber-800 shadow-sm">
                      Ready to experience the authentic taste?
                    </span>
                  </div>
                  <WhatsAppButton 
                    className="relative m-auto right-0 bottom-0 w-full max-w-xs transform transition-all duration-300 hover:scale-105 hover:shadow-lg" 
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BouncyMotion>
  );
}
