import { BadgeCheck, Headset, Landmark, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import styles from "./WhyChooseUsSection.module.css";

const items = [
  {
    icon: <Landmark />,
    title: "Trusted Agency",
    text: "A straightforward process backed by practical market knowledge and consistent follow-up.",
  },
  {
    icon: <BadgeCheck />,
    title: "Verified Listings",
    text: "Selected properties with details that stay aligned with what buyers actually need to know.",
  },
  {
    icon: <Wallet />,
    title: "Best Prices",
    text: "Pricing and positioning that aim for value without unnecessary noise or hidden assumptions.",
  },
  {
    icon: <Headset />,
    title: "24/7 Support",
    text: "Responsive help across the full buying and renting flow, not only when things are simple.",
  },
  {
    icon: <ShieldCheck />,
    title: "Legal Assistance",
    text: "Clear handling of the documents and checkpoints that usually slow people down.",
  },
  {
    icon: <Sparkles />,
    title: "Easy EMI",
    text: "Flexible finance guidance that keeps the experience grounded and usable.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Choose Us</h2>
        <p className={styles.subtitle}>What makes the service feel reliable and direct</p>
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
