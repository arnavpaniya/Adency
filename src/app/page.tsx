"use client";

import Image from "next/image";
import Link from "next/link";
import PreloaderOverlay from "./preloader-overlay";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";

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

        <header className="hero-nav">
          <Link href="/" className="hero-brand">
            <Image
              src="/assests/logo.png"
              alt=""
              width={28}
              height={28}
              className="hero-brand-icon"
            />
            <span className="hero-brand-text">ADENCY</span>
          </Link>

          <nav className="hero-nav-links">
            <a href="#plans">Plans</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

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
      <footer id="contact" className="site-footer">
        <div className="footer-aura" />
        <div className="footer-glass">
          
          <div className="footer-top">
            <div>
              <p className="footer-eyebrow">Trust-driven production studio</p>
              <h2 className="footer-title">Let&apos;s shoot something memorable.</h2>
              <p className="footer-copy">
                High quality video content for brands with a no-risk start.
                No upfront payment. Pay only after delivery.
              </p>
            </div>

            <a
              className="footer-primary-cta"
              href="https://wa.me/918764756818"
              target="_blank"
              rel="noreferrer"
            >
              Start on WhatsApp
            </a>
          </div>

          <div className="footer-pill-row">
            <span>Pay Only After Delivery</span>
            <span>Plans Starting at ₹2000</span>
            <span>UGC + Brand Ads + Social Content</span>
          </div>

          <div className="footer-grid">
            <div className="footer-block">
              <h3>Address</h3>
              <p>
                P-88, 2nd floor, Adency office,<br />
                Silver Birches, Jaipur,<br />
                Rajasthan – 302015
              </p>
            </div>

            <div className="footer-block">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-block">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+919256459588">+91 9256459588</a></li>
                <li><a href="mailto:info@growwithadency.com">info@growwithadency.com</a></li>
                <li>Mon–Sat, 11AM – 07PM</li>
              </ul>
            </div>

            <div className="footer-block">
              <h3>Social</h3>
              <ul>
                <li><a href="https://www.instagram.com/grow_with_adency" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>ADENCY builds UGC, brand promos, and social content that converts.</p>
            <p>© 2026 ADENCY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}