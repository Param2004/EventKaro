import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  { q: "How early should I book my event?", a: "We recommend booking as early as possible, ideally 2-3 months in advance." },
  { q: "Can I customize services?", a: "Yes, all our services can be tailored to your needs and themes." },
  { q: "What payment modes are available?", a: "We accept major cards, UPI, bank transfers, and cash." },
  { q: "Do you manage vendors directly?", a: "Yes, we coordinate with partners and vendors on your behalf." },
  { q: "Is customer support available 24/7?", a: "Absolutely, our support team is always ready to assist you." }
];

export default function FAQ() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <span className={`faq-arrow ${open === i ? "faq-open" : ""}`}>
                <FaChevronDown />
              </span>
            </button>
            <div className={`faq-answer ${open === i ? "faq-visible" : ""}`}>
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
