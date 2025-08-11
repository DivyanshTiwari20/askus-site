import type { Metadata } from "next ";
import "./globals.css";
import CursorAura from "@/components/CursorAura";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Askus | Think Digital. Think Bold.",
  description: "Think Digital. Think Bold.",
  icons: {
    icon: "/favicon.ico", // This will correctly use the favicon from the public folder
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
