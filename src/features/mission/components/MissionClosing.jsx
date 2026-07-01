import Link from "next/link";
import styles from "./MissionClosing.module.css";

export default function MissionClosing() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.copy}>
            <p className={styles.label}>Our commitment</p>
            <h2 className={styles.title}>The mission is to deliver Town Square with quality you can trust.</h2>
            <p className={styles.text}>
              From the developer focus to the civil team to the material selection, every layer should support the same goal: a better built project.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryAction}>
              Contact us
            </Link>
            <Link href="/gallery" className={styles.secondaryAction}>
              See gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
