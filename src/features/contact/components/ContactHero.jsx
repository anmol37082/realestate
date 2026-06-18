import Image from "next/image";
import Link from "next/link";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <div className={styles.imageLayer}>
          <Image
            src="https://images.unsplash.com/photo-1778222013870-030471426e2c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <Link href="#contact-form" className={styles.primaryBtn}>
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
