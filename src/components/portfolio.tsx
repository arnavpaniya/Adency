"use client";

import { useEffect, useRef, useState } from "react";

const PORTFOLIO_ITEMS = [
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video1_fl8abq.mp4", 
    title: "Eco-Wear Launch", 
    category: "Brand Promo", 
    metric: "+140% ROAS",
    description: "A high-converting UGC video crafted to showcase the brand in a natural and engaging way."
  },
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video2_jy8ox8.mp4", 
    title: "Urban Steps App", 
    category: "UGC Campaign", 
    metric: "2.1M Views",
    description: "A relatable lifestyle UGC video designed to connect with the audience authentically."
  },
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video3_fjm5wo.mp4", 
    title: "Glow Skincare", 
    category: "Social Content", 
    metric: "-40% CPA",
    description: "A visually engaging video crafted to capture attention quickly."
  },
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video4_mchd2t.mp4", 
    title: "FitTech Watch", 
    category: "Product Launch", 
    metric: "15k Clicks",
    description: "A clean and engaging product-focused video."
  },
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video5_juag3n.mp4", 
    title: "Brew Coffee Co.", 
    category: "UGC Skit", 
    metric: "Viral 4M+",
    description: "A premium-quality video crafted to elevate brand visuals."
  },
  { 
    src: "https://res.cloudinary.com/dzmbj6q4j/video/upload/q_auto,f_auto/compressed_video6_gw8csy.mp4", 
    title: "Minimalist Desk", 
    category: "Aesthetic B-Roll", 
    metric: "+85% Conv.",
    description: "A content-driven UGC video with clean storytelling."
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
            video.muted = true;
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
                
                {/* Front Side */}
                <div className="portfolio-card-front">
                  <video
                    key={item.src}
                    className="portfolio-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => e.currentTarget.play()}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
                
                {/* Back Side */}
                <div className="portfolio-card-back">
                  <div className="pvd-content">
                    <p className="pvd-category">{item.category}</p>
                    <h3 className="pvd-title">{item.title}</h3>
                    <p className="pvd-description">{item.description}</p>
                    <div className="pvd-metric">
                      ⚡ {item.metric}
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