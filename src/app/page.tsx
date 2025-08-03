import Hero from "../sections/Hero";
import Section from "../sections/Section";
// import Services from "@/sections/Services";
import MarqueeDemo from "@/sections/review";
import ValuesAndFooter from "@/sections/values";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Section /> 
      {/* <Services /> */}
      <MarqueeDemo />
      <ValuesAndFooter/>
      <Footer />
    </div>
  );
}