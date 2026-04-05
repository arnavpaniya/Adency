"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portfolio from "../components/portfolio";
import CameraShowcase from "../components/camera-showcase";
import Testimonials from "../components/testimonials";
import Preloader from "../components/preloader";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Plans } from "../components/plans";
import { BookingModal } from "../components/booking-modal";
import { FloatingWhatsApp } from "../components/floating-whatsapp";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

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
          {/* Decorative Icons (Static, Original Colors) */}
          <div className="decorative-icon top-[15%] right-[10%] opacity-20 scale-150">
            <Image src="/assets/icons/icon1.png" alt="" width={400} height={400} />
          </div>
          <div className="decorative-icon bottom-[10%] left-[5%] opacity-15 scale-[2]">
            <Image src="/assets/icons/icon2.png" alt="" width={500} height={500} />
          </div>

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
              <Link 
                href="/plans"
                className="bg-[#f5a623] hover:bg-[#e09510] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 no-underline"
              >
                Buy Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── USP Section ── */}
        <section className="bg-[#1a1512] py-8 border-y border-white/10 relative overflow-hidden">
          <div className="decorative-icon -left-20 top-1/2 -translate-y-1/2 opacity-20 scale-125">
             <Image src="/assets/icons/icon10.png" alt="" width={300} height={300} />
          </div>
          <div className="decorative-icon -right-20 top-1/2 -translate-y-1/2 opacity-20 scale-125">
             <Image src="/assets/icons/icon8.png" alt="" width={300} height={300} />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
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

        {/* 🎥 Interactive 3D Camera Showcase */}
        <CameraShowcase />

        {/* ── Portfolio ── */}
        <Portfolio />

        {/* ── Plans Section ── */}
        <Plans onOpenModal={() => setIsModalOpen(true)} />

        {/* ── Testimonials ── */}
        <section className="relative overflow-hidden">
          <div className="decorative-icon top-[10%] -left-32 opacity-[0.12] scale-[1.8]">
             <Image src="/assets/icons/icon7.png" alt="" width={400} height={400} />
          </div>
          <Testimonials />
        </section>

        {/* ── Final CTA Section ── */}
        <section className="py-24 px-6 bg-white relative overflow-hidden">
          <div className="decorative-icon -right-32 bottom-[10%] opacity-20 scale-[1.5]">
             <Image src="/assets/icons/icon4.png" alt="" width={500} height={500} />
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl opacity-50" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 bg-[#fdfaf6] p-12 md:p-16 rounded-[40px] shadow-xl border border-orange-100/50">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1512] mb-6 tracking-tight leading-tight uppercase">Ready to get started?</h2>
            <p className="text-gray-500 mb-10 text-lg md:text-xl font-medium max-w-xl mx-auto">
              Transform your brand presence with high-conversion video content. No upfront payment, zero risk.
            </p>
            
            <Link 
              href="/plans"
              className="inline-block bg-[#f07020] hover:bg-[#d45a10] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 active:scale-95 no-underline"
            >
              PROCEED TO PLANS
            </Link>
            <p className="mt-8 text-[0.65rem] text-gray-400 font-bold uppercase tracking-[0.2em]">Select a plan to initiate your project</p>
          </div>
        </section>

        <Footer />
      </main>

      <FloatingWhatsApp />

      <AnimatePresence>
        {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}