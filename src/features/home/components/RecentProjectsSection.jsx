import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./RecentProjectsSection.module.css";

const cards = [
  {
    src: "/purpose/APlacetoShop.webp",
    alt: "Retail space",
    title: "A Place to Shop",
    desc: "Discover spaces designed for retail.",
    accent: true,
  },
  {
    src: "/purpose/APlacetowork.webp",
    alt: "Office space",
    title: "A Place to Work",
    desc: "Modern offices for growing businesses.",
    accent: true,
  },
  {
    src: "/purpose/APlacetogather.webp",
    alt: "Community space",
    title: "A Place to Gather",
    desc: "Food, lifestyle, and everyday convenience together.",
    accent: true,
  },
];


export default function RecentProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Every Space Has a Purpose</h2>
        <p className={styles.subtitle}>
          Thoughtfully designed spaces where businesses grow, and people connect.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <Image src={card.src} alt={card.alt} width={800} height={240} className={styles.image} />
            <div className={styles.body}>
              {card.tags ? (
                <div className={styles.tagsRow}>
                  {card.tags.map((tag) => (
                    <span key={`${card.title}-${tag.label}`} className={styles.chip}>
                      {tag.icon ? tag.icon : null}
                      {tag.label}
                    </span>
                  ))}
                </div>
              ) : null}
              <h3>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
              <Link href="/" className={`${styles.viewBtn} ${card.accent ? styles.accent : ""}`}>
                View Details <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
