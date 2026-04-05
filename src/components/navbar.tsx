"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavbarProps = {
  onOpenModal: () => void;
  variant?: "default" | "dark"; // dark variant = for light pages, default = for home/dark pages
};

export function Navbar({ onOpenModal, variant = "default" }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = pathname === "/";
  const shouldBeGlass = !isHome || scrolled;
  const glassEffect = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 100);
      
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] flex items-center justify-center transition-all duration-500 ease-in-out h-20 ${
          shouldBeGlass ? "bg-[#ffffffa6] backdrop-blur-xl border-b border-orange-500/10 shadow-sm" : "bg-transparent"
        } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="w-full max-w-7xl px-7 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
            <Image src="/assets/logo.png" alt="ADENCY" width={110} height={110} className="site-nav-logo-img drop-shadow-sm transition-all duration-300 group-hover:scale-105 h-auto w-auto max-h-24 object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-[0.9rem] font-bold uppercase tracking-widest items-center">
            <Link 
              href="/plans" 
              className={`no-underline hover:text-orange-500 transition-all duration-300 drop-shadow-sm ${
                shouldBeGlass ? "text-[#1a1512]" : "text-white"
              }`}
            >
              Plans
            </Link>
            <a 
              href="/#portfolio" 
              className={`no-underline hover:text-orange-500 transition-all duration-300 drop-shadow-sm ${
                shouldBeGlass ? "text-[#1a1512]" : "text-white"
              }`}
            >
              Portfolio
            </a>
            <Link 
              href="/plans"
              className={`px-7 py-2.5 rounded-full font-black transition-all hover:scale-105 active:scale-95 text-xs tracking-widest uppercase no-underline shadow-lg ${
                shouldBeGlass 
                ? "bg-[#f07020] text-white shadow-orange-500/20" 
                : "bg-white text-[#1a1512] hover:bg-white/90"
              }`}
            >
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden relative z-[120] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all ${isMenuOpen ? "rotate-90" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 transition-all ${shouldBeGlass || isMenuOpen ? "bg-[#1a1512]" : "bg-white"} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 transition-all ${shouldBeGlass || isMenuOpen ? "bg-[#1a1512]" : "bg-white"} ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 transition-all ${shouldBeGlass || isMenuOpen ? "bg-[#1a1512]" : "bg-white"} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay md:hidden ${isMenuOpen ? "mobile-nav-overlay--open" : ""}`}>
        <Link 
          href="/plans" 
          className="mobile-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Plans
        </Link>
        <a 
          href="/#portfolio" 
          className="mobile-nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Portfolio
        </a>
        <Link 
          href="/plans"
          className="mt-4 px-10 py-4 bg-[#f07020] text-white rounded-full font-black text-sm tracking-widest uppercase no-underline shadow-xl shadow-orange-500/30"
          onClick={() => setIsMenuOpen(false)}
        >
          Start Project
        </Link>
      </div>
    </>
  );
}
