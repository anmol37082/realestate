import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.tag}>Start Your Search</span>
        <h2>Ready to explore the right property?</h2>
        <p>Connect with Brickline today and get shortlisted options based on your budget, location, and investment goals.</p>
        <Link href="#contact-form" className={styles.cta}>
          Talk to an Advisor
        </Link>
      </div>
    </section>
  );
}
