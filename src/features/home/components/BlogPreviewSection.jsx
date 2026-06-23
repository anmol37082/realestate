import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollTextTitle from "./ScrollTextTitle";
import { blogPosts, getBlogPostUrl } from "../../../lib/blogPosts";
import styles from "./BlogPreviewSection.module.css";

export default function BlogPreviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <ScrollTextTitle className={styles.title}>Every Space Has a Purpose</ScrollTextTitle>
        <p className={styles.subtitle}>Thoughtfully designed spaces where businesses grow, and people connect.
</p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.image}
              />
              <span className={styles.category}>{post.category}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.meta}>
                <span>{post.date}</span>
                <span>{post.read}</span>
              </div>
              <h3>{post.title}</h3>
              <Link href={getBlogPostUrl(post.slug)} className={styles.link}>
                Read More <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
