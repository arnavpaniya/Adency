"use client";

import { useEffect, useRef, useState } from "react";

const PORTFOLIO_ITEMS: Array<{ src: string; title: string; category: string; metric: string; description?: string }> = [
  { 
    src: "/assets/videos/compressed_video1.mp4", 
    title: "Eco-Wear Launch", 
    category: "Brand Promo", 
    metric: "+140% ROAS",
    description: "A high-converting UGC video crafted to showcase the brand in a natural and engaging way. Designed for social platforms with fast pacing, clean edits, and strong visual storytelling."
  },
  { 
    src: "/assets/videos/compressed_video2.mp4", 
    title: "Urban Steps App", 
    category: "UGC Campaign", 
    metric: "2.1M Views",
    description: "A relatable lifestyle UGC video designed to connect with the audience authentically. Built for social media with natural storytelling, subtle edits, and a focus on real-world usage."
  },
  { 
    src: "/assets/videos/compressed_video3.mp4", 
    title: "Glow Skincare", 
    category: "Social Content", 
    metric: "-40% CPA",
    description: "A visually engaging video crafted to capture attention within the first few seconds. Designed for social platforms with sharp edits, smooth transitions, and a focus on keeping viewers hooked."
  },
  { 
    src: "/assets/videos/compressed_video4.mp4", 
    title: "FitTech Watch", 
    category: "Product Launch", 
    metric: "15k Clicks",
    description: "A clean and engaging video designed to showcase the brand in a natural and appealing way. Optimized for social platforms with smooth pacing, refined edits, and a focus on visual clarity."
  },
  { 
    src: "/assets/videos/compressed_video5.mp4", 
    title: "Brew Coffee Co.", 
    category: "UGC Skit", 
    metric: "Viral 4M+",
    description: "A premium-quality video crafted to elevate the brand’s visual presence. Designed for modern platforms with polished edits, smooth transitions, and a refined storytelling approach."
  },
  { 
    src: "/assets/videos/compressed_video6.mp4", 
    title: "Minimalist Desk", 
    category: "Aesthetic B-Roll", 
    metric: "+85% Conv.",
    description: "A content-driven UGC video designed to communicate the message clearly and effectively. Optimized for social platforms with natural delivery, clean edits, and a focus on audience engagement."
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.muted = true; // ensure autoplay works
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.01,
      }
    );

    const videoElements = containerRef.current?.querySelectorAll("video");
    videoElements?.forEach((vid) => observer.observe(vid));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Recent Work</h2>
          <p className="portfolio-subtitle">
            High quality cinematic productions built to convert.
          </p>
        </div>

        <div className="portfolio-grid" ref={containerRef}>
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="portfolio-video-wrapper"
              onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
            >
              <div className={`portfolio-card-inner ${flippedIndex === idx ? "flipped" : ""}`}>
                
                {/* Front Side: Video */}
                <div className="portfolio-card-front">
                  <video
                    src={item.src}
                    className="portfolio-video"
                    loop
                    muted
                    playsInline
                    autoPlay
                    preload="auto"
                  />
                </div>
                
                {/* Back Side: Details */}
                <div className="portfolio-card-back">
                  <div className="pvd-content">
                    <p className="pvd-category">{item.category}</p>
                    <h3 className="pvd-title">{item.title}</h3>
                    {item.description && (
                      <p className="pvd-description">{item.description}</p>
                    )}
                    <div className="pvd-metric">
                      <span className="pvd-metric-bolt">⚡</span>
                      {item.metric}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}