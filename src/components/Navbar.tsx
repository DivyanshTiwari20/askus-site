'use client'
import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Magic UI Shimmer Button Component
// This is a reusable button component with a shimmer effect.
type ShimmerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
  children: React.ReactNode;
  className?: string;
};

const ShimmerButton = ({ children, className = '', ...props }: ShimmerButtonProps) => {
  // Separate framer-motion props to avoid passing them down to the DOM element
  const {
    whileHover,
    whileTap,
    transition,
    ...rest
  } = props;

  return (
    <motion.button
      className={`inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 xs:px-4 sm:px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
      whileHover={whileHover ?? { scale: 1.02 }}
      whileTap={whileTap ?? { scale: 0.98 }}
      transition={transition ?? { type: "spring", stiffness: 400, damping: 17 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
    // { name: 'Get free SEO', href: 'https://polish-rho.vercel.app/' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-1 xs:px-2 sm:px-4 py-1 xs:py-2 sm:py-3"
    >
      {/* Glassmorphism container with responsive padding and max-width */}
      <div
        className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-1 xs:px-2 sm:px-4 md:px-6 py-1 xs:py-2 sm:py-3 border border-gray-200/50 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg glass-navbar"
        style={{
          background: 'rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.18)'
        }}
      >
        <div className="flex items-center justify-between min-h-[44px]">
          {/* Logo with responsive font size */}
          <motion.a
            href="/"
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ cursor: "pointer" }}
          >
            .ASKUSstudio
          </motion.a>

          {/* Desktop Navigation Items: Hidden on mobile (md:flex) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium text-xs sm:text-sm lg:text-base relative z-10 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  {/* Underline animation on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{
                      scaleX: hoveredItem === index ? 1 : 0,
                      opacity: hoveredItem === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Hamburger for mobile: Hidden on desktop (md:hidden) */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          {/* Shimmer Button: Hidden on very small screens (hidden xs:inline-flex) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut"
            }}
            className="ml-2"
          >
            <ShimmerButton
              className="hidden xs:inline-flex text-white text-xs sm:text-sm lg:text-base"
              onClick={() => { window.location.href = '/contact'; }}
            >
              <span>Book a Demo</span>
              <motion.div
                className="ml-2"
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </ShimmerButton>
          </motion.div>
        </div>

        {/* Mobile Navigation Drawer: Animates open/closed */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`md:hidden overflow-hidden`}
        >
          <div className="flex flex-col items-start gap-1 py-2 w-full">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="w-full text-gray-700 hover:text-blue-700 font-medium text-sm xs:text-base px-3 xs:px-4 py-2 rounded-lg transition-all duration-200"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scoped CSS for shimmer animation and specific media query overrides */}
      <style jsx>{`
        @keyframes shimmer {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        .glass-navbar {
          background: rgba(255,255,255,0.25) !important;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
          border: 1px solid rgba(255,255,255,0.18) !important;
        }
        
        /* Note: The media queries in the original code were overriding Tailwind classes
          with !important, which is generally not recommended. Tailwind's built-in 
          responsive prefixes (like sm:, md:) are the preferred way to handle this.
          However, I have kept them as they were in your original component.
        */
        @media (max-width: 400px) {
          .max-w-6xl,
          .max-w-full,
          .sm\\:max-w-2xl,
          .md\\:max-w-3xl,
          .lg\\:max-w-5xl,
          .xl\\:max-w-6xl {
            max-width: 100vw !important;
          }
        }
        @media (max-width: 640px) {
          .glass-navbar {
            border-radius: 0.75rem !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
