import styles from "./StatsSection.module.css";

const stats = [
  { value: "100%", label: "RERA + CLU Approved Development" },
  { value: "350+", label: "Smartly Designed Parking Spaces" },
  { value: "8 Lakh+", label: "Strong Residential Catchment Base" },
  { value: "Unlimited", label: "Daily Highway Exposure & Footfall" },
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
