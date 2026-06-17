import styles from "./CompanyStats.module.css";

const stats = [
  { value: "100%", label: "RERA + CLU Approved Development" },
  { value: "350+", label: "Smartly Designed Parking Spaces" },
  { value: "8 Lakh+", label: "Strong Residential Catchment Base" },
  { value: "Unlimited", label: "Daily Highway Exposure & Footfall" },
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
