// src/components/ServiceSection.jsx
import React from "react";
import ServiceCard from "../ServiceCard/serviceCard";
import { services } from "../ServiceData";
import './serviceSection.css';

export default function ServiceSection() {
  return (
    <section className="service-section">
      <h2 className="service-section-title">Explore Our Services</h2>
      <div className="service-card-grid">
        {services.map(service => (
          <ServiceCard
            key={service.name}
            name={service.name}
            image={service.image}
            route={service.route}
          />
        ))}
      </div>
    </section>
  );
}
