import { BlurFade } from "@/components/magicui/blur-fade";

const Services = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <BlurFade delay={0.25} offset={10}>
            <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              We deliver powerful solution tailored For excellence every time
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.5} offset={8}>
            <p className="font-jakarta text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge strategies, proven expertise, and tailored approaches to drive growth, efficiency & innovation. Every project is a commitment to exceeding expectations—because your success defines ours
            </p>
          </BlurFade>
        </div>

        {/* Services Cards - 4x1 Layout */}
        <BlurFade delay={0.75} offset={12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Service Card 1 - Web Development */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-manrope text-xl font-bold text-gray-900 mb-3">Web Development</h3>
                <p className="font-jakarta text-gray-600 text-sm leading-relaxed">
                  Custom websites and web applications built with modern technologies for optimal performance and user experience.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Social Media Marketing */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4h10m-5 8l-2-2m4 0l-2 2" />
                  </svg>
                </div>
                <h3 className="font-manrope text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
                <p className="font-jakarta text-gray-600 text-sm leading-relaxed">
                  Strategic social media campaigns that build brand awareness, engage audiences, and drive meaningful conversions.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Strategic Marketing */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-green-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-manrope text-xl font-bold text-gray-900 mb-3">Strategic Marketing</h3>
                <p className="font-jakarta text-gray-600 text-sm leading-relaxed">
                  Data-driven marketing strategies that align with your business goals to maximize ROI and sustainable growth.
                </p>
              </div>
            </div>

            {/* Service Card 4 - Brand Innovation */}
            <div className="group relative overflow-hidden bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-orange-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-manrope text-xl font-bold text-gray-900 mb-3">Brand Innovation</h3>
                <p className="font-jakarta text-gray-600 text-sm leading-relaxed">
                  Creative brand solutions and innovative approaches that differentiate your business in competitive markets.
                </p>
              </div>
            </div>

          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Services;