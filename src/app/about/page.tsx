'use client'
import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Users, TrendingUp, Award, Eye, MessageCircle, Target, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

// Animated number counter props definition
export type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

// Typed AnimatedCounter component
const AnimatedCounter: FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function About() {
  const stats = [
    { number: 50, label: "Marketing Experts", icon: Users, suffix: "+" },
    { number: 18, label: "Successful Campaigns", icon: TrendingUp, suffix: "" },
    { number: 150, label: "Brands Joined", icon: Award, suffix: "+" },
    { number: 40, label: "Countries Reached", icon: Target, suffix: "+" }
  ];

  const services = [
    { title: "Create your brand voice and look", description: "Develop a unique brand identity that resonates with your audience", icon: Palette },
    { title: "Help you stand out from others", description: "Differentiate your brand in a crowded marketplace", icon: Eye },
    { title: "Build clear messaging", description: "Craft compelling messages that convert prospects to customers", icon: MessageCircle },
    { title: "Make a full brand guide", description: "Comprehensive guidelines to maintain brand consistency", icon: Target }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Content omitted for brevity; rest of your JSX remains unchanged */}
      </div>
      <Footer />
    </>
  );
}
