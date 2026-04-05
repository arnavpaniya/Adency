"use client";

import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function PoliciesPage() {
  return (
    <div className="policy-page">
      <Navbar variant="glass" />

      {/* ── Content ── */}
      <main className="policy-content-wrapper">
        <h1 className="policy-title">Adency Policies</h1>

        <section className="policy-section">
          <h2>Privacy Policy</h2>
          
          <h3>Who We Are</h3>
          <p>Our website address is: <a href="http://growwithadency.com" target="_blank" rel="noreferrer">http://growwithadency.com</a>.</p>

          <h3>Comments</h3>
          <p>When visitors leave comments on our site, we collect:</p>
          <ul>
            <li>Data shown in the comments form.</li>
            <li>Visitor’s IP address and browser user agent string for spam detection.</li>
            <li>An anonymized string (hash) from your email address may be sent to the Gravatar service to check if you use it.</li>
          </ul>

          <h3>Media</h3>
          <p>Avoid uploading images with embedded location data (EXIF GPS). Visitors can download and extract location data from images.</p>

          <h3>Cookies</h3>
          <p>We use cookies to improve user experience.</p>
          <ul>
            <li>If you leave a comment, you may save your name, email, and website in cookies for convenience. These last for one year.</li>
            <li>If you visit our login page, we set a temporary cookie to check if your browser accepts cookies. This is discarded when you close your browser.</li>
            <li>Login cookies last two days; screen options cookies last a year. Selecting Remember Me extends login persistence to two weeks. Logging out removes login cookies.</li>
            <li>Editing or publishing an article sets an additional cookie, which expires after one day.</li>
          </ul>

          <h3>Embedded Content from Other Websites</h3>
          <p>Embedded content (videos, articles, etc.) from other websites behaves as if you visited that website directly. These websites may:</p>
          <ul>
            <li>Collect data about you.</li>
            <li>Use cookies.</li>
            <li>Embed third-party tracking.</li>
            <li>Monitor interactions with embedded content.</li>
          </ul>

          <h3>Who We Share Your Data With</h3>
          <p>If you request a password reset, your IP address will be included in the reset email.</p>

          <h3>How Long We Retain Your Data</h3>
          <p>Comments and metadata are stored indefinitely for recognition and follow-ups.</p>
          <p>Registered users’ personal information is stored in their profile. Users can edit or delete data anytime except their username. Website administrators can also edit this data.</p>

          <h3>What Rights You Have Over Your Data</h3>
          <p>You may request:</p>
          <ul>
            <li>An exported file of your personal data.</li>
            <li>Erasure of your personal data, except data we must retain for legal, administrative, or security reasons.</li>
          </ul>

          <h3>Where Your Data Is Sent</h3>
          <p>Visitor comments may be checked through an automated spam detection service.</p>
        </section>

        <section className="policy-section">
          <h2>Terms & Conditions</h2>
          
          <h3>Services Provided</h3>
          <p>Adency specializes in:</p>
          <ul>
            <li>Meta Ads Management – Optimizing digital ad campaigns for better reach and engagement.</li>
            <li>Web Development – Creating coded and non-coded Shopify, WordPress websites.</li>
            <li>High-Conversion Ad Creatives – Engaging designs for effective advertising.</li>
            <li>Social Media Strategy & Management – Optimizing audience engagement on platforms.</li>
            <li>Business Branding & Consulting – Helping businesses establish a strong market presence.</li>
            <li>Performance Analytics & Growth Optimization – Providing data-driven insights for scaling businesses. & much more</li>
          </ul>

          <h3>Payment & Contracts</h3>
          <ul>
            <li>Payments for recurring services must be made in advance as per the agreed contract.</li>
            <li>A minimum one-month contract is required for services.</li>
            <li>Expenses for running paid advertisements (Meta Ads, Google Ads, etc.) are handled through the client’s ad account.</li>
            <li>Payments must be made via bank transfer, UPI, or online payment gateways approved by Adency.</li>
          </ul>

          <h3>Client Responsibilities</h3>
          <ul>
            <li>Clients must provide necessary materials, including branding elements, product or service details, and marketing goals.</li>
            <li>Any delays in providing required materials may impact delivery timelines.</li>
            <li>Clients should comply with platform guidelines (Meta, Google, etc.) to avoid ad disapprovals.</li>
          </ul>

          <h3>Additional Costs</h3>
          <ul>
            <li>Services beyond the agreed scope may incur additional charges.</li>
            <li>Custom requests like extra revisions, new creatives, or urgent modifications will be billed separately.</li>
            <li>Third-party subscriptions, hosting, or paid tools required for service execution must be purchased by the client.</li>
          </ul>

          <h3>Liability Disclaimer</h3>
          <ul>
            <li>Adency is not responsible for external platform policies, such as Facebook or Google, that may affect campaign performance.</li>
            <li>While we aim for high performance and conversions, Adency does not guarantee specific results due to market variability.</li>
            <li>Clients must follow recommended strategies to ensure campaign success.</li>
          </ul>

          <h3>Service Commencement</h3>
          <ul>
            <li>Services commence only after payment confirmation and agreement on project scope.</li>
            <li>Any modifications in project scope after commencement must be mutually agreed upon and may involve additional charges.</li>
          </ul>

          <h3>Cancellation & Refund Policy</h3>
          <ul>
            <li>No refunds will be provided once services have commenced.</li>
            <li>Clients must give a seven-day notice for discontinuing recurring services.</li>
            <li>In case of contract termination due to non-compliance with agreed terms, no refund will be issued.</li>
          </ul>

          <h3>Intellectual Property Rights</h3>
          <ul>
            <li>Any designs, content, or campaigns created by Adency remain Adency’s intellectual property until full payment is received.</li>
            <li>Once payment is cleared, intellectual property rights are transferred to the client.</li>
            <li>Unauthorized reproduction or resale of Adency’s creatives without consent is strictly prohibited.</li>
          </ul>

          <h3>Data Protection & Confidentiality</h3>
          <ul>
            <li>Client data, strategies, and business information are kept confidential and are not shared with third parties.</li>
            <li>Adency may use anonymized campaign performance data for internal analysis and case studies.</li>
          </ul>

          <h3>Amendments to Policies</h3>
          <p>Adency reserves the right to update terms and policies at any time. Clients will be notified of significant changes.</p>

          <h3>Contact Us</h3>
          <p>
            <strong>Office Address</strong><br />
            P-88, 2nd Floor, Adency Office, Silver Birches, Jaipur, Rajasthan – 302015
          </p>
          <p>
            <strong>Email</strong><br />
            <a href="mailto:info@growwithadency.com">info@growwithadency.com</a>
          </p>
          <p>
            <strong>Phone</strong><br />
            <a href="tel:+919256459588">+91-9256459588</a>
          </p>
        </section>
      </main>

      <Footer />

      {/* ── Decorative Background Tape (Repositioned to Side/Bottom) ── */}
      <div className="policy-deco-tape policy-tape-anchor">
        <Image 
          src="/assests/icons/icon11.png" 
          alt="" 
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
