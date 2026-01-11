import React from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "M4 Tailoring - Master Tailoring & Embroidery",
  description: "Expert custom tailoring and embroidery services. Crafting excellence stitch by stitch.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
