import Link from "next/link";
import { ArrowRight, Building2, CarFront, MapPinned } from "lucide-react";
import styles from "./HighlightsSection.module.css";

const highlights = [
  {
    icon: <MapPinned />,
    title: "Prime Highway Location",
    text: "Located on NH-205, offering excellent visibility and easy access for businesses.",
  },
  {
    icon: <CarFront />,
    title: "Modern Facilities",
    text: "Ample parking, EV charging stations, and thoughtfully planned infrastructure.",
  },
  {
    icon: <Building2 />,
    title: "Excellent Connectivity",
    text: "Well connected to Chandigarh, Mohali, Kharar, Punjab, Haryana, and Himachal Pradesh.",
  },
];

export default function HighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Town Square is a Great Choice</h2>
        <Link href="/" className={styles.outlineBtn}>
          Get Started <ArrowRight size={14} />
        </Link>
      </div>

      <div className={styles.grid}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href="/" className={styles.learnMore}>
              Learn More <ArrowRight size={12} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
