import Image from "next/image";
import React from 'react';
import { BlurFade } from "@/components/magicui/blur-fade";

const Section = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      width: 800,
      height: 320,
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      width: 800,
      height: 448,
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      width: 800,
      height: 320,
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      width: 800,
      height: 416,
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <BlurFade delay={0.25} inView>
            <div className="space-y-6">
              <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Think Digital.</span>
                <span className="block">Think Bold.</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 font-jakarta text-base sm:text-lg leading-relaxed">
                <p>
                  We&apos;re <strong className="text-gray-900 font-bold">AskUs</strong> — a team that blends strategy, design, content, and performance to build brands that move fast and grow faster.
                </p>
                
                <p>
                  <strong className="text-gray-900 font-bold">YOU ASK WE DELIVER.</strong> Where ideas meet impact. From startups to unicorn, we help you stand out with insight-driven marketing, purposeful storytelling, and measurable results.
                </p>
                
                <p>
                  We&apos;re not just here to post—we&apos;re here to <strong className="text-gray-900 font-bold">position, to connect, to convert</strong>. Powered by creativity and guided by data, we deliver results that speak for themselves.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Learn More About Us
                </button>
              </div>
            </div>
          </BlurFade>

          {/* Right Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                  <div className={`${
                    idx === 0 ? 'col-span-2 h-48' : 
                    idx === 1 ? 'h-56' : 
                    idx === 2 ? 'h-40' : 
                    'h-52'
                  } rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <Image
                      src={img.src}
                      alt={`Startup team ${idx + 1}`}
                      width={img.width}
                      height={img.height}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;