import React from "react";
import { FaHandsHelping, FaStar, FaUsers, FaPalette, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";

const data = [
  { icon: <FaHeadset />, title: "24/7 Support", desc: "Always available for your queries." },
  { icon: <FaCheckCircle />, title: "Trusted Vendors", desc: "Curated, reliable partners." },
  { icon: <FaUsers />, title: "500+ Events Done", desc: "Extensive event experience." },
  { icon: <FaPalette />, title: "Custom Themes", desc: "Personalized event styling." },
  { icon: <FaStar />, title: "Top Rated", desc: "Clients love us." },
  { icon: <FaHandsHelping />, title: "Easy Process", desc: "Simple steps to success." }
];

export default function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <h2 className="wcu-title">Why Choose Us?</h2>
      <div className="wcu-grid">
        {data.map((card, i) => (
          <motion.div
            key={card.title}
            className="wcu-card"
            whileHover={{ y: -10, scale: 1.07 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="wcu-icon">{card.icon}</div>
            <div className="wcu-card-title">{card.title}</div>
            <div className="wcu-card-desc">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
