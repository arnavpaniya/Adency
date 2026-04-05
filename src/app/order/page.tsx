"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { BookingModal } from "../../components/booking-modal";
import { Send, ShieldCheck, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function OrderForm() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") || "General Inquiry";
  
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    phone: "",
    email: "",
    plan: initialPlan,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappNumber = "918764756818";
    const text = `*New Order Details for ADENCY*%0A%0A*Name:* ${formData.name}%0A*Brand:* ${formData.brandName}%0A*Plan:* ${formData.plan}%0A*Contact:* ${formData.phone} / ${formData.email}%0A*Requirements:* ${formData.message}%0A%0A_Sent from Adency Portal_`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="bg-[#fcfaf6] min-h-screen relative overflow-hidden flex flex-col">
      {/* ── Background Icon (Static, Original Colors) ── */}
      <div className="decorative-icon top-[20%] -right-20 opacity-20 scale-125">
        <Image src="/assets/icons/icon5.png" alt="" width={700} height={700} />
      </div>

      <Navbar onOpenModal={() => {}} />

      <main className="relative z-10 pt-36 pb-24 px-6 flex-grow max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 text-orange-600 text-xs font-black tracking-[0.1em] uppercase mb-8 border border-orange-200/50 shadow-sm">
             <BadgeCheck size={16} strokeWidth={3} /> GET YOUR VIDEO STARTED
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#1a1512] tracking-tighter leading-[0.9] mb-8">
            ORDER <span className="text-orange-500 text-6xl md:text-7xl block md:inline">DETAILS.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
            Tell us about your requirements and we’ll handle the rest. No payment required today.
          </p>
        </motion.div>

        <section className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[40px] p-8 md:p-14 shadow-2xl shadow-orange-900/5">
          {/* Highlighted Selection */}
          <div className="mb-12 p-6 rounded-3xl bg-orange-50 border border-orange-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-[0.65rem] font-black text-orange-500 uppercase tracking-widest">Target Selection</span>
              <h3 className="text-2xl font-black text-[#1a1512] tracking-tight">{formData.plan}</h3>
            </div>
            <div className="px-6 py-3 bg-white rounded-2xl border border-orange-200 shadow-sm">
               <span className="text-orange-600 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck size={14} strokeWidth={3}/> Pay After Delivery
               </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Your Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-[#f3ebe066] border-none rounded-2xl p-5 text-sm font-bold text-[#1a1512] focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Brand Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Acme Corp"
                  className="w-full bg-[#f3ebe066] border-none rounded-2xl p-5 text-sm font-bold text-[#1a1512] focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                  value={formData.brandName}
                  onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-[#f3ebe066] border-none rounded-2xl p-5 text-sm font-bold text-[#1a1512] focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full bg-[#f3ebe066] border-none rounded-2xl p-5 text-sm font-bold text-[#1a1512] focus:ring-2 focus:ring-orange-500/20 transition-all outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-gray-400 ml-2">Project Requirements</label>
              <textarea 
                required
                rows={4}
                placeholder="Briefly describe the style, hooks, or specific details for your video..."
                className="w-full bg-[#f3ebe066] border-none rounded-2xl p-5 text-sm font-bold text-[#1a1512] focus:ring-2 focus:ring-orange-500/20 transition-all outline-none resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95 ${
                isSubmitting ? "bg-orange-600 opacity-80" : "bg-orange-500 hover:bg-orange-600"
              } text-white shadow-orange-500/30`}
              disabled={isSubmitting}
            >
              <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
              {isSubmitting ? "Generating WhatsApp Link..." : "Submit Requirements"}
            </button>
            
            <p className="text-[0.7rem] text-center text-gray-400 font-bold uppercase tracking-widest mt-6">
              No advance payment required. <span className="text-orange-500">Pay only after delivery.</span>
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
