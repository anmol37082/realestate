import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./RecentProjectsSection.module.css";

const cards = [
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Botanik kitchen and restaurant",
    title: "Retail Excellence",
    desc: "Smart commercial spaces designed for modern businesses.",
    accent: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    alt: "Prime edge business park",
    title: "Business Hub",
    desc: "A destination where businesses can grow with confidence.",
    accent: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Renewasphere district",
    title: "Lifestyle Destination",
    desc: "Bringing together shopping, dining, and convenience in one place.",
    accent: true,
  },
];

export default function RecentProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Why Town Square?</span>
        <h2 className={styles.title}>Everything that makes Town Square the right choice. </h2>
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
