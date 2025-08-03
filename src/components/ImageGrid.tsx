"use client";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "•39,000+",
    description: "• Startup ready to connect",
    icon: "🚀",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "•180M+",
    description: "• Happy global users",
    icon: "👥",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "•4.80+",
    description: "• 10k+ rating",
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
      delay: idx * 0.22, // slightly slower, more visible stagger
    },
  }),
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
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
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
          >
            {/* Main Card */}
            <div
              className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-transparent bg-clip-padding rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              style={{
                background:
                  'linear-gradient(white, white) padding-box, linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff) border-box',
              }}
            >
              {/* Content */}
              <div className="relative z-10 flex justify-between items-start h-full">
                <div className="flex-1 flex flex-col justify-between">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-manrope">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-md font-jakarta my-5">
                    {card.description}
                  </p>
                </div>

                {/* Icon - Top Right Corner */}
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`w-12 h-12 rounded-full border-2 border-gray-200 bg-gradient-to-r ${card.color} flex items-center justify-center text-white shadow-sm`}
                  >
                    <span className="text-base">{card.icon}</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${card.color} rounded-2xl transition-opacity duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsCards;