"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from "../components/portfolio";
import Testimonials from "../components/testimonials";
import Preloader from "../components/preloader";
import { Navbar } from "../components/navbar";
import { Plans } from "../components/plans";
import { BookingModal } from "../components/booking-modal";
import { FloatingWhatsApp } from "../components/floating-whatsapp";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="bg-[#fdfaf6]">
        {/* ── Hero Section ── */}
        <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
          {/* Background Image with Zoom animation */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/team.png"
                alt="ADENCY creative team"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </motion.div>

          {/* Dark Gradient Overlay for Premium Feel */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0704]/90 via-[#0a0704]/60 to-[#0a0704]/40" />

          <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-100 text-sm font-semibold tracking-wide uppercase">Starting from ₹2000</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Professional Video Production for Your Brand.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light"
            >
              High-quality content that converts viewers into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#f5a623] hover:bg-[#e09510] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                Buy Now
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── USP Section ── */}
        <section className="bg-[#1a1512] py-8 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 text-orange-400"
            >
              <ShieldCheck size={32} className="shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                Get your video first. <span className="text-white">Pay only after final delivery.</span>
              </h2>
            </motion.div>
          </div>
        </section>

        {/* ── Portfolio ── */}
        <Portfolio />

        {/* ── Plans ── */}
        <Plans onOpenModal={() => setIsModalOpen(true)} />

        {/* ── Testimonials ── */}
        <Testimonials />

        {/* ── Fallback CTA / Form Section ── */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#fdfaf6] p-12 rounded-[40px] shadow-xl border border-[#ebdaca]">
            <h2 className="text-4xl font-bold text-[#1a1512] mb-4">Ready to elevate your brand?</h2>
            <p className="text-[#643f22] mb-8 text-lg">Start your project today. No upfront payment required.</p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#f5a623] hover:bg-[#e09510] text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1"
            >
              Start your project today
            </button>
            <p className="mt-4 text-xs text-gray-500 font-medium">Clicking opens our quick booking form</p>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer id="contact" className="bg-[#1a1512] text-white pt-20 pb-10 px-6 rounded-t-[40px] mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <Image src="/assets/logo.png" alt="ADENCY" width={32} height={32} className="opacity-90"/>
                  <span className="font-bebas text-2xl tracking-widest">ADENCY</span>
                </div>
                <p className="text-gray-400 max-w-sm mb-6">
                  Trust-driven video production studio. High quality content for brands with a no-risk start.
                </p>
                <a
                  href="https://wa.me/918764756818"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium text-sm"
                >
                  Start on WhatsApp
                </a>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Contact</h3>
                <ul className="space-y-4 text-gray-300 text-sm">
                  <li><a href="tel:+919256459588" className="hover:text-orange-400 transition-colors">+91 9256459588</a></li>
                  <li><a href="mailto:info@growwithadency.com" className="hover:text-orange-400 transition-colors">info@growwithadency.com</a></li>
                  <li>Mon–Sat, 11AM – 07PM</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">Address</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  P-88, 2nd floor, Adency office,<br />
                  Silver Birches, Jaipur,<br />
                  Rajasthan – 302015
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
              <p>ADENCY builds UGC, brand promos, and social content that converts.</p>
              <p>© 2026 ADENCY. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>

      <FloatingWhatsApp />

      <AnimatePresence>
        {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}