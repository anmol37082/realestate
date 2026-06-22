import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/JsonLd";
import { absoluteUrl, siteDescription, siteName } from "../../lib/site";
import { blogPosts, getBlogPostUrl } from "../../lib/blogPosts";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Read Mohali Town Square insights on commercial property, investment strategy, market trends, and buying guides for Mohali real estate.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/blog",
    siteName,
    title: "Blog | Mohali Town Square",
    description:
      "Read Mohali Town Square insights on commercial property, investment strategy, market trends, and buying guides for Mohali real estate.",
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1600,
        height: 900,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mohali Town Square",
    description:
      "Read Mohali Town Square insights on commercial property, investment strategy, market trends, and buying guides for Mohali real estate.",
    images: [absoluteUrl("/logo.png")],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog | Mohali Town Square",
  url: absoluteUrl("/blog"),
  description:
    "Read Mohali Town Square insights on commercial property, investment strategy, market trends, and buying guides for Mohali real estate.",
  about: {
    "@type": "RealEstateAgent",
    name: siteName,
    url: absoluteUrl("/"),
    description: siteDescription,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mohali Town Square Blog Posts",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(getBlogPostUrl(post.slug)),
    name: post.title,
  })),
};

export default function BlogIndexPage() {
  return (
    <main className={styles.page}>
      <JsonLd data={collectionSchema} />
      <JsonLd data={itemListSchema} />

      <section className={styles.hero}>
        <p className={styles.kicker}>Blog</p>
        <h1 className={styles.title}>Insights on Commercial Property in Mohali</h1>
        <p className={styles.subtitle}>
          Practical guides, market trends, and investment perspective focused on Town Square Mohali and the wider commercial real estate market.
        </p>
      </section>

      <section className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <Link href={getBlogPostUrl(post.slug)} className={styles.cardLink}>
              <div className={styles.imageWrap}>
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className={styles.readMore}>Read article</span>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <aside className={styles.aside}>
        <p className={styles.asideLabel}>Why this blog exists</p>
        <p>
          To help buyers and investors understand commercial property decisions with clearer context, better due diligence, and stronger long-term thinking.
        </p>
      </aside>
    </main>
  );
}
