"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type PlansProps = {
  onOpenModal: () => void;
};

export function Plans({ onOpenModal }: PlansProps) {
  return (
    <section id="plans" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#fdfaf6]">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Clear Pricing
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a1512] mb-4 tracking-tight"
          >
            Video Production Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#643f22] max-w-2xl mx-auto text-lg"
          >
            High-quality content that converts viewers into customers. <br className="hidden md:block"/>
            <span className="font-bold text-[#1a1512]">Starting from ₹2000 per video.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-900/5 border border-[#ebdaca] flex flex-col transition-transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-[#1a1512] mb-2">Basic Plan</h3>
            <p className="text-[#643f22] text-sm mb-6">Perfect for simple promotional videos and raw UGC.</p>
            
            <div className="mb-8 space-y-4 flex-grow">
              <div className="flex justify-between items-end border-b border-[#ebdaca]/50 pb-2">
                <span className="font-semibold text-[#1a1512]">Indoor UGC</span>
                <span className="text-xl font-bold text-orange-500">₹2000</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#ebdaca]/50 pb-2">
                <span className="font-semibold text-[#1a1512]">Outdoor / Skit</span>
                <span className="text-xl font-bold text-orange-500">₹4000</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm text-[#453022]">
                <CheckCircle2 className="text-orange-500 mr-3 shrink-0" size={18} />
                <span>Professional recording</span>
              </li>
              <li className="flex items-start text-sm text-[#453022]">
                <CheckCircle2 className="text-orange-500 mr-3 shrink-0" size={18} />
                <span>Basic cuts & pacing</span>
              </li>
              <li className="flex items-start text-sm text-[#453022]">
                <CheckCircle2 className="text-orange-500 mr-3 shrink-0" size={18} />
                <span>Standard color grading</span>
              </li>
            </ul>

            <button 
              onClick={onOpenModal}
              className="w-full py-4 rounded-xl font-bold text-[#1a1512] border-2 border-[#1a1512] hover:bg-[#1a1512] hover:text-white transition-colors"
            >
              Select Basic
            </button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a1512] rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col transition-transform hover:-translate-y-2 group"
          >
            {/* Glossy highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
            <p className="text-orange-200/70 text-sm mb-6">Advanced editing and high-quality storytelling.</p>
            
            <div className="mb-8 space-y-4 flex-grow">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-semibold text-white">Indoor UGC</span>
                <span className="text-xl font-bold text-orange-400">₹2500</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="font-semibold text-white">Outdoor / Skit</span>
                <span className="text-xl font-bold text-orange-400">₹4500</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="text-orange-400 mr-3 shrink-0" size={18} />
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="text-orange-400 mr-3 shrink-0" size={18} />
                <span>Motion graphics & text tracking</span>
              </li>
              <li className="flex items-start text-sm text-gray-300">
                <CheckCircle2 className="text-orange-400 mr-3 shrink-0" size={18} />
                <span>Advanced sound design & hooks</span>
              </li>
            </ul>

            <button 
              onClick={onOpenModal}
              className="w-full py-4 rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20"
            >
              Select Premium
            </button>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-medium text-[#643f22] bg-[#ebdaca]/30 inline-block px-4 py-2 rounded-full border border-[#ebdaca]/60">
            Note: Only video services included in the above packages.
          </p>
        </div>
      </div>
    </section>
  );
}
