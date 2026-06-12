import Link from "next/link";
import {
  ArrowRight,
  Building2,
  House,
  Landmark,
  MapPinned,
  Trees,
  Warehouse,
} from "lucide-react";
import styles from "./PropertyCategoriesSection.module.css";

const categories = [
  {
    icon: <House />,
    title: "Villa",
    count: "120+ Properties",
    text: "Private homes with open layouts and premium finishes.",
  },
  {
    icon: <Building2 />,
    title: "Apartment",
    count: "350+ Properties",
    text: "City living with practical layouts and modern amenities.",
  },
  {
    icon: <Landmark />,
    title: "Commercial",
    count: "80+ Properties",
    text: "Business spaces built for visibility and long-term value.",
  },
  {
    icon: <MapPinned />,
    title: "Plot / Land",
    count: "200+ Properties",
    text: "Flexible plots ready for your next residential project.",
  },
  {
    icon: <Trees />,
    title: "Farmhouse",
    count: "45+ Properties",
    text: "Calm spaces with more land, privacy, and green surroundings.",
  },
  {
    icon: <Warehouse />,
    title: "Penthouse",
    count: "30+ Properties",
    text: "Elevated homes with wide views and strong indoor comfort.",
  },
];

export default function PropertyCategoriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Property Categories</h2>
        <p className={styles.subtitle}>Explore properties by type</p>
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
