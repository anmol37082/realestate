import Image from "next/image";
import styles from "./QualityPromise.module.css";

const promises = [
  {
    value: "01",
    imageSrc: "/banner1.webp",
    imageAlt: "Town Square premium construction banner",
    title: "Material verification",
    text: "Construction inputs are reviewed before use so the project stays aligned with the highest quality standard.",
  },
  {
    value: "02",
    imageSrc: "/contact/hero.webp",
    imageAlt: "Town Square project and development visual",
    title: "Site-level discipline",
    text: "Execution stays on check through inspections, coordination, and the right sequence of work.",
  },
  {
    value: "03",
    imageSrc: "/contact/contactform5.webp",
    imageAlt: "Town Square quality focused visual",
    title: "Long-term durability",
    text: "The goal is not just a finished structure, but a building that performs well over time.",
  },
  {
    value: "04",
    imageSrc: "/cards/PREMIUMRETAIL.webp",
    imageAlt: "Town Square finish quality visual",
    title: "Finish quality",
    text: "The final output should reflect the discipline used throughout the project, not just at the end.",
  },
];

export default function QualityPromise() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Quality promise</p>
          <h2 className={styles.title}>The project deserves material and workmanship that do not compromise.</h2>
          <p className={styles.text}>
            The mission is simple: use the highest quality materials available and make sure the construction process reflects that standard at every stage.
          </p>
        </div>

        <div className={styles.promiseGrid}>
          {promises.map((promise) => (
            <article key={promise.title} className={styles.promiseCard}>
              <div className={styles.mediaWrap}>
                <Image
                  src={promise.imageSrc}
                  alt={promise.imageAlt}
                  fill
                  sizes="(max-width: 960px) 100vw, 25vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.cardIndex}>{promise.value}</span>
                <h3>{promise.title}</h3>
                <p>{promise.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
