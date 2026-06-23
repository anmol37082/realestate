 "use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Headset, Landmark, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import ScrollTextTitle from "../../home/components/ScrollTextTitle";
import styles from "./WhyChooseUs.module.css";

const items = [
  {
    icon: <Landmark size={22} />,
    title: "Prime NH-205 Location",
    text: "Strategically located on Kharar–Landran Road with excellent highway visibility.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Fully Approved Project",
    text: "RERA Approved, CLU Approved, and supported by all required approvals for a secure investment.",
  },
  {
    icon: <Wallet size={22} />,
    title: "Strong Customer Base",
    text: "Supported by nearby residential communities and daily highway traffic.",
  },
  {
    icon: <Headset size={22} />,
    title: "Premium Commercial Spaces",
    text: "Modern double-height showrooms designed for visibility and business success.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Modern Infrastructure",
    text: "350+ parking spaces, EV charging facilities, and quality amenities.",
  },
  {
    icon: <Sparkles size={22} />,
    title: "High Growth Potential",
    text: "A promising investment opportunity with strong future appreciation prospects.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || hasEntered) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.header}>
        <ScrollTextTitle as="h2" className={styles.title}>Why Invest in Town Square</ScrollTextTitle>
        <p className={styles.subtitle}>Strategic location and premium amenities for secure investment</p>
      </div>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`${styles.card} ${hasEntered ? styles.cardVisible : ""}`}
            style={{ "--reveal-delay": `${index * 220}ms` }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
