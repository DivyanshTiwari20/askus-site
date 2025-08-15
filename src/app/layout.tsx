import type { Metadata } from "next";
import "./globals.css";
import CursorAura from "@/components/CursorAura";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Askus | Web Development, Marketing & Social Media Services for Startups",
  description:
    "Askus is a dynamic startup agency specializing in web development, digital marketing, and social media marketing services tailored for innovative startups. Think Digital. Think Bold.",
  keywords:
    "web development, digital marketing, social media marketing, startup agency, web services, marketing for startups, startup marketing, web design, SEO services, content marketing",
  authors: [{ name: "Askus Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico", // This will correctly use the favicon from the public folder
  },
  openGraph: {
    title: "Askus | Web Development, Marketing & Social Media Services for Startups",
    description:
      "Askus is a dynamic startup agency specializing in web development, digital marketing, and social media marketing services tailored for innovative startups. Think Digital. Think Bold.",
    url: "https://askus.co.in/", // Replace with your actual domain
    siteName: "Askus",
    images: [
      {
        url: "/og-image.jpg", // Add an optimized OG image (1200x630 recommended) to your public folder
        width: 1200,
        height: 630,
        alt: "Askus - Think Digital. Think Bold.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Askus | Web Development, Marketing & Social Media Services for Startups",
    description:
      "Askus is a dynamic startup agency specializing in web development, digital marketing, and social media marketing services tailored for innovative startups. Think Digital. Think Bold.",
    images: ["/twitter-image.jpg"], // Add a Twitter-optimized image (1200x675 recommended) to your public folder
    creator: "@askus", // Replace with your actual Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CursorAura />
        {children}
        <Analytics />
      </body>
    </html>
  );
}