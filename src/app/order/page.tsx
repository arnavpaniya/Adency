"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function OrderForm() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") || "";
  const planName = searchParams.get("name") || "";
  const planPrice = searchParams.get("price") || "";

  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    phone: "",
    email: "",
    plan: planName,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hi ADENCY Team!

I'd like to get started with a video project.

*My Details:*
Name: ${formData.name}
Brand: ${formData.brandName}
Phone: ${formData.phone}
Email: ${formData.email}

*Selected Plan:*
${formData.plan} - ${planPrice}

*Requirements:*
${formData.message || "No additional requirements"}

Looking forward to working with you!`;

    const whatsappUrl = `https://wa.me/918764756818?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="order-shell">
      {/* Nav */}
      <header className="order-nav">
        <Link href="/" className="order-nav-brand">
          <Image src="/assests/logo.png" alt="" width={26} height={26} className="order-nav-icon" />
          <span className="order-nav-text">ADENCY</span>
        </Link>
        <Link href="/plans" className="order-nav-back">← Back to Plans</Link>
      </header>

      {/* Main Content */}
      <div className="order-content">
        <div className="order-header">
          <h1 className="order-title">Get Your Video Started</h1>
          <p className="order-subtitle">Tell us about your requirements and we'll handle the rest.</p>
        </div>

        {/* Selected Plan Card */}
        {planName && (
          <div className="order-plan-card">
            <div className="order-plan-label">Selected Plan</div>
            <div className="order-plan-details">
              <span className="order-plan-name">{planName}</span>
              <span className="order-plan-price">{planPrice}</span>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="order-form">
          <div className="order-form-grid">
            <div className="order-form-field">
              <label htmlFor="name" className="order-form-label">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="order-form-input"
                placeholder="John Doe"
              />
            </div>

            <div className="order-form-field">
              <label htmlFor="brandName" className="order-form-label">Brand Name *</label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                required
                value={formData.brandName}
                onChange={handleChange}
                className="order-form-input"
                placeholder="Your Brand"
              />
            </div>

            <div className="order-form-field">
              <label htmlFor="phone" className="order-form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="order-form-input"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="order-form-field">
              <label htmlFor="email" className="order-form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="order-form-input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="order-form-field">
            <label htmlFor="message" className="order-form-label">Message / Requirements</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="order-form-textarea"
              placeholder="Tell us about your video requirements, target audience, key message, or any specific ideas..."
            />
          </div>

          {/* Trust Line */}
          <div className="order-trust-line">
            <svg className="order-trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No upfront payment required. Pay only after delivery.</span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="order-submit-btn">
            Continue to WhatsApp
            <svg className="order-submit-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="order-shell"><div className="order-content">Loading...</div></div>}>
      <OrderForm />
    </Suspense>
  );
}
