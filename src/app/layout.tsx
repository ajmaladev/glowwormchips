import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost, Inter, Josefin_Sans, Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import NavBar from "@/components/MainSections/NavBar";
import { Footer } from "@/components/MainSections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

// Add Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Add Josefin Sans font
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

// Add Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Glow Worm Chips",
  description: "Discover delicious, crunchy snacks at Glow Worm Chips. Your one-stop shop for tasty chips, crispy treats, and mouthwatering snacks delivered to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${inter.variable} ${josefinSans.variable} ${montserrat.variable} antialiased bg-white`}
      >
        <NextTopLoader
          color="#2299DD"
          height={4}
          easing="ease"
          template='<div class="bar" role="bar"><div class="peg"></div></div> '
        />
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
