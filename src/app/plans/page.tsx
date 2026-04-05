"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { BookingModal } from "../../components/booking-modal";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PlansPage() {
  const [category, setCategory] = useState<"indoor" | "outdoor">("indoor");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const PLANS = {
    indoor: [
      {
        id: "asm-indoor",
        name: "ASM — Indoor UGC",
        price: 2000,
        desc: "1 basic UGC video with clean and engaging edits.",
        features: [
          "Fast 48h Turnaround",
          "Optimized for Reels/TikTok",
          "Basic Hook Scripting",
          "1 Revision Included"
        ],
        highlight: false
      },
      {
        id: "csm-indoor",
        name: "CSM — Indoor UGC",
        price: 2500,
        desc: "1 premium UGC video with advanced cinematic editing.",
        features: [
          "Advanced Storytelling POV",
          "Custom Sound Design",
          "Viral hook testing",
          "Motion Graphics Overlays",
          "Optimized for Ad Meta/TikTok"
        ],
        highlight: true
      }
    ],
    outdoor: [
      {
        id: "asm-outdoor",
        name: "ASM — Outdoor / Skit",
        price: 4000,
        desc: "Outdoor shoot with natural lighting and clean edits.",
        features: [
          "Natural Setting Shoot",
          "Professional Grading",
          "Clean Cinematic Flow",
          "Viral Editing Style"
        ],
        highlight: false
      },
      {
        id: "csm-outdoor",
        name: "CSM — Outdoor / Skit",
        price: 4500,
        desc: "Premium outdoor video with creative storytelling.",
        features: [
          "High-Impact Narrative",
          "Advanced Motion Graphics",
          "Drone-like B-Roll Shots",
          "Custom SFX & Background Music",
          "Unlimited Revisions"
        ],
        highlight: true
      }
    ]
  };

  return (
    <div className="bg-[#fcfaf6] min-h-screen relative overflow-hidden flex flex-col">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* ── Background Icons (Static, Original Colors) ── */}
      <div className="decorative-icon top-[10%] -left-20 opacity-20 scale-125">
        <Image src="/assets/icons/icon2.png" alt="" width={600} height={600} />
      </div>
      <div className="decorative-icon top-[40%] -right-40 opacity-15 scale-110">
        <Image src="/assets/icons/icon1.png" alt="" width={700} height={700} />
      </div>
      <div className="decorative-icon top-[65%] -left-32 opacity-15 scale-105">
        <Image src="/assets/icons/icon3.png" alt="" width={500} height={500} />
      </div>

      <main className="relative z-10 pt-36 pb-24 px-6 max-w-7xl mx-auto flex-grow">
        {/* ── Hero Section ── */}
        <section className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 text-orange-600 text-xs font-black tracking-[0.1em] uppercase mb-8 border border-orange-200/50 shadow-sm"
          >
             <ShieldCheck size={16} strokeWidth={3} /> No Upfront Payment — Pay Only After Delivery
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-[#1a1512] tracking-tighter leading-[0.9] mb-8"
          >
            CHOOSE YOUR <br/><span className="text-orange-500">VIDEO PLAN.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            High-conversion content tailored for brands. Differentiated pricing for your unique requirements.
          </motion.p>
        </section>

        {/* ── Category Switcher ── */}
        <div className="flex justify-center mb-20">
          <div className="pricing-toggle-wrap">
            <button 
              onClick={() => setCategory("indoor")}
              className={`pricing-toggle-btn ${category === "indoor" ? "active" : ""}`}
            >
              Indoor UGC
            </button>
            <button 
              onClick={() => setCategory("outdoor")}
              className={`pricing-toggle-btn ${category === "outdoor" ? "active" : ""}`}
            >
              Outdoor / Skit
            </button>
          </div>
        </div>

        {/* ── Pricing Grid ── */}
        <div className="pricing-grid">
          <AnimatePresence mode="wait">
            <motion.div 
              key={category}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="contents"
            >
              {PLANS[category].map((plan) => (
                <div key={plan.id} className={`plan-card ${plan.highlight ? "ring-1 ring-orange-500/30" : ""}`}>
                  {plan.highlight && (
                    <div className="absolute top-8 right-8 bg-orange-500 text-white text-[0.65rem] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                      PREMIUM
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-gray-300">₹</span>
                      <span className="plan-price-large">{plan.price}</span>
                      <span className="text-gray-400 font-bold ml-1">/video</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-3 font-medium">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="space-y-4 mb-10 border-t border-gray-100 pt-8 flex-grow">
                    {plan.features.map(f => (
                      <div key={f} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className="text-orange-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-[#1a1512] font-semibold text-sm leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link 
                      href={`/order?plan=${encodeURIComponent(plan.name)}`}
                      className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 ${
                        plan.highlight 
                          ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20 hover:bg-orange-600" 
                          : "bg-[#1a1512] text-white hover:bg-black hover:shadow-xl shadow-black/10"
                      }`}
                    >
                      <Zap size={16} className={plan.highlight ? "fill-current" : ""} />
                      Buy Now
                    </Link>
                    <p className="text-[0.65rem] text-center mt-4 text-gray-400 font-bold uppercase tracking-widest">
                      Payment will be collected only after delivery.
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Trust Section ── */}
        <section className="mt-40 relative py-20 px-12 rounded-[60px] bg-white border border-gray-100 shadow-sm overflow-hidden text-center">
          <div className="decorative-icon top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 scale-125">
            <Image src="/assets/icons/icon5.png" alt="" width={400} height={400} />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-black text-[#1a1512] mb-12 tracking-tighter uppercase">Our Trust Guarantee</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Trust Section Pillars */}
              {[
                { title: "No Advance", desc: "Start your project without any financial commitment upfront." },
                { title: "Pay After Sync", desc: "Only release payment once you are 100% happy with the video." },
                { title: "Unlimited Edits", desc: "We iterate until the hook, content, and edit are perfect." }
              ].map((item, i) => (
                <div key={item.title} className="space-y-3">
                  <div className="text-orange-500 font-black text-xs tracking-widest uppercase">Pillar {i+1}</div>
                  <h3 className="text-xl font-bold text-[#1a1512]">{item.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="mt-32 relative py-24 rounded-[60px] bg-[#1a1512] text-white text-center overflow-hidden">
          <div className="decorative-icon -bottom-20 -right-20 opacity-20 scale-125">
            <Image src="/assets/icons/icon4.png" alt="" width={500} height={500} />
          </div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="relative z-10 px-6"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">READY TO GET <span className="text-orange-500">STARTED?</span></h2>
            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto font-medium">
              Transform your brand presence with Adency. No risk, just results.
            </p>
            <Link 
              href="/order"
              className="inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full font-black text-xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-105 active:scale-95"
            >
              PROCEED TO ORDER
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
