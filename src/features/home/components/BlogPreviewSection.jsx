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
    title: "5 Essential Tips for First-Time Home Buyers",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    alt: "Investment locations",
    category: "Investment",
    date: "May 28, 2026",
    read: "7 min read",
    title: "Top 10 Investment Locations in India for 2026",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    alt: "Home loan approval",
    category: "Finance",
    date: "May 15, 2026",
    read: "4 min read",
    title: "How to Get Home Loan Approval in 2026",
  },
];

export default function BlogPreviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Latest Insights</h2>
        <p className={styles.subtitle}>Tips, guides, and market updates</p>
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
              <Link href="/" className={styles.link}>
                Read More <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
