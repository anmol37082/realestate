import styles from "./MissionPillars.module.css";

const pillars = [
  {
    title: "Focused development",
    text: "Town Square is the core priority, so planning, execution, and delivery stay aligned to one standard.",
  },
  {
    title: "Quality material choice",
    text: "Only the best construction material is selected to support durability, performance, and long-term value.",
  },
  {
    title: "Strong civil supervision",
    text: "A capable civil team keeps checks in place so quality is protected from foundation to finish.",
  },
];

export default function MissionPillars() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.label}>What drives the mission</p>
          <h2 className={styles.title}>Every decision should protect the project and the buyer.</h2>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className={styles.card}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
