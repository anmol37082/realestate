import styles from "./MissionHero.module.css";

export default function MissionHero() {
  return (
    <section className={styles.section}>
      <div className={styles.media} aria-hidden="true">
        <div className={styles.mediaShade} />
      </div>

      <div className={styles.container}>
        <div className={styles.copyCard}>
          <h1 className={styles.title}>Build Town Square with quality that lasts.</h1>
          <p className={styles.subtitle}>
            The developer main focus is to develop the Town Square project with disciplined execution,
            premium construction material, and a civil team that makes sure the right materials are used at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
