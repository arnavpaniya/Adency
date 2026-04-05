"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Phase = "loading" | "video" | "logo" | "exit" | "gone";

export default function PreloaderOverlay() {
  const [phase, setPhase] = useState<Phase>("loading");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Latency handling: Fallback timeout to avoid blocking users
    const fallbackTimer = setTimeout(() => {
      setPhase((currentPhase) => {
        if (currentPhase === "loading") {
          // If still loading after 2.5s, skip directly to logo
          setTimeout(() => setPhase("exit"), 2000);
          setTimeout(() => setPhase("gone"), 2800);
          return "logo";
        }
        return currentPhase;
      });
    }, 2500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleVideoCanPlay = () => {
    if (phase !== "loading") return; // Bypassed by fallback
    
    setPhase("video");
    
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If autoplay blocked, skip to logo
        setPhase("logo");
        setTimeout(() => setPhase("exit"), 2000);
        setTimeout(() => setPhase("gone"), 2800);
      });
    }

    // Play video for 2.5s then fade to logo
    setTimeout(() => {
      setPhase("logo");
      // Show logo for 2s then exit
      setTimeout(() => setPhase("exit"), 2000);
      setTimeout(() => setPhase("gone"), 2800);
    }, 2500);
  };

  if (phase === "gone") return null;

  const isExit = phase === "exit";
  const isVideo = phase === "video";
  const isLogo = phase === "logo";

  return (
    <div aria-hidden="true" className={`pl-root${isExit ? " pl-exit" : ""}`}>
      {/* Cinematic Bars */}
      <div className={`pl-cinematic-bar pl-bar-top${isExit ? " pl-bar--exit" : ""}`} />
      <div className={`pl-cinematic-bar pl-bar-bottom${isExit ? " pl-bar--exit" : ""}`} />

      {/* Dark background beneath video */}
      <div className="pl-bg-clean" />

      {/* Video Phase */}
      <video
        ref={videoRef}
        src="/assests/video.mp4"
        preload="auto"
        muted
        playsInline
        loop
        onCanPlayThrough={handleVideoCanPlay}
        className={`pl-video ${isVideo ? "pl-video--in" : (isLogo || isExit) ? "pl-video--out" : ""}`}
      />

      {/* Loading Phase */}
      {phase === "loading" && (
        <div className="pl-loading-state">
          <span className="pl-loading-text">LOADING</span>
          <span className="pl-loading-dot">.</span>
          <span className="pl-loading-dot" style={{ animationDelay: "0.2s" }}>.</span>
          <span className="pl-loading-dot" style={{ animationDelay: "0.4s" }}>.</span>
        </div>
      )}

      {/* Background blend before hero reveals */}
      <div className={`pl-hero-blur${isExit ? " pl-hero-blur--in" : ""}`} />
      <div className="pl-noise" />

      {/* Logo Phase */}
      <div className={`pl-new-brand ${isLogo ? "pl-new-brand--in" : ""}`}>
        <div className="pl-new-logo-img-wrapper">
          <Image
            src="/assests/logo.png"
            alt=""
            width={80}
            height={80}
            priority
            className="pl-new-logo-img"
          />
        </div>
        <div className="pl-new-logo">
          {"ADENCY".split("").map((char, i) => (
            <span
              key={i}
              className={`pl-new-char ${isLogo ? "pl-new-char--animate" : ""}`}
              style={{ animationDelay: `${i * 0.05 + 0.3}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <p className={`pl-new-tagline ${isLogo ? "pl-new-tagline--animate" : ""}`}>
          Pay Only After Delivery
        </p>
      </div>
    </div>
  );
}
