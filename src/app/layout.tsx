import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";
import { Providers } from "@/components/providers";
import { CustomCursor } from "@/components/custom-cursor";
import { GlobalPreloader } from "@/components/global-preloader";
import FacebookPixel from "@/components/facebook-pixel";

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
          <FacebookPixel />
          <Suspense fallback={null}>
            <GlobalPreloader />
          </Suspense>
          <CustomCursor />
          {children}
        </Providers>

        {/* ── Meta Pixel Base Code (ID: 2359391261202930) ── */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2359391261202930');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2359391261202930&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* ── Model Viewer CDN ── */}
        <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.2.0/model-viewer.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
