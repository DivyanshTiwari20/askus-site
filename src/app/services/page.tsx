'use client'

import React, { useState, useEffect } from 'react';
import { 
  Video, 
  Share2, 
  Palette, 
  Search, 
  MessageCircle, 
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'
import Footer from '@/sections/Footer'

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  gradient,
  slug,
  index 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're on mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-expand cards on mobile/tablet after initial animation
      const expandTimer = setTimeout(() => {
        if (window.innerWidth < 1024) { // tablet and below
          setIsExpanded(true);
        }
      }, 1000 + (index * 200));
      
      return () => clearTimeout(expandTimer);
    }, index * 150);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [index]);

  const handleCardClick = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
    // Navigation will be handled by Link wrapper
  };

  return (
    <div 
      className={`group relative h-80 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isExpanded || !isMobile ? 'hover:scale-105' : ''
      } ${
        index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
      }`}
      onClick={handleCardClick}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Background Image/Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-700`}>
        {image && (
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isExpanded && isMobile ? 'scale-110' : 'group-hover:scale-110'
            }`}
          />
        )}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isExpanded && isMobile ? 'bg-black/50' : 'bg-black/20 group-hover:bg-black/40'
        }`}></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
        {/* Icon */}
        <div className="flex justify-between items-start">
          <div className={`p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-2xl transition-all duration-500 ${
            isExpanded && isMobile ? 'bg-white text-gray-900 scale-110 rotate-12' : 'group-hover:bg-white group-hover:text-gray-900 group-hover:scale-110 group-hover:rotate-12'
          }`}>
            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className={`p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-500 delay-200 ${
            isExpanded && isMobile ? 'opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0'
          }`}>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>

        {/* Text Content */}
        <div className={`transform transition-all duration-500 ${
          isExpanded && isMobile ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
        }`}>
          <h3 className={`text-xl sm:text-2xl font-bold mb-3 transition-all duration-300 ${
            isExpanded && isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            {title}
          </h3>
          <p className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-500 transform ${
            isExpanded && isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'
          }`}>
            {description}
          </p>
        </div>

        {/* Hover/Expanded Elements */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-500 ${
          isExpanded && isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}></div>
        
        {/* Animated Particles */}
        <div className={`absolute top-4 right-4 transition-all duration-700 delay-300 ${
          isExpanded && isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>

        {/* Mobile/Tablet Indicator */}
        <div className={`lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs transition-all duration-300 ${
          isExpanded ? 'opacity-0' : 'opacity-100'
        }`}>
          Tap to explore
        </div>
      </div>

      {/* Glowing Border Effect */}
      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
        isExpanded && isMobile ? 'border-white/30' : 'border-transparent group-hover:border-white/30'
      }`}></div>
      
      {/* Shimmer Effect */}
      <div className={`absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full transition-all duration-500 ${
        isExpanded && isMobile ? 'opacity-100 animate-ping' : 'opacity-0 group-hover:opacity-100 group-hover:animate-ping'
      }`}></div>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Video,
      title: "Video Production",
      slug: "video-production",
      description: "Cinematic storytelling that captivates audiences and drives engagement through professional-grade content creation.",
      gradient: "from-purple-600 via-pink-600 to-red-500",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=400&fit=crop"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      slug: "social-media-management", 
      description: "Strategic social presence that builds communities, amplifies your brand voice, and converts followers into customers.",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=400&fit=crop"
    },
    {
      icon: Palette,
      title: "Design & Development",
      slug: "design-development",
      description: "Beautiful, functional digital experiences that combine stunning aesthetics with seamless user interactions.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      slug: "seo-optimization",
      description: "Data-driven strategies that boost your search visibility and drive qualified organic traffic to your business.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Marketing",
      slug: "whatsapp-marketing",
      description: "Direct customer engagement through personalized messaging that builds relationships and drives conversions.",
      gradient: "from-green-600 via-green-500 to-emerald-400",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&h=400&fit=crop"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      slug: "email-marketing",
      description: "Targeted campaigns that nurture leads, build loyalty, and generate revenue through personalized communication.",
      gradient: "from-indigo-600 via-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white mt-12 ">
        <div className="pt-24 pb-16">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
            
            {/* Simple Hero Section */}
            <div className="text-center mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
                Services We Provide
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                We combine cutting-edge strategies, proven expertise, and tailored approaches to drive growth, 
                efficiency & innovation. Every project is a commitment to exceeding expectations—because your success defines ours.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Link 
                  href={`/services/${service.slug}`} 
                  key={index}
                  className="block"
                >
                  <ServiceCard 
                    {...service} 
                    index={index}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}