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
  metadataBase: new URL("https://www.mittransperkasa.com"),
  title: "Mitra Trans Perkasa (MTP) | Logistics & Industrial Transport Medan",
  description: "MTP provides precision logistics, industrial transportation, and warehousing solutions in Kawasan Industri Medan (KIM), North Sumatra. Built on trust, driven by precision.",
  keywords: [
    "Logistics Medan", 
    "Trucking Sumatra", 
    "KIM II Logistics", 
    "Industrial Transport Indonesia", 
    "Warehousing Medan", 
    "Mitra Trans Perkasa", 
    "MTP Medan",
    "Trucking Logistic KIM",
    "mittrans",
    "mittransperkasa",
    "Trucking Medan",
    "Ekspedisi Medan",
    "Sewa Truk Medan",
    "Logistik Kawasan Industri",
    "Medan Logistics Partner"
  ],
  authors: [{ name: "Mitra Trans Perkasa" }],
  openGraph: {
    title: "Mitra Trans Perkasa | Professional Logistics Solutions",
    description: "Precision logistics and industrial transportation from the heart of KIM, Medan.",
    url: "https://www.mittransperkasa.com",
    siteName: "Mitra Trans Perkasa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mitra Trans Perkasa Logistics",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitra Trans Perkasa | Logistics Medan",
    description: "Precision logistics and industrial transportation in Sumatra.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.mittransperkasa.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsBusiness",
    "name": "Mitra Trans Perkasa (MTP)",
    "image": "https://www.mittransperkasa.com/og-image.jpg",
    "@id": "https://www.mittransperkasa.com",
    "url": "https://www.mittransperkasa.com",
    "telephone": "+6261-88811858",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Pulau Natuna-1, Komp. KIM-2 Warehouse No. C-3, Kawasan Industri Medan (KIM) II",
      "addressLocality": "Deli Serdang",
      "addressRegion": "Sumatera Utara",
      "postalCode": "20371",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.6934,
      "longitude": 98.6796
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
