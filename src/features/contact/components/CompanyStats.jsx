import styles from "./CompanyStats.module.css";

const stats = [
  {
    value: "1200+",
    label: "Happy Clients",
  },
  {
    value: "85+",
    label: "Premium Projects",
  },
  {
    value: "15+",
    label: "Cities Covered",
  },
  {
    value: "24/7",
    label: "Support Access",
  },
];

export default function CompanyStats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
