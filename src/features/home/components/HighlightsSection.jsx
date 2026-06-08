import Link from "next/link";
import { ArrowRight, Globe, House, Lock } from "lucide-react";
import styles from "./HighlightsSection.module.css";

const highlights = [
  {
    icon: <House />,
    title: "Anywhere feels like home",
    text: "Every home is thoughtfully equipped for immediate comfort, offering a space where no detail is left to chance.",
  },
  {
    icon: <Lock />,
    title: "Live securely without boundaries",
    text: "Each residence is crafted to provide immediate comfort, where every element is purposefully chosen.",
  },
  {
    icon: <Globe />,
    title: "Just a click away the world",
    text: "Step into a home where comfort greets you instantly and every detail reflects refined solid taste.",
  },
];

export default function HighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Outstanding highlights</h2>
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
