"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingModal } from "@/components/booking-modal";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { 
  Shield, 
  FileText, 
  CreditCard, 
  Key, 
  UserCheck, 
  Copyright,
  ChevronRight,
  Info
} from "lucide-react";

const sections = [
  { id: "privacy", title: "Privacy Policy", icon: Shield },
  { id: "terms", title: "Terms & Conditions", icon: FileText },
  { id: "refund", title: "Refund Policy", icon: CreditCard },
  { id: "usage", title: "Usage Rights & Licensing", icon: Key },
  { id: "ownership", title: "Content Ownership", icon: Copyright },
  { id: "responsibilities", title: "Client Responsibilities", icon: UserCheck },
];

export default function PoliciesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer for highlighting active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -20% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="bg-[#fcfaf6] min-h-screen selection:bg-orange-500/20">
        {/* Progress Bar (Brand Orange) */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 z-[1001]" 
          style={{ scaleX, transformOrigin: "0%" }}
        />

        {/* ── Hero Section ── */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-[#ebdaca] pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,112,32,0.03),transparent_60%)]" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-6">
                <Info size={14} className="text-orange-500" />
                <span className="text-orange-900 text-[0.65rem] font-bold uppercase tracking-widest">Transparency Report</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#1a1512] mb-6 tracking-tighter uppercase leading-[0.9]">
                Legal <span className="text-orange-500">&</span> Terms
              </h1>
              <p className="text-lg md:text-xl text-[#1a151299] max-w-2xl mx-auto font-medium tracking-wide">
                Built on transparency, anchored in trust. Our premium framework for professional collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 relative">
          
          {/* ── Sticky Sidebar ── */}
          <aside className="lg:col-span-3 lg:sticky lg:top-32 h-fit hidden lg:block">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group ${
                    activeSection === section.id 
                    ? "bg-orange-500/10 border border-orange-500/20 text-orange-600" 
                    : "text-[#1a151266] hover:text-[#1a1512] hover:bg-orange-500/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon size={18} className={activeSection === section.id ? "text-orange-500" : "text-[#1a151222]"} />
                    <span className="text-sm font-bold uppercase tracking-widest">{section.title}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${activeSection === section.id ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"}`} />
                </button>
              ))}
            </nav>
            <div className="mt-12 p-6 rounded-3xl bg-white border border-[#ebdaca] shadow-sm">
              <p className="text-[0.65rem] font-bold text-orange-900/40 uppercase tracking-[0.3em] mb-4">Supportdesk</p>
              <a href="mailto:info@growwithadency.com" className="text-xs font-bold text-[#1a1512] hover:text-orange-500 transition-colors block mb-2 underline decoration-orange-500/20 underline-offset-4">info@growwithadency.com</a>
              <p className="text-[0.6rem] text-[#1a151244] leading-relaxed font-medium mt-4">
                Available for clarification on global usage rights and cross-platform licensing queries.
              </p>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Privacy Section */}
            <section id="privacy" className="scroll-mt-32">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Shield size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Privacy Policy</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed prose prose-orange">
                    <p className="text-lg text-[#1a1512cc]">Transparency in how we handle your brand data is our top priority. We only collect what's necessary to deliver elite content.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-6 rounded-2xl bg-[#fcfaf6] border border-[#ebdaca]/60">
                          <h3 className="text-orange-500 font-bold mb-3 uppercase tracking-wider text-sm">Data Acquisition</h3>
                          <ul className="space-y-3 bullet-list text-sm">
                            <li>Form submissions & basic contact info</li>
                            <li>Browser data for optimized performance</li>
                            <li>Public social media handle verification</li>
                          </ul>
                       </div>
                       <div className="p-6 rounded-2xl bg-[#fcfaf6] border border-[#ebdaca]/60">
                          <h3 className="text-orange-500 font-bold mb-3 uppercase tracking-wider text-sm">Retention & Security</h3>
                          <ul className="space-y-3 bullet-list text-sm">
                            <li>AES-256 encrypted storage protocols</li>
                            <li>Strict 6-month clearout for inactive data</li>
                            <li>Zero third-party data trading policy</li>
                          </ul>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Terms Section */}
            <section id="terms" className="scroll-mt-32">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Terms & Conditions</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed">
                    <p className="text-lg text-[#1a1512cc]">Standard project terms ensuring smooth execution and mutual accountability across all ad creatives and web projects.</p>
                    <div className="space-y-6">
                       <div className="flex gap-4">
                          <div className="w-1 h-auto bg-orange-500 rounded-full" />
                          <div>
                            <h4 className="text-[#1a1512] font-bold mb-1">Service Execution</h4>
                            <p className="text-sm">Timelines begin only after all branding core assets are provided by the client. Delays in provision impact global delivery dates.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-1 h-auto bg-orange-500 rounded-full" />
                          <div>
                            <h4 className="text-[#1a1512] font-bold mb-1">Ad Account Guidelines</h4>
                            <p className="text-sm">For Meta and Google Ads, clients must maintain compliant accounts. Adency is not liable for platform-side rejections.</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Policy */}
            <section id="refund" className="scroll-mt-32">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CreditCard size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Refund Policy</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed">
                    <p className="text-lg text-[#1a1512cc]">A clear, trust-first approach to project cancellations and service performance.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="p-6 rounded-[24px] bg-[#fcfaf6] border border-[#ebdaca]/60">
                          <h4 className="text-[#1a1512] font-bold mb-3 uppercase tracking-tighter text-sm">Project-Based</h4>
                          <p className="text-xs">No refunds after first draft delivery. All post-production refinements are included.</p>
                       </div>
                       <div className="p-6 rounded-[24px] bg-[#fcfaf6] border border-[#ebdaca]/60">
                          <h4 className="text-[#1a1512] font-bold mb-3 uppercase tracking-tighter text-sm">Retainer-Based</h4>
                          <p className="text-xs">7-day notice required. Refund pro-rated based on unutilized management days.</p>
                       </div>
                       <div className="p-6 rounded-[24px] bg-[#fcfaf6] border border-[#ebdaca]/60">
                          <h4 className="text-[#1a1512] font-bold mb-3 uppercase tracking-tighter text-sm">Force Majeure</h4>
                          <p className="text-xs">100% refund if Adency cannot commence project due to internal catastrophic delay.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Rights */}
            <section id="usage" className="scroll-mt-32">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Key size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Usage Rights</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed">
                    <p className="text-lg text-[#1a1512cc]">Defining how you can use the creative assets we produce across various global platforms.</p>
                    <ul className="space-y-6">
                      <li className="flex gap-4 items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(240,112,32,0.3)]" />
                        <p><strong className="text-[#1a1512]">Commercial License:</strong> 1-year unlimited social media usage included standard. Global TVC placement requires separate licensing.</p>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(240,112,32,0.3)]" />
                        <p><strong className="text-[#1a1512]">Music Clearence:</strong> All production music is licensed specifically for social-first platforms (IG, TT, FB).</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Ownership */}
            <section id="ownership" className="scroll-mt-32">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Copyright size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Content Ownership</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed">
                    <p className="text-lg text-[#1a1512cc]">Intellectual property transfer protocols upon project milestone completion.</p>
                    <div className="p-8 rounded-[32px] bg-orange-500/5 border border-orange-500/10">
                       <p className="text-sm italic">"All creative assets produced by Adency remain the property of the agency until the final invoice is cleared. Upon payment, full economic rights transfer to the client, with Adency retaining only the right for portfolio display."</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Responsibilities */}
            <section id="responsibilities" className="scroll-mt-32 pb-40">
              <div className="bg-white border border-[#ebdaca] p-8 md:p-14 rounded-[40px] shadow-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <UserCheck size={120} className="text-orange-500" />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-black text-[#1a1512] uppercase tracking-tight mb-8">Client Responsibilities</h2>
                  <div className="space-y-8 text-[#1a151299] font-medium leading-relaxed">
                    <p className="text-lg text-[#1a1512cc]">Ensuring a smooth production cycle through active participation and asset hygiene.</p>
                    <div className="flex flex-col gap-4">
                       {[
                         "Timely feedback within 48 hours of draft delivery",
                         "Provision of high-res branding materials (SVG/PNG)",
                         "Access to relevant Meta/Shopify dashboards if required",
                         "Adherence to platform-side compliance guidelines"
                       ].map((item, index) => (
                         <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-[#fcfaf6] border border-[#ebdaca]/60 transition-colors hover:border-orange-500/30 group">
                            <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-xs">{index + 1}</div>
                            <span className="text-sm font-bold text-[#1a151299] group-hover:text-[#1a1512] transition-colors">{item}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* ── Contact Bar ── */}
        <section className="py-32 px-6 relative overflow-hidden bg-white border-t border-[#ebdaca]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(240,112,32,0.05),transparent_60%)]" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-8 p-3 rounded-full bg-orange-500/5 backdrop-blur-sm border border-orange-500/10">
               <Info size={16} className="text-orange-500" />
               <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-orange-900/60">Policy Update Channel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1512] uppercase mb-8 tracking-tighter">Need a Custom License?</h2>
            <p className="text-[#1a151266] max-w-xl mx-auto mb-10 font-medium leading-relaxed text-lg">For broad-scale broadcasting, global VOD, or unique intellectual property buyouts, contact our legal desk directly.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="mailto:info@growwithadency.com" className="px-10 py-5 rounded-2xl bg-[#f07020] text-white font-black text-sm hover:scale-105 transition-transform shadow-xl shadow-orange-500/20">MESSAGE US</a>
               <a href="tel:+919256459588" className="px-10 py-5 rounded-2xl bg-white text-[#1a1512] border border-[#ebdaca] font-black text-sm hover:bg-orange-500/5 transition-colors">CALL SUPPORT</a>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <FloatingWhatsApp />

      <AnimatePresence>
        {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <style jsx global>{`
        .bullet-list li {
          position: relative;
          padding-left: 20px;
        }
        .bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #f07020;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
