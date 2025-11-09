import React from "react";
import { FaClipboardList, FaPalette, FaTruck, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  { icon: <FaClipboardList/>, label: "Choose Service" },
  { icon: <FaPalette/>, label: "Customize" },
  { icon: <FaTruck/>, label: "We Execute" },
  { icon: <FaSmile/>, label: "Celebrate" }
];

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <h2 className="hiw-title">How It Works</h2>
      <div className="hiw-steps">
        {steps.map((step, i) => (
          <motion.div
            className="hiw-step"
            key={step.label}
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i*0.16 }}
            viewport={{ once: true }}
          >
            <div className="hiw-step-icon">{step.icon}</div>
            <span className="hiw-step-label">{step.label}</span>
            {i < steps.length-1 && (
              <span className="hiw-arrow">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
