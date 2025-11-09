import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-bg-overlay"/>
      <div className="cta-content">
        <h2>Ready to Plan Your Event?</h2>
        <span>Your dream. Our expertise.</span>
        <button className="cta-btn">Book Now</button>
      </div>
    </section>
  );
}
