"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  onOpenModal: () => void;
};

export function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      // Hide nav if scrolling down, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out h-20 ${
        scrolled ? "bg-[#fdfaf6a6] backdrop-blur-xl border-b border-white/30 shadow-sm" : "bg-transparent"
      } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full max-w-7xl px-7 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="bg-white/40 backdrop-blur-sm p-1.5 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-white/60 transition-colors">
            <Image
              src="/assets/logo.png"
              alt="ADENCY Logo"
              width={36}
              height={36}
              className="site-nav-logo-img"
              priority
            />
          </div>
          <span className={`font-bebas text-2xl tracking-widest transition-colors duration-400 ${scrolled ? "text-[#1a1512]" : "text-white"}`}>
            ADENCY
          </span>
        </Link>

        <nav className="flex gap-8 text-[0.9rem] font-semibold items-center">
          <a href="#plans" className={`no-underline hover:text-orange-500 transition-colors ${scrolled ? "text-[#1a151299]" : "text-white/80"}`}>
            Plans
          </a>
          <a href="#portfolio" className={`no-underline hover:text-orange-500 transition-colors ${scrolled ? "text-[#1a151299]" : "text-white/80"}`}>
            Portfolio
          </a>
          <button 
            onClick={onOpenModal}
            className={`px-5 py-2 rounded-full font-bold transition-all hover:scale-105 active:scale-95 ${
              scrolled ? "bg-[#f5a623] text-white shadow-lg shadow-orange-500/20" : "bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30"
            }`}
          >
            Start Project
          </button>
        </nav>
      </div>
    </header>
  );
}
