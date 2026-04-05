import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import { CustomCursor } from "../components/custom-cursor";

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
    >
      <body className="min-h-full flex flex-col relative">
        <Providers>
          <CustomCursor />
          {children}
        </Providers>
      </body>
    </html>
  );
}
