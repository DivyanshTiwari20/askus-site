// components/BrandLogos.tsx
'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
    imageSrc: "/logo7.png",
  },
  {
    name: "Total Focus",
    imageSrc: "/logo2.jpg",
  },
];

// Custom hook to detect if device is desktop (md and up)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    // Only run on client
    const check = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

const BrandLogos = () => {
  const [hovered, setHovered] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <section
      className="w-full bg-black py-24 relative"
      onMouseEnter={isDesktop ? () => setHovered(true) : undefined}
      onMouseLeave={isDesktop ? () => setHovered(false) : undefined}
    >
      <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-6 gap-y-20 gap-x-4 md:gap-x-12 md:gap-y-12 justify-items-center items-center px-4 md:px-0">
        {brands.map((brand, idx) => (
          <div
            key={`${brand.name}-${brand.imageSrc}`}
            className="flex flex-col items-center w-full"
          >
            <div className="w-32 h-10 md:w-44 md:h-14 flex items-center justify-center">
              <Image
                src={brand.imageSrc}
                alt={brand.name}
                width={176}
                height={56}
                className="object-contain grayscale invert"
                priority
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isDesktop && hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center bg-black/42 backdrop-blur-[2px] text-white text-xl md:text-2xl font-bold"
          >
            Our brands
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BrandLogos;
