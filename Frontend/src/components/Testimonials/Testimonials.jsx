import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

// Import images or use placeholders
import user1 from "../../assets/user1.jpeg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpeg";

const data = [
  {
    img: user1,
    name: "Arjun S.",
    review: "Reliable & creative – my go-to for events!",
    stars: 5
  },
  {
    img: user2,
    name: "Priya K.",
    review: "The team handled every detail perfectly.",
    stars: 5
  },
  {
    img: user3,
    name: "Rahul M.",
    review: "Impressive service and lovely experience!",
    stars: 4.5
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <motion.div
        className="testimonials-slider"
        initial={{ x: -60, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        {data.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <div className="testimonial-info">
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-review">"{t.review}"</div>
              <div className="testimonial-stars">
                {"⭐".repeat(Math.floor(t.stars))}
                {t.stars % 1 ? "½" : ""}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
