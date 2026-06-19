import Image from "next/image";
import styles from "./page.module.css";

const article = {
  title: "Commercial Real Estate Trends in 2026",
  category: "Investment",
  date: "May 28, 2026",
  read: "7 min read",
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
};

export default function CommercialRealEstateTrends2026Page() {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <p className={styles.kicker}>{article.category}</p>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.meta}>{article.date} · {article.read}</p>
        <Image src={article.hero} alt={article.title} width={1600} height={900} className={styles.image} priority />
        <div className={styles.content}>
          <p>
            Commercial real estate in 2026 is being shaped by demand for flexible spaces, better retail visibility,
            and projects that serve both business and lifestyle needs.
          </p>
          <p>
            Investors are paying closer attention to mixed-use developments, walkable locations, and properties near expanding residential hubs.
            These factors are influencing both occupancy and rental performance.
          </p>
          <p className={styles.quote}>
            To stay ahead, compare projects on infrastructure readiness, lease potential, and long-term neighborhood growth rather than price alone.
          </p>
          <h2 className={styles.sectionTitle}>What Buyers Are Looking For</h2>
          <p>
            The strongest projects in 2026 are the ones that feel practical on day one and valuable over the long term.
          </p>
          <ul className={styles.contentList}>
            <li>Better customer accessibility</li>
            <li>Visible front-facing retail units</li>
            <li>Spaces that support both retail and office demand</li>
            <li>Projects with room for future neighborhood growth</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
