import Hero from "../sections/Hero";
import Section from "../sections/Section";
import Services from "@/sections/Services";
import MarqueeDemo from "@/sections/review";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      <Services />
      <MarqueeDemo />
    </div>
  );
}