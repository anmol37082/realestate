"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: "100%", label: "RERA + CLU Approved Development" },
  { value: "350+", label: "Smartly Designed Parking Spaces" },
  { value: "8 Lakh+", label: "Strong Residential Catchment Base" },
  { value: "Unlimited", label: "Daily Highway Exposure & Footfall" },
];

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [progress, setProgress] = useState(0);

  const parsedStats = useMemo(
    () =>
      stats.map((stat) => {
        const match = stat.value.match(/^(\d+(?:\.\d+)?)\s*(Lakh)?\s*([+%])?$/i);

        if (!match) {
          return { ...stat, animated: false };
        }

        const numericValue = Number(match[1]);
        const suffix = `${match[2] ?? ""}${match[3] ?? ""}`;

        return {
          ...stat,
          animated: true,
          numericValue,
          suffix,
        };
      }),
    []
  );

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || hasAnimated) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasAnimated(true);
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const nextProgress = Math.min(elapsed / duration, 1);
          setProgress(nextProgress);

          if (nextProgress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const renderValue = (stat) => {
    if (!stat.animated || !hasAnimated) {
      return stat.value;
    }

    const current = Math.round(stat.numericValue * progress);
    return `${current}${stat.suffix}`;
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.grid}>
        {parsedStats.map((stat) => (
          <article key={stat.label} className={styles.card}>
            <div className={styles.value}>{renderValue(stat)}</div>
            <div className={styles.label}>{stat.label}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
