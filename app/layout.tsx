import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1600, height: 2000, alt: "Mansur Work & Travel Journal" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrument.variable}`}>
      <body id="top">
        <MotionConfig reducedMotion="user"><Header />{children}<Footer /></MotionConfig>
      </body>
    </html>
  );
}
