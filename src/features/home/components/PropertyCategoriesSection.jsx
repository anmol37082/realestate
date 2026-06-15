import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  Ticket,
} from "lucide-react";
import styles from "./PropertyCategoriesSection.module.css";

const categories = [
  {
    icon: <Landmark />,
    title: "Retail Showrooms",
    count: "Premium Spaces",
    text: "Premium retail spaces designed to attract customers and support business growth.",
  },
  {
    icon: <UtensilsCrossed />,
    title: "Food Court",
    count: "Dining Destination",
    text: "A vibrant dining destination where visitors can relax and enjoy a variety of food options.",
  },
  {
    icon: <Building2 />,
    title: "Office Spaces",
    count: "Workspaces",
    text: "Modern workspaces built for professionals, startups, and expanding businesses.",
  },
  {
    icon: <Ticket />,
    title: "Entertainment Zone",
    count: "Experience Hub",
    text: "Engaging spaces that create memorable experiences and increase footfall.",
  },
  {
    icon: <Dumbbell />,
    title: "Gymnasium",
    count: "Wellness Space",
    text: "A dedicated fitness space designed for health, wellness, and an active lifestyle.",
  },
  {
    icon: <ShoppingBag />,
    title: "Daily Needs Stores",
    count: "Convenience Retail",
    text: "Convenient outlets offering essential products and everyday services.",
  },
];

export default function PropertyCategoriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Property Categories Page</h2>
        <p className={styles.subtitle}>Spaces for Every Business Need</p>
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <article key={category.title} className={styles.card}>
            <div className={styles.icon}>{category.icon}</div>
            <div className={styles.meta}>
              <h3>{category.title}</h3>
              <span>{category.count}</span>
            </div>
            <p>{category.text}</p>
            <Link href="/" className={styles.link}>
              Browse Category <ArrowRight size={12} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
