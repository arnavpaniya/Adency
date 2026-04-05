"use client";

import { useEffect, useRef } from "react";

const PORTFOLIO_ITEMS = [
  { 
    src: "/assests/videos/video1.mp4", 
    title: "Eco-Wear Launch", 
    category: "Brand Promo", 
    metric: "+140% ROAS" 
  },
  { 
    src: "/assests/videos/video2.mp4", 
    title: "Urban Steps App", 
    category: "UGC Campaign", 
    metric: "2.1M Views" 
  },
  { 
    src: "/assests/videos/video3.mp4", 
    title: "Glow Skincare", 
    category: "Social Content", 
    metric: "-40% CPA" 
  },
  { 
    src: "/assests/videos/video4.mp4", 
    title: "FitTech Watch", 
    category: "Product Launch", 
    metric: "15k Clicks" 
  },
  { 
    src: "/assests/videos/video5.mp4", 
    title: "Brew Coffee Co.", 
    category: "UGC Skit", 
    metric: "Viral 4M+" 
  },
  { 
    src: "/assests/videos/video6.mp4", 
    title: "Minimalist Desk", 
    category: "Aesthetic B-Roll", 
    metric: "+85% Conv." 
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        
        <div className="portfolio-header">
          <h2 className="portfolio-title">Our Recent Work</h2>
          <p className="portfolio-subtitle">High quality cinematic productions built to convert.</p>
        </div>

        <div className="portfolio-grid" ref={containerRef}>
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div key={idx} className="portfolio-video-wrapper">
              <div className="portfolio-card-inner">
                {/* Front Side: Video */}
                <div className="portfolio-card-front">
                  <video
                    src={item.src}
                    className="portfolio-video"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
                
                {/* Back Side: Details */}
                <div className="portfolio-card-back">
                  <div className="pvd-content">
                    <p className="pvd-category">{item.category}</p>
                    <h3 className="pvd-title">{item.title}</h3>
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
