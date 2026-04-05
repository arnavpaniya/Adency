"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 1000; // 1s snappy load

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const raw = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400); // Small pause at 100%
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl"
    >
      <div className="relative flex flex-col items-center">
        {/* Subtle Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-4xl md:text-5xl font-black text-[#1a1512] tracking-[0.2em] uppercase">
            ADENCY
          </span>
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="w-48 h-[1px] bg-gray-100 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#f07020]"
            style={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>

        {/* Subtle Percentage */}
        <div className="mt-4 text-[0.6rem] font-bold text-gray-400 tracking-[0.3em] uppercase">
          Loading <span className="text-orange-500/60 ml-1">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
