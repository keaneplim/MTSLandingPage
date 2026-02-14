import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mitra Trans Perkasa (MTS) | Logistics & Warehousing Medan",
  description: "MTS provides premium logistics and industrial warehousing services in Kawasan Industri Medan (KIM) II. Built on trust, driven by precision.",
  keywords: ["Logistics Medan", "Warehousing Indonesia", "KIM II", "Trucking Sumatra", "Mitra Trans Perkasa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
