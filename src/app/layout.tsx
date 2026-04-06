import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/providers";
import { CustomCursor } from "@/components/custom-cursor";
import { GlobalPreloader } from "@/components/global-preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ADENCY | Video Content That Converts",
  description:
    "Trust-first video production for brands, with UGC, promo videos, and social content. Pay only after delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative">
        <Providers>
          <Suspense fallback={null}>
            <GlobalPreloader />
          </Suspense>
          <CustomCursor />
          {children}
        </Providers>
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
