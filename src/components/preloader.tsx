"use client";

import { useState, useEffect, useCallback } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");

  // Simulate loading progress
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 2800; // 2.8s total load

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const raw = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - raw, 3);
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // Loading done → start reveal phase
        setPhase("reveal");
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Handle phase transitions
  useEffect(() => {
    if (phase === "reveal") {
      const t = setTimeout(() => setPhase("exit"), 600);
      return () => clearTimeout(t);
    }
    if (phase === "exit") {
      const t = setTimeout(onComplete, 700);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const letters = "ADENCY".split("");

  return (
    <div className={`pl ${phase === "exit" ? "pl--exit" : ""}`}>
      {/* Background layers */}
      <div className="pl__bg" />
      <div className="pl__streaks" />
      <div className="pl__grain" />

      {/* Shutter lines */}
      <div className="pl__shutter pl__shutter--top" />
      <div className="pl__shutter pl__shutter--bottom" />

      {/* Center content */}
      <div className="pl__center">
        {/* Brand text */}
        <h1 className="pl__brand">
          {letters.map((char, i) => (
            <span
              key={i}
              className="pl__char"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p className="pl__tagline">VIDEO PRODUCTION STUDIO</p>

        {/* Progress bar */}
        <div className="pl__track">
          <div
            className="pl__bar"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
          <div
            className="pl__glow"
            style={{ left: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="pl__pct">{progress}%</span>
      </div>

      {/* Lens flare */}
      <div className="pl__flare" />
    </div>
  );
}
