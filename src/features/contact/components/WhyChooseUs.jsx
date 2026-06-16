import { BadgeCheck, Headset, Landmark, ShieldCheck, Sparkles, Wallet } from "lucide-react";
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
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Invest in Town Square</h2>
        <p className={styles.subtitle}>Strategic location and premium amenities for secure investment</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
