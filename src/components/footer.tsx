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
          <div className="md:col-span-2 flex flex-col items-center text-center space-y-6">
            <Link href="/" className="flex items-center justify-center gap-3 group">
              <Image src="/assets/logo1.png" alt="ADENCY" width={800} height={220} className="site-nav-logo-img drop-shadow-sm transition-transform group-hover:scale-105 h-auto w-full max-w-[500px] max-h-48 object-contain" />
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed font-medium mx-auto">
              We specialize in high-conversion UGC, brand promos, and cinematic social content. 
              <span className="text-orange-500 font-bold block mt-2">Zero upfront cost. 100% Trust.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
              <a href="https://wa.me/919256459588" target="_blank" className="footer-primary-cta text-center justify-center">
                 <MessageSquare size={18} className="mr-2" /> Start on WhatsApp
              </a>
              <a href="https://www.instagram.com/grow_with_adency" target="_blank" className="footer-secondary-social group" aria-label="Instagram">
                 <div className="relative w-6 h-6 transition-transform group-hover:scale-110">
                   <Image src="/assets/instagram.png" alt="Instagram" fill className="object-contain" />
                 </div>
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
            <Link href="/policies" className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400 hover:text-orange-500">Policies</Link>
          </div>
          <p className="text-[0.65rem] font-black uppercase tracking-widest text-gray-400">
            © 2026 ADENCY PRODUCTIONS — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
