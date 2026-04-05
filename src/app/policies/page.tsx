"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ShieldCheck, Scale, FileText, Info } from "lucide-react";

export default function PoliciesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="bg-[#fcfaf6] overflow-hidden pt-20">
        {/* ── Hero Section ── */}
        <section className="relative py-24 px-6 overflow-hidden">
          {/* Decorative Icon 11 - Large Watermark */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -right-20 top-0 pointer-events-none z-0"
          >
            <Image src="/assets/icons/icon11.png" alt="" width={600} height={600} className="filter grayscale brightness-50" />
          </motion.div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-6"
            >
              <Scale size={16} className="text-orange-500" />
              <span className="text-orange-900 text-xs font-bold uppercase tracking-widest">Legal & Transparency</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1512] mb-6 tracking-tight leading-none uppercase">
              Adency <span className="text-orange-500">Policies</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              Our commitment to transparency, data protection, and professional excellence.
            </p>
          </div>
        </section>

        {/* ── Policies Content ── */}
        <div className="max-w-4xl mx-auto px-6 pb-24 relative">
          {/* Privacy Section */}
          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-[#ebdaca] shadow-sm mb-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#1a1512] m-0 uppercase tracking-tight">Privacy Policy</h2>
            </div>
            
            <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed prose prose-orange">
              <p>Our website address is: <a href="https://adency.vercel.app" className="text-orange-500 underline">http://adency.vercel.app</a>. We prioritize your data safety and transparency.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1a1512]">Data Collection</h3>
                  <p>When visitors leave comments or submit forms, we collect the provided data, IP address, and browser agent string for spam detection.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#1a1512]">Cookies</h3>
                  <p>We use cookies to improve your experience and remember your preferences. Login cookies last for two days, while preference cookies can last up to a year.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a1512] mb-2">Rights & Retention</h3>
                <p>You may request an exported file of your personal data or its erasure, barring data we are legally obliged to keep for administrative or security reasons.</p>
              </div>
            </div>
          </div>

          {/* Icon11 Separator */}
          <div className="flex justify-center py-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="opacity-20 flex flex-col items-center gap-4"
            >
              <Image src="/assets/icons/icon11.png" alt="" width={100} height={100} />
              <div className="w-px h-24 bg-gradient-to-b from-orange-500 to-transparent" />
            </motion.div>
          </div>

          {/* Terms Section */}
          <div className="bg-[#1a1512] text-white/90 rounded-[40px] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shallow-orange-500/20">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-black text-white m-0 uppercase tracking-tight">Terms & Conditions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-medium leading-relaxed">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-extrabold text-orange-500 uppercase tracking-wider mb-3">Service Scope</h3>
                  <p>Specializing in Meta Ads, Web Development, Creatives, and Social Strategy. Project timelines depend on prompt material provision.</p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-orange-500 uppercase tracking-wider mb-3">Payment Model</h3>
                  <p className="border-l-2 border-orange-500 pl-4 py-1 italic bg-white/5">
                    Project-based video production typically follows a "Pay After Delivery" model. Recurring services require advanced payment.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-extrabold text-orange-500 uppercase tracking-wider mb-3">IP Rights</h3>
                  <p>Final deliverable rights transfer to strictly upon full payment clearance. Unauthorized resale is prohibited.</p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-orange-500 uppercase tracking-wider mb-3">Policy Amendments</h3>
                  <p>Adency reserves the right to update these terms. Significant changes will be notified via our primary contact channels.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Icon11 Final Placement at Bottom */}
          <div className="mt-24 flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-500/20 blur-[80px] -z-10 rounded-full" />
              <Image src="/assets/icons/icon11.png" alt="Adency Brand Mark" width={200} height={200} className="filter grayscale brightness-125 hover:grayscale-0 transition-all duration-700 cursor-pointer" />
            </motion.div>
            <p className="font-bebas text-2xl tracking-[0.3em] text-[#1a151244]">ADENCY PRODUCTIONS</p>
          </div>
        </div>

        {/* ── Contact Bar ── */}
        <section className="py-20 px-6 bg-[#fcfaf6]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 p-10 border border-[#ebdaca] rounded-[32px] bg-white shadow-sm">
            <div>
              <h4 className="text-xl font-black text-[#1a1512] uppercase mb-2">Questions regarding policies?</h4>
              <p className="text-sm text-gray-500 font-medium">Reach out to our support team directly.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <a href="mailto:info@growwithadency.com" className="px-8 py-3 rounded-full bg-[#1a1512] text-white font-bold text-sm hover:scale-105 transition-all">Email Us</a>
               <a href="tel:+919256459588" className="px-8 py-3 rounded-full border border-[#ebdaca] text-[#1a1512] font-bold text-sm hover:bg-orange-500/5 transition-all">Support Call</a>
            </div>
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
