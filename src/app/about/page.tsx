'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Users, TrendingUp, Award, Eye, MessageCircle, Target, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

// Animated number counter
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
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
    {
      title: "Create your brand voice and look",
      description: "Develop a unique brand identity that resonates with your audience",
      icon: Palette
    },
    {
      title: "Help you stand out from others",
      description: "Differentiate your brand in a crowded marketplace",
      icon: Eye
    },
    {
      title: "Build clear messaging",
      description: "Craft compelling messages that convert prospects to customers",
      icon: MessageCircle
    },
    {
      title: "Make a full brand guide",
      description: "Comprehensive guidelines to maintain brand consistency",
      icon: Target
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          
          {/* Hero Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Think Digital.
              <br />
              <span className="text-gray-800">Think Bold.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let your digital vision transform into reality
            </motion.p>
          </motion.div> */}

          {/* Stats Section */}
          {/* <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:bg-white/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                  We're <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ask Us</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're a team that blends strategy, design, content, and performance to build brands that move fast and grow faster.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-blue-600">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    YOU ASK WE DELIVER
                  </div>
                  <p className="text-gray-700 text-sm">
                    Our commitment to excellence in every project
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Where ideas meet impact. From startups to legacy brands, we help you stand out with insight-driven marketing, purposeful storytelling, and measurable results.
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  We're not just here to post—we're here to <strong className="text-blue-600">position</strong>, to <strong className="text-blue-600">connect</strong>, to <strong className="text-blue-600">convert</strong>. 
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Powered by creativity and guided by data, we deliver results that speak for themselves.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl p-10 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Make an Appointment</h3>
                <div className="flex items-center space-x-4 mb-8">
                  <Phone className="w-6 h-6" />
                  <span className="text-xl font-semibold">+91 80092 27002</span>
                </div>
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Do people remember your brand or forget it after a second?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A brand is more than just a name or logo. It's how people feel about you. We help you create a strong brand that tells your story, builds trust, and stays in people's minds.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">What we do:</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <service.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:text-purple-600 transition-colors duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">Let's create something extraordinary together.</p>
            <motion.button
              className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
}