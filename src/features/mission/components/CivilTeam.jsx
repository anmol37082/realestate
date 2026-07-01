import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import styles from "./CivilTeam.module.css";

const stages = [
  {
    value: "01",
    icon: Building2,
    title: "Foundation checks and planning",
    text: "The civil team starts with proper checks so the base work stays aligned with the project standard.",
  },
  {
    value: "02",
    icon: ShieldCheck,
    title: "On-site material supervision",
    text: "Every material choice is monitored on site to keep the quality of construction consistent.",
  },
  {
    value: "03",
    icon: ClipboardCheck,
    title: "Stage-wise civil quality review",
    text: "The team reviews the work at each stage so issues are caught before they affect the structure.",
  },
  {
    value: "04",
    icon: BadgeCheck,
    title: "Final finish and handover standards",
    text: "The close-out stage is handled with the same discipline, so the final output feels complete and dependable.",
  },
];

export default function CivilTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Strong civil team</p>
          <h2 className={styles.title}>
            A capable civil team keeps the construction standard consistent.
          </h2>
          <p className={styles.text}>
            The civil team is responsible for making sure the best construction material is used and that the project is executed with discipline, coordination, and accountability.
          </p>
        </div>

        <div className={styles.list}>
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article key={stage.title} className={styles.step}>
                <span className={styles.stepIcon}>
                  <Icon size={18} strokeWidth={2.2} />
                </span>
                <div className={styles.stepCopy}>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
