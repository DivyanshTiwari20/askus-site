'use client'
import React from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Target, Palette, Eye, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import { PixelImage } from "@/components/magicui/pixel-image";

// The page component, now with updated content and modern styling.
export default function About() {
  
  // Content for the "What we do" section, derived from your text.
  const services = [
    { 
      title: "Create your brand voice and look", 
      description: "We help you create a strong brand that tells your story, builds trust, and stays in people’s minds.",
      icon: Palette 
    },
    { 
      title: "Help you stand out from others", 
      description: "From startups to legacy brands, we help you stand out with insight-driven marketing and purposeful storytelling.",
      icon: Eye 
    },
    { 
      title: "Build clear messaging", 
      description: "We’re not just here to post—we’re here to position, connect, and convert with clear, impactful messaging.",
      icon: MessageCircle 
    },
    { 
      title: "Make a full brand guide", 
      description: "Powered by creativity and guided by data, we deliver a comprehensive brand guide for consistent results.",
      icon: Target 
    }
  ];

  // Animation variants for staggering child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      {/* Main container with a subtle background and padding */}
      <div className="bg-white text-gray-800 font-inter">
        
        {/* --- Page Header: Content left, Image right --- */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-24">
              {/* Left: Content */}
              <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <h1 className="font-jakarta text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Think Digital.<br/>Think Bold.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 font-manrope">
                  We’re Ask Us — a team that blends strategy, design, content, and performance to build brands that move fast and grow faster. Where ideas meet impact, we help you stand out with insight-driven marketing, purposeful storytelling, and measurable results.
                </p>
              </motion.div>
              {/* Right: Image with hover overlay */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <div className="relative group w-fit">
                  <PixelImage
                    src="/kb.jpg"
                    customGrid={{ rows: 4, cols: 6 }}
                    grayscaleAnimation
                  />
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-lg">
                    <span className="text-white text-lg font-bold font-jakarta">Kulbhushan Vishwakarma</span>
                    <span className="text-white text-sm font-manrope mt-1">Founder, CEO</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        

        {/* --- Brand Story Section --- */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              <h2 className="font-jakarta text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Do people remember your brand or forget it after a second?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 font-manrope">
                A brand is more than just a name or logo. It’s how people feel about you. We help you create a strong brand that tells your story, builds trust, and stays in people’s minds.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- "What We Do" Section --- */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
            >
              <h2 className="text-base font-semibold leading-7 text-violet-600 font-poppins">What we do</h2>
              <p className="mt-2 font-jakarta text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We’re not just here to post—we’re here to position, connect, and convert.
              </p>
            </motion.div>
            <motion.div 
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {services.map((service) => (
                <motion.div 
                  key={service.title} 
                  className="flex flex-col items-start p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 font-poppins">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 font-manrope">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
