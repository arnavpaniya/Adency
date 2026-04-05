"use client";

import Image from "next/image";
import Link from "next/link";
import PreloaderOverlay from "./preloader-overlay";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="adency-shell">
      <PreloaderOverlay />

      {/* ── Hero ── */}
      <section className="hero-banner">
        <Image
          src="/assests/team.png"
          alt="ADENCY creative team"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />

        <div className="hero-backdrop" />

        <Navbar variant="transparent" />

        <div className="hero-content">
          <p className="hero-kicker">Trust-first video production agency</p>

          <h1 className="hero-title">
            Professional video content for brands that want to convert faster.
          </h1>

          <p className="hero-copy">
            UGC, promo videos, and social content with no upfront payment.
          </p>

          <p className="hero-usp-line">
            <span>Pay Only After Delivery</span>
            <span className="hero-usp-separator">/</span>
            <span>Starting at ₹2000</span>
          </p>

          <div className="hero-actions">
            <a href="#plans" className="hero-button hero-button-primary">
              Explore Plans
            </a>
            <a href="#contact" className="hero-button hero-button-secondary">
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <Portfolio />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}