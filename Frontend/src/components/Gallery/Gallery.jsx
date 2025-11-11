import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
// Import your local gallery images:
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpeg";
import gallery6 from "../../assets/gallery6.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Best Work</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-img-card"
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.46 }}
            viewport={{ once: true }}
          >
            <img src={img} alt={`Gallery ${i+1}`} className="gallery-img"/>
            <div className="gallery-overlay">View</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
