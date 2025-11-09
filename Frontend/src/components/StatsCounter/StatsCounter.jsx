import React, { useEffect, useRef, useState } from "react";
import "./StatsCounter.css";

const stats = [
  { label: "Happy Clients", value: 1200 },
  { label: "Events", value: 800 },
  { label: "Cities", value: 15 }
];

function useCountUp(end) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame;
    let start = 0;
    function update() {
      setCount(Math.floor(start));
      if (start < end) {
        start += Math.max(1, end / 45);
        frame = requestAnimationFrame(update);
      } else setCount(end);
    }
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [end]);
  return count;
}

export default function StatsCounter() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => {
          const count = useCountUp(s.value);
          return (
            <div className="stats-card" key={s.label}>
              <div className="stats-value">{count}+</div>
              <div className="stats-label">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
