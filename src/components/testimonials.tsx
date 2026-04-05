"use client";

import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "Adency delivered our brand promo in a week with no upfront payment. The quality was insane, it boosted our Instagram conversion heavily.",
    author: "Amit · Startup Founder",
  },
  {
    quote: "Simplest process ever. We ordered 3 UGC videos for our store, didn't pay until we saw the final result. Pure trust.",
    author: "Sarah · Marketing Lead",
  },
  {
    quote: "The 'Pay Only After Delivery' is a game changer. The video was cinematic, professional, and exactly what we needed to stand out.",
    author: "Rohan · E-commerce Store Owner",
  },
  {
    quote: "Our engagement went through the roof. The production quality speaks for itself. Getting the final video before paying took all the stress away.",
    author: "Chris · Social Media Manager",
  },
  {
    quote: "A seamless experience from start to finish. The team at Adency knows exactly what catches the viewer's eye. Totally worth it.",
    author: "Priya · Fashion Brand Owner",
  },
  {
    quote: "I was skeptical at first, but zero upfront risk made it a no-brainer. The final edit blew my entire team away. High-end work.",
    author: "Vikram · App Developer",
  },
  {
    quote: "We use Adency for all our TikTok creatives. Fast turnaround, brilliant hooks, and the easiest payment structure in the industry.",
    author: "Linda · Dropshipping Entrepreneur",
  },
  {
    quote: "Best video agency we've worked with. Period. They understood our brand voice immediately and didn't hold our budget hostage.",
    author: "Arjun · Beverage Brand Co-Founder",
  },
  {
    quote: "Incredible attention to detail. The actors they cast for our UGC were perfect, and the lighting was top-tier.",
    author: "Emily · Beauty Startup",
  },
  {
    quote: "Finally, an agency that actually believes in its own work enough to delay payment until we're happy. ADENCY is the real deal.",
    author: "David · Local Gym Chain Owner",
  },
  {
    quote: "They turned our boring product features into a cinematic masterpiece. We doubled our ad spend just because the videos convert so well.",
    author: "Sneha · Tech Hardware CEO",
  },
  {
    quote: "The peace of mind is unmatched. Adency’s trust-first model combined with their high production value makes them unbeatable.",
    author: "Kevin · Marketing Agency Partner",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="tm-section">
      <div className="tm-container">
        
        <div className="tm-header">
          <h2 className="tm-title">Word on the Street</h2>
          <p className="tm-subtitle">What brand owners have to say about our no-risk process.</p>
        </div>

        <div className="tm-marquee">
          <div className="tm-marquee-track">
            {/* Render list twice for smooth infinite looping */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="tm-card">
                <span className="tm-quote-mark">"</span>
                <p className="tm-quote">{t.quote}</p>
                <p className="tm-author">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative floating icons */}
      <div className="tm-deco tm-deco-2">
        <Image src="/assests/icons/icon9.png" alt="" width={220} height={220} />
      </div>
      <div className="tm-deco tm-deco-3">
        <Image src="/assests/icons/icon4.png" alt="" width={260} height={260} />
      </div>
    </section>
  );
}
