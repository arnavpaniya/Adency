"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glass py-12 px-8 md:py-20 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/assets/logo.png" alt="ADENCY" width={48} height={48} className="site-nav-logo-img drop-shadow-sm transition-transform group-hover:scale-105"/>
              <span className="font-bebas text-4xl tracking-widest text-[#1a1512]">ADENCY</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed font-medium">
              We specialize in high-conversion UGC, brand promos, and cinematic social content. 
              <span className="text-orange-500 font-bold block mt-2">Zero upfront cost. 100% Trust.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/918764756818" target="_blank" className="footer-primary-cta text-center justify-center">
                 <MessageSquare size={18} className="mr-2" /> Start on WhatsApp
              </a>
              <a href="https://www.instagram.com/grow_with_adency" target="_blank" className="footer-secondary-social" aria-label="Instagram">
                 <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                 </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/plans" className="text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">Video Plans</Link></li>
              <li><Link href="/#portfolio" className="text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/#testimonials" className="text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Contact</h3>
            <div className="space-y-5 flex flex-col items-center md:items-start">
              <a href="tel:+919256459588" className="flex items-center gap-3 text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">
                <Phone size={16} /> +91 9256459588
              </a>
              <a href="mailto:info@growwithadency.com" className="flex items-center gap-3 text-sm font-bold text-[#1a151299] hover:text-orange-500 transition-colors">
                <Mail size={16} /> info@growwithadency.com
              </a>
              <div className="flex items-start gap-3 text-sm font-bold text-[#1a151299] leading-relaxed">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>P-88, 2nd floor, Adency office,<br/>Silver Birches, Jaipur, 302015</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-500/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <Link href="/terms" className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 hover:text-orange-500">Terms</Link>
            <Link href="/privacy" className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 hover:text-orange-500">Privacy</Link>
          </div>
          <p className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400">
            © 2026 ADENCY PRODUCTIONS — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
