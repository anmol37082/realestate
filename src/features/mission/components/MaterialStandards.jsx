import Image from "next/image";
import styles from "./MaterialStandards.module.css";

const standards = [
  {
    value: "01",
    imageSrc: "/cards/modernoffice.webp",
    imageAlt: "Foundation-first thinking visual",
    title: "Foundation-first thinking",
    text: "The structure starts with the base. The mission keeps attention on the foundation and the quality of the work below the surface.",
  },
  {
    value: "02",
    imageSrc: "/cards/PREMIUMRETAIL.webp",
    imageAlt: "Verified product selection visual",
    title: "Verified product selection",
    text: "Material choice is deliberate so every product supports strength, safety, and long-term performance.",
  },
  {
    value: "03",
    imageSrc: "/cards/FITNESS&WELLNESS.webp",
    imageAlt: "Supervised execution visual",
    title: "Supervised execution",
    text: "Work is inspected and managed so the team can act early when something does not meet the standard.",
  },
  {
    value: "04",
    imageSrc: "/cards/ENTERTAINMENTZONE.webp",
    imageAlt: "Finish quality visual",
    title: "Finish quality",
    text: "The final output should reflect the discipline used throughout the project, not just at the end.",
  },
];

export default function MaterialStandards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.label}>Material standards</p>
          <h2 className={styles.title}>Highest quality is a process, not just a promise.</h2>
        </div>

        <div className={styles.stack}>
          {standards.map((standard) => (
            <article key={standard.title} className={`${styles.row} ${Number(standard.value) % 2 === 0 ? styles.rowReverse : ""}`}>
              <div className={styles.mediaWrap}>
                <Image
                  src={standard.imageSrc}
                  alt={standard.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.copy}>
                <span className={styles.index}>{standard.value}</span>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
