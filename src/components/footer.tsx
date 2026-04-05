"use client";

import Link from "next/link";

export default function Footer() {
  return (
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
              <li><Link href="/#portfolio">Portfolio</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><Link href="/policies">Policies</Link></li>
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
  );
}
