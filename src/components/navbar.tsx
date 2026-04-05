"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavbarProps = {
  onOpenModal: () => void;
};

export function Navbar({ onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = pathname === "/";
  const shouldBeGlass = !isHome || scrolled;

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
        shouldBeGlass ? "bg-[#ffffffa6] backdrop-blur-xl border-b border-orange-500/10 shadow-sm" : "bg-transparent"
      } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full max-w-7xl px-7 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <Image
            src="/assets/logo.png"
            alt="ADENCY Logo"
            width={42}
            height={42}
            className="site-nav-logo-img drop-shadow-md transition-transform group-hover:scale-110"
            priority
          />
          <span className={`font-bebas text-3xl tracking-widest transition-colors duration-400 ${shouldBeGlass ? "text-[#1a1512]" : "text-white"}`}>
            ADENCY
          </span>
        </Link>

        <nav className="flex gap-8 text-[0.85rem] font-bold uppercase tracking-widest items-center">
          <Link href="/plans" className={`no-underline hover:text-orange-500 transition-colors ${shouldBeGlass ? "text-[#1a1512]" : "text-white drop-shadow-md"}`}>
            Plans
          </Link>
          <a href="/#portfolio" className={`no-underline hover:text-orange-500 transition-colors ${shouldBeGlass ? "text-[#1a1512]" : "text-white drop-shadow-md"}`}>
            Portfolio
          </a>
          <Link 
            href="/plans"
            className={`px-6 py-2.5 rounded-full font-black transition-all hover:scale-105 active:scale-95 text-xs tracking-wider uppercase no-underline ${
              shouldBeGlass ? "bg-[#f07020] text-white shadow-lg shadow-orange-500/20" : "bg-white/20 text-white backdrop-blur-md border border-white/40 hover:bg-white/30 drop-shadow-sm"
            }`}
          >
            Start Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
