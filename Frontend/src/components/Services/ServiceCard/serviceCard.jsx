// src/components/ServiceCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './serviceCard.css';

export default function ServiceCard({ name, image, route }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="service-card"
      whileHover={{ scale: 1.07, y: -6 }}
      onClick={() => navigate(route)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, type: "spring" }}
    >
      <img src={image} alt={name} className="service-card-img" />
      <div className="service-card-name">{name}</div>
    </motion.div>
  );
}
