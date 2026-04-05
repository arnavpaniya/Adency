"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroNavbar({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[120] flex items-center justify-center h-28 bg-transparent"
    >
      <div className="w-full max-w-7xl px-7 flex justify-between items-center">
        {/* Branding (Integrated Monumental Logo) */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/assets/logo.png" 
            alt="ADENCY" 
            width={100} 
            height={100} 
            className="site-nav-logo-img drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-105 h-auto w-auto max-h-20 object-contain" 
            priority 
          />
        </Link>

        {/* High-Contrast Nav Links (White Only) */}
        <nav className="hidden md:flex gap-10 text-[1rem] font-black uppercase tracking-[0.2em] items-center">
          <Link 
            href="/plans" 
            className="text-white hover:text-orange-500 transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] no-underline"
          >
            Plans
          </Link>
          <a 
            href="/#portfolio" 
            className="text-white hover:text-orange-500 transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] no-underline"
          >
            Portfolio
          </a>
          
          <Link 
            href="/plans"
            className="px-8 py-3 rounded-full bg-white text-[#1a1512] font-black text-xs tracking-widest uppercase no-underline shadow-2xl hover:bg-white/90 transition-all hover:scale-110 active:scale-95"
          >
            Start Project
          </Link>
        </nav>

        {/* Mobile Spacer (for uniformity) */}
        <div className="md:hidden" />
      </div>
    </motion.header>
  );
}
