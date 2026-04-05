"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Phase = "ready-wait" | "video" | "logo" | "exit" | "gone";

export default function PreloaderOverlay() {
  const [phase, setPhase] = useState<Phase>("ready-wait");
  const videoRef = useRef<HTMLVideoElement>(null);

  const startSequence = () => {
    if (phase !== "ready-wait") return;
    
    setPhase("video");
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for autoplay blocks
        proceedToLogo();
      });
    }

    // Play video for 2.8s for immersion
    setTimeout(proceedToLogo, 2800);
  };

  const proceedToLogo = () => {
    setPhase("logo");
    // Enhanced Logo visibility duration
    setTimeout(() => {
      setPhase("exit");
      setTimeout(() => setPhase("gone"), 800);
    }, 2200);
  };

  useEffect(() => {
    // Safety fallback if video never triggers readiness
    const safety = setTimeout(() => {
      if (phase === "ready-wait") startSequence();
    }, 3000);
    return () => clearTimeout(safety);
  }, [phase]);

  if (phase === "gone") return null;

  const isExit = phase === "exit";
  const isVideo = phase === "video";
  const isLogo = phase === "logo";

  return (
    <div aria-hidden="true" className={`pl-root${isExit ? " pl-exit" : ""}`}>
      {/* Dark background beneath video */}
      <div className="pl-bg-clean" />

      {/* Full Screen Video Phase with Teal-Orange Overlay */}
      <div className={`pl-video-overlay ${isVideo ? "pl-video-overlay--in" : "pl-video-overlay--out"}`} />
      <video
        ref={videoRef}
        src="/assests/video.mp4"
        preload="auto"
        muted
        playsInline
        loop
        onCanPlayThrough={startSequence}
        className={`pl-video ${isVideo ? "pl-video--in" : (isLogo || isExit || phase === "ready-wait") ? "pl-video--out" : ""}`}
      />

      {/* Background blend before hero reveals */}
      <div className={`pl-hero-blur${isExit ? " pl-hero-blur--in" : ""}`} />
      <div className="pl-noise" />

      {/* Logo Phase (Enhanced Logo Only) */}
      <div className={`pl-new-brand ${isLogo ? "pl-new-brand--in" : ""}`}>
        <div className="pl-new-logo-img-wrapper">
          <Image
            src="/assests/logo1.png"
            alt="ADENCY Logo"
            width={340}
            height={340}
            priority
            className="pl-new-logo-img"
          />
        </div>
      </div>
    </div>
  );
}
