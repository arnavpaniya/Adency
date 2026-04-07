"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

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

  const isHome = pathname === "/" || pathname === null || pathname === "";
  const shouldBeGlass = !isHome || scrolled;

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

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
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
            <Image 
               src="/assets/logo.png" 
               alt="ADENCY" 
               width={110} 
               height={110} 
               className="site-nav-logo-img drop-shadow-sm transition-all duration-300 group-hover:scale-105 h-auto w-auto max-h-24 object-contain" 
               priority 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-[0.9rem] font-bold uppercase tracking-widest items-center">
            <Link 
              href="/plans" 
              className={`no-underline hover:text-orange-500 transition-all duration-300 ${
                shouldBeGlass 
                ? "text-[#1a1512]" 
                : "text-white font-black text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}
            >
              Plans
            </Link>
            <a 
              href="/#portfolio" 
              className={`no-underline hover:text-orange-500 transition-all duration-300 ${
                shouldBeGlass 
                ? "text-[#1a1512]" 
                : "text-white font-black text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
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
            className="md:hidden relative z-[120] p-2 transition-all focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className={shouldBeGlass ? "text-[#1a1512]" : "text-white"} size={32} />
          </button>
        </div>
      </header>

      {/* Modern High-Fidelity Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#0a0704]/85 backdrop-blur-md z-[1000] md:hidden cursor-pointer"
            />

            {/* Sidebar Drawer Implementation */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[380px] bg-[#fdfaf6] z-[1010] shadow-2xl flex flex-col p-10 md:hidden"
            >
              {/* Drawer Header with Dedicated Close Button */}
              <div className="flex justify-between items-center mb-16">
                 <Link href="/" onClick={() => setIsMenuOpen(false)}>
                   <Image 
                    src="/assets/logo.png" 
                    alt="ADENCY" 
                    width={90} 
                    height={90} 
                    className="object-contain h-auto w-auto max-h-16" 
                  />
                 </Link>
                 <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#1a1512] hover:bg-orange-100 transition-all active:scale-90"
                  aria-label="Close Menu"
                >
                  <X size={26} strokeWidth={2.5} />
                </button>
              </div>

              {/* Navigation Sidebar Links */}
              <div className="flex flex-col gap-10">
                <motion.div 
                   initial={{ opacity: 0, x: -30 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <Link 
                    href="/plans" 
                    className="text-4xl text-[#1a1512] font-[900] uppercase tracking-tighter no-underline hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Plans
                  </Link>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: -30 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <a 
                    href="/#portfolio" 
                    className="text-4xl text-[#1a1512] font-[900] uppercase tracking-tighter no-underline hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </a>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, y: 30 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   transition={{ delay: 0.3, duration: 0.4 }}
                   className="mt-14"
                >
                  <Link 
                    href="/plans"
                    className="block w-full py-5 bg-[#f07020] text-white rounded-[24px] font-[900] text-sm tracking-[0.25em] uppercase text-center no-underline shadow-2xl shadow-orange-500/30 active:scale-95 transition-transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Start Project
                  </Link>
                  <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
                    <div className="h-[1px] flex-1 bg-black" />
                    <span className="text-[0.6rem] font-black tracking-[0.4em] uppercase">ADENCY</span>
                    <div className="h-[1px] flex-1 bg-black" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Drawer Element */}
              <div className="mt-auto opacity-[0.04] pointer-events-none -ml-12">
                 <Image src="/assets/icons/icon10.png" alt="" width={250} height={250} className="-rotate-12" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
