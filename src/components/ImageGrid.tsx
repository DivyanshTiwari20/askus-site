"use client";
import { motion, Variants, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const cards = [
  {
    title: "•1,500+",
    description: "• Content pieces shot & delivered",
    icon: "🚀",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "•500K+",
    description: "• Organic reach generated for clients",
    icon: "📈", // Changed to a chart/growth icon for better representation
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "•50+",
    description: "• Brands trusting us with their contentg",
    icon: "⭐",
    color: "from-amber-500 to-orange-500"
  },
];

// Animation variants for each card
const cardVariants: Variants = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: (idx: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delay: idx * 0.22,
    },
  }),
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

/**
 * AnimatedCounter Component
 * Animates a number from 0 to the target value when it comes into view.
 */
const AnimatedCounter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, to, {
        duration: 2.5, // Slower animation for a smoother effect
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            // Handle floats (e.g., 4.80) and integers differently for correct formatting
            if (to % 1 !== 0) {
              ref.current.textContent = value.toFixed(2);
            } else {
              // Format large numbers with commas
              ref.current.textContent = Math.round(value).toLocaleString();
            }
          }
        }
      });
    }
  }, [isInView, to]);

  // Set initial text to 0
  return <span ref={ref}>0</span>;
};


const StatsCards = () => {
  const scrollRef = useRef(null);

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
      <motion.div
        ref={scrollRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {cards.map((card, idx) => {
          // Extract the number, prefix, and suffix from the title string
          const numberMatch = card.title.match(/[\d,.]+/);
          const number = numberMatch ? parseFloat(numberMatch[0].replace(/,/g, '')) : 0;
          const parts = numberMatch ? card.title.split(numberMatch[0]) : [card.title, ''];
          const prefix = parts[0];
          const suffix = parts[1];

          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              whileHover="hover"
              // No need for individual whileInView here, the parent handles the orchestration
              className="relative group"
            >
              {/* Main Card - Apple iOS Style Glassmorphism + 20% Larger */}
              <div
                className="relative overflow-hidden rounded-3xl p-8 h-full transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Rainbow gradient border (subtle) */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-60"
                  style={{
                    padding: '1.5px',
                    background: 'linear-gradient(135deg, rgba(255,107,107,0.5), rgba(78,205,196,0.5), rgba(69,183,209,0.5), rgba(150,206,180,0.5), rgba(254,202,87,0.5), rgba(255,159,243,0.5), rgba(84,160,255,0.5))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    borderRadius: '1.5rem',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex justify-between items-start h-full">
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Title with Animated Counter - 20% larger */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-manrope">
                      {prefix}
                      <AnimatedCounter to={number} />
                      {suffix}
                    </h3>

                    {/* Description - 20% larger */}
                    <p className="text-gray-700 text-lg font-jakarta my-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Icon - Top Right Corner - 20% larger with glass effect */}
                  <div className="flex-shrink-0 ml-5">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-white`}
                      style={{
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      <span className="text-xl">{card.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${card.color} rounded-3xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  );
};

export default StatsCards;