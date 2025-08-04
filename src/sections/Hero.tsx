"use client";

import { motion, Variants, useInView, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { BlurFade } from "@/components/magicui/blur-fade";
import ImageGrid from "../components/ImageGrid";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { SparklesText } from "@/components/magicui/sparkles-text";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
];

const Hero = () => {
  return (
    <section className="gradient-blue bg-gradient-to-r from-violet-200 to-blue-200 min-h-screen w-full">
      <Navbar />
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-3 sm:px-5 md:px-7 pt-14 sm:pt-18 md:pt-22 pb-14 sm:pb-18 md:pb-25">
        
        {/* Avatar Section with Stars and Text */}
        <BlurFade delay={0.25} offset={8}>
          <div className="flex flex-row items-center justify-center gap-4 mb-0.5 my-3 mt-16 sm:mt-24 md:mt-32">
            <AvatarCircles numPeople={99} avatarUrls={avatars} />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                {/* 5 Stars */}
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-jakarta font-medium text-gray-700 text-xs sm:text-sm">
                 
                  100+ Happy Brands
               
                </span>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.5} offset={12}>
        <SparklesText>
          <h1 className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3.5 sm:mb-5">
            Revolutionizing Startup Infrastructure.
          </h1>
          </SparklesText>
        </BlurFade>
        
        <BlurFade delay={0.75} offset={10}>
          <p className="font-jakarta text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-7 max-w-xl">
            We are a team of passionate experts who help startups thrive by unlocking the full potential of social media, web development, and strategic marketing.
          </p>
        </BlurFade>
        
        <BlurFade delay={1.0} offset={8}>
          {/* --- MODIFIED BUTTON --- */}
          <CoolMode>
            <a href="/contact">
              <InteractiveHoverButton>
                  <span className="inline-flex items-center gap-2">
                      Get Started
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                  </span>
              </InteractiveHoverButton>
            </a>
          </CoolMode>
          {/* --- END MODIFIED BUTTON --- */}
        </BlurFade>
      </div>
      <BlurFade delay={1.25} offset={15}>
        <div className="-mb-20">
          <ImageGrid />
        </div>
      </BlurFade>
    </section>
  );
};

export default Hero;
