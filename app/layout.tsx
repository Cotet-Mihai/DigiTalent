import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "DigiTalent - Construim Cariere de Succes",
  description: "DigiTalent este mai mult decât un loc de muncă. Împreună construim o carieră de succes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
