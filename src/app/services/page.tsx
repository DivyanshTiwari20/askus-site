import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col items-center justify-start pt-24 pb-16">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold font-jakarta text-gray-900 mb-8 text-center mt-5">
            Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-manrope mb-10 text-center max-w-3xl mx-auto">
            We combine cutting-edge strategies, proven expertise, and tailored approaches to drive growth, efficiency &amp; innovation. Every project is a commitment to exceeding expectations—because your success defines ours.
          </p>
          {/* You can add more content about your services here */}
        </div>
      </main>
      <Footer />
    </>
  );
} 