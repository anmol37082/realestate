import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./BlogPreviewSection.module.css";

const posts = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    alt: "First-time home buying",
    category: "Buying Guide",
    date: "June 10, 2026",
    read: "5 min read",
    title: "Top Benefits of Investing in Commercial Property in Mohali",
    href: "/blog/investing-in-commercial-property-in-mohali",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Investment locations",
    category: "Investment",
    date: "May 28, 2026",
    read: "7 min read",
    title: "Commercial Real Estate Trends in 2026",
    href: "/blog/commercial-real-estate-trends-2026",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    alt: "Home loan approval",
    category: "Finance",
    date: "May 15, 2026",
    read: "4 min read",
    title: "5 Factors to Check Before Buying a Commercial Shop",
    href: "/blog/five-factors-before-buying-a-commercial-shop",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Every Space Has a Purpose</h2>
        <p className={styles.subtitle}>Thoughtfully designed spaces where businesses grow, and people connect.
</p>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image src={post.src} alt={post.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
              <span className={styles.category}>{post.category}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.meta}>
                <span>{post.date}</span>
                <span>{post.read}</span>
              </div>
              <h3>{post.title}</h3>
              <Link href={post.href} className={styles.link}>
                Read More <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
