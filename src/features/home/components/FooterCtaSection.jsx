import Link from "next/link";
import { ArrowRight, CheckCheck } from "lucide-react";
import styles from "./FooterCtaSection.module.css";

export default function FooterCtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>A cleaner tomorrow starts from today - with zero pollution</h2>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <CheckCheck />
            We are working since 1990
          </div>
          <div className={styles.badge}>
            <CheckCheck />
            You can call all latest support
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p>
          Unlock the door to your future. Explore the best properties in town with trusted
          experts by your side. Buy, sell, or invest - your journey starts here.
        </p>
        <Link href="/" className={styles.contactBtn}>
          Contact Us <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
