import styles from "./StatsSection.module.css";

const stats = [
  { value: "2,500+", label: "Properties Sold" },
  { value: "3,200+", label: "Happy Clients" },
  { value: "25+", label: "Cities Covered" },
  { value: "12+", label: "Awards Won" },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.card}>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
