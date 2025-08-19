'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  imageSrc: string;
}

const brands: Brand[] = [
  {
    name: "Contract 2Close",
    imageSrc: "/logo6.jpg",
  },
  {
    name: "MALOONA",
    imageSrc: "/logo4.jpg",
  },
  {
    name: "Ceramic Pro",
    imageSrc: "/logo3.jpg",
  },
  {
    name: "Grandmark",
    imageSrc: "/logo5.jpg",
  },
  {
    name: "Total Focus",
    imageSrc: "/logo1.jpg",
  },
  {
    name: "Total Focus",
    imageSrc: "/logo2.jpg",
  },
];

const BrandLogos = () => {
  // Create 4 sets for ultra-smooth infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="w-full bg-black py-18 overflow-hidden">
      {/* Section title for mobile */}
      <div className="text-center mb-12 md:hidden">
        <h2 className="text-white text-xl font-bold">Our Brands</h2>
      </div>

      <div className="relative">
        <motion.div
          animate={{
            x: [`0%`, `-${(100 * brands.length)}%`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 55,
              ease: "linear",
            },
          }}
          style={{
            width: `${duplicatedBrands.length * 100}px`, // Ensure proper width calculation
          }}
          className="flex gap-8 md:gap-16 items-center"
        >
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${brand.imageSrc}-${idx}`}
              className="flex-shrink-0"
            >
              <div className="w-46 h-18 sm:w-58 sm:h-20 md:w-80 md:h-29 flex items-center justify-center">
                <Image
                  src={brand.imageSrc}
                  alt={brand.name}
                  width={323}
                  height={115}
                  className="object-contain grayscale invert max-w-full max-h-full"
                  priority={idx < 6}
                />
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      {/* Section title for desktop - overlaid */}
      <div className="hidden md:block absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-2xl font-bold bg-black/50 px-6 py-3 rounded-lg backdrop-blur-sm">
          Our Brands
        </h2>
      </div>
    </section>
  );
};

export default BrandLogos;