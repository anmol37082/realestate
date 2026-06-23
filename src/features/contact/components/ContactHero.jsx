import Image from "next/image";
import Link from "next/link";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <div className={styles.imageLayer}>
          <Image
            src="/contact/hero.webp"
            alt="Modern apartment buildings against a cloudy sky"
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>Contact town sqare mohali</span>
        <h1>Ready to Explore Town Square?</h1>
        <p>Our team is here to help you with project details, space availability, and site visits.</p>
        <div className={styles.actions}>
          <Link href="#contact-info" className={styles.primaryBtn}>
            Send Enquiry
          </Link>
          <Link href="#office-location" className={styles.secondaryBtn}>
            Visit Office
          </Link>
        </div>
      </div>
    </section>
  );
}
