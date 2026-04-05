"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const plans = {
  indoor: [
    {
      id: "asm-indoor",
      name: "ASM",
      price: "₹2,000",
      tag: "Starter",
      features: [
        "1 UGC video, indoor shoot",
        "Clean & engaging edits",
        "Optimised for social media",
        "Fast turnaround",
      ],
    },
    {
      id: "csm-indoor",
      name: "CSM",
      price: "₹2,500",
      tag: "Popular",
      features: [
        "1 premium UGC video, indoor shoot",
        "Advanced editing & colour grade",
        "Better storytelling & hooks",
        "Optimised for paid ads",
      ],
    },
  ],
  outdoor: [
    {
      id: "asm-outdoor",
      name: "ASM",
      price: "₹4,000",
      tag: "Starter",
      features: [
        "1 UGC video, outdoor shoot",
        "Natural setting & lighting",
        "Clean, engaging edits",
        "Optimised for social media",
      ],
    },
    {
      id: "csm-outdoor",
      name: "CSM",
      price: "₹4,500",
      tag: "Popular",
      features: [
        "1 premium outdoor video",
        "Creative storytelling & skit",
        "Advanced edits & colour grade",
        "Optimised for paid ads",
      ],
    },
  ],
};

const trustPoints = [
  { icon: "🤝", text: "No advance payment required" },
  { icon: "✅", text: "Pay only after delivery" },
  { icon: "💬", text: "Client-first approach, always" },
];

export default function PlansPage() {
  const [tab, setTab] = useState<"indoor" | "outdoor">("indoor");
  const active = plans[tab];

  return (
    <div className="plans-shell">

      {/* ── Nav ── */}
      <header className="plans-nav">
        <Link href="/" className="plans-nav-brand">
          <Image src="/assests/logo.png" alt="" width={26} height={26} className="plans-nav-icon" />
          <span className="plans-nav-text">ADENCY</span>
        </Link>
        <Link href="/" className="plans-nav-back">← Back to Home</Link>
      </header>

      {/* ── Hero ── */}
      <section className="plans-hero">
        {/* decorative film strip icon */}
        <Image
          src="/assests/icons/icon2.png"
          alt=""
          width={180}
          height={180}
          className="plans-deco plans-deco-hero"
          aria-hidden="true"
        />

        <p className="plans-usp-badge">No Upfront Payment — Pay Only After Delivery</p>
        <h1 className="plans-hero-title">Choose Your Video Plan</h1>
        <p className="plans-hero-sub">
          Affordable, trust-first video production for brands that want to grow.
        </p>

        {/* ── Category toggle ── */}
        <div className="plans-toggle" role="tablist">
          <button
            role="tab"
            aria-selected={tab === "indoor"}
            className={`plans-toggle-btn${tab === "indoor" ? " plans-toggle-btn--active" : ""}`}
            onClick={() => setTab("indoor")}
          >
            Indoor UGC
          </button>
          <button
            role="tab"
            aria-selected={tab === "outdoor"}
            className={`plans-toggle-btn${tab === "outdoor" ? " plans-toggle-btn--active" : ""}`}
            onClick={() => setTab("outdoor")}
          >
            Outdoor / Skit
          </button>
        </div>
      </section>

      {/* ── Plan Cards ── */}
      <section className="plans-cards-section">
        {/* bg deco icons */}
        <Image src="/assests/icons/icon1.png" alt="" width={160} height={160}
          className="plans-deco plans-deco-left" aria-hidden="true" />
        <Image src="/assests/icons/icon3.png" alt="" width={160} height={160}
          className="plans-deco plans-deco-right" aria-hidden="true" />

        <div className="plans-cards-grid">
          {active.map((plan, i) => (
            <div key={plan.id} className={`plan-card${i === 1 ? " plan-card--featured" : ""}`}>
              <div className="plan-card-tag">{plan.tag}</div>
              <h2 className="plan-card-name">{plan.name}</h2>
              <p className="plan-card-type">{tab === "indoor" ? "Indoor UGC" : "Outdoor / Skit"}</p>
              <div className="plan-card-price">{plan.price}</div>

              <ul className="plan-card-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="plan-card-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={`/order?plan=${plan.id}&name=${encodeURIComponent(plan.name + " " + (tab === "indoor" ? "Indoor" : "Outdoor"))}&price=${encodeURIComponent(plan.price)}`}
                className={`plan-card-btn${i === 1 ? " plan-card-btn--featured" : ""}`}
              >
                Buy Now
              </Link>
              <p className="plan-card-note">Payment collected only after delivery.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="plans-trust">
        <Image src="/assests/icons/icon5.png" alt="" width={120} height={120}
          className="plans-deco plans-deco-trust" aria-hidden="true" />
        <h2 className="plans-trust-title">Why clients trust ADENCY</h2>
        <div className="plans-trust-grid">
          {trustPoints.map((t) => (
            <div key={t.text} className="plans-trust-card">
              <span className="plans-trust-icon">{t.icon}</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="plans-cta">
        <Image src="/assests/icons/icon4.png" alt="" width={100} height={100}
          className="plans-deco plans-deco-cta" aria-hidden="true" />
        <h2 className="plans-cta-title">Ready to get started?</h2>
        <p className="plans-cta-sub">Pick a plan above or reach out directly — we&apos;ll handle the rest.</p>
        <a
          href="https://wa.me/918764756818"
          target="_blank"
          rel="noreferrer"
          className="plans-cta-btn"
        >
          Proceed to Order
        </a>
      </section>

    </div>
  );
}
