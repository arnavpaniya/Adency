"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavbarProps {
  variant?: "transparent" | "glass";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isGlass = variant === "glass" || scrolled;

  return (
    <header className={`site-nav ${isGlass ? "site-nav--glass" : "site-nav--transparent"}`}>
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-brand">
          <Image
            src="/assests/logo.png"
            alt="ADENCY Logo"
            width={28}
            height={28}
            className="site-nav-logo-img"
          />
          <span className="site-nav-logo-text">ADENCY</span>
        </Link>

        <nav className="site-nav-links">
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#plans">Plans</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
