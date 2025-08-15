import type { Metadata } from "next";
import Hero from "../sections/Hero";
import Section from "../sections/Section";
// import Services from "../sections/Services";
import MarqueeDemo from "../sections/review";
import Values from "@/sections/Values";

// Define page-specific metadata for SEO
export const metadata: Metadata = { 
  title: "Askus | Premier Startup Agency for Web Development & Digital Marketing",
  description:
    "Discover Askus, your trusted startup agency for innovative web development, digital marketing, and social media marketing solutions. Empower your startup with bold digital strategies.",
  keywords:
    "startup agency, web development for startups, digital marketing services, social media marketing, startup web design, SEO for startups, marketing solutions",
  authors: [{ name: "Askus Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Askus | Premier Startup Agency for Web Development & Digital Marketing",
    description:
      "Discover Askus, your trusted startup agency for innovative web development, digital marketing, and social media marketing solutions. Empower your startup with bold digital strategies.",
    url: "https://askus.co.in", // Replace with your actual domain
    siteName: "Askus",
    images: [
      {
        url: "/og-image-home.jpg", // Add a homepage-specific OG image (1200x630) in your public folder
        width: 1200,
        height: 630,
        alt: "Askus - Startup Web Development & Marketing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Askus | Premier Startup Agency for Web Development & Digital Marketing",
    description:
      "Discover Askus, your trusted startup agency for innovative web development, digital marketing, and social media marketing solutions. Empower your startup with bold digital strategies.",
    images: ["/twitter-image-home.jpg"], // Add a Twitter-optimized image (1200x675) in your public folder
    creator: "@askus", // Replace with your actual Twitter handle
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Section />
      {/* <Services /> */}
      <MarqueeDemo />
      <Values />
    </div>
  );
}