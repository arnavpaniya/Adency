"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { X } from "lucide-react";

type BookingModalProps = {
  onClose: () => void;
};

export function BookingModal({ onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    category: "Indoor UGC",
    plan: "Basic",
  });

  const price = useMemo(() => {
    if (formData.category === "Indoor UGC") {
      return formData.plan === "Basic" ? 2000 : 2500;
    } else {
      return formData.plan === "Basic" ? 4000 : 4500;
    }
  }, [formData.category, formData.plan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message
    const message = `Hi ADENCY, I want to book a video production plan.
    
*Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Business: ${formData.business}

*Plan Selected:*
Category: ${formData.category}
Package: ${formData.plan} Plan
Estimated Price: ₹${price}`;

    const encodedMessage = encodeURIComponent(message);
    const waNumber = "918764756818"; // From existing footer
    
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#fdfaf6] rounded-3xl shadow-2xl overflow-hidden shadow-orange-900/20 border border-white/50"
      >
        <div className="flex justify-between items-center p-6 border-b border-[#ebdaca]">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1512] tracking-tight">Start Your Project</h2>
            <p className="text-sm text-[#643f22] mt-1 font-medium">Pay only after final delivery.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#1a1512] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1a1512] uppercase tracking-wider">Name</label>
              <input required type="text" 
                className="w-full px-4 py-3 rounded-xl border border-[#ebdaca] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" 
                placeholder="John Doe"
                value={formData.name}
                onChange={e => {
                  const val = e.target.value.replace(/[^A-Za-z\s]/g, '');
                  setFormData({...formData, name: val})
                }}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1a1512] uppercase tracking-wider">Phone Number</label>
              <input required type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-[#ebdaca] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" 
                placeholder="+91 98765..."
                value={formData.phone}
                onChange={e => {
                  const val = e.target.value.replace(/[^0-9+]/g, '');
                  setFormData({...formData, phone: val})
                }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1a1512] uppercase tracking-wider">Business Type / Niche</label>
            <input required type="text" 
              className="w-full px-4 py-3 rounded-xl border border-[#ebdaca] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" 
              placeholder="e.g. E-commerce, Skincare, App"
              value={formData.business}
              onChange={e => setFormData({...formData, business: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1a1512] uppercase tracking-wider">Video Category</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-[#ebdaca] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 appearance-none"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="Indoor UGC">Indoor UGC</option>
                <option value="Outdoor UGC / Skit">Outdoor UGC / Skit</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1a1512] uppercase tracking-wider">Select Plan</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-[#ebdaca] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 appearance-none"
                value={formData.plan}
                onChange={e => setFormData({...formData, plan: e.target.value})}
              >
                <option value="Basic">Basic Plan</option>
                <option value="Premium">Premium Plan</option>
              </select>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#ebdaca] flex items-center justify-between">
            <div>
              <p className="text-xs text-[#643f22] font-semibold uppercase tracking-wider">Estimated Price</p>
              <p className="text-2xl font-bold text-[#f5a623]">₹{price}<span className="text-sm font-normal text-[#643f22] ml-1">/video</span></p>
            </div>
            <button type="submit" className="bg-[#f5a623] hover:bg-[#e09510] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 active:translate-y-0">
              Continue to WhatsApp
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
