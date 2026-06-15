import Link from "next/link";
import { ArrowRight, CheckCheck } from "lucide-react";
import styles from "./FooterCtaSection.module.css";

export default function FooterCtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2>A better business future starts here, Town Square Mohali on NH-205. Where growth, location, and opportunity come together.</h2>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <CheckCheck />
            350+ parking spaces for easy visits and smooth movement
          </div>
          <div className={styles.badge}>
            <CheckCheck />
            8 Lakh+ nearby population for strong daily footfall
          </div>
          <div className={styles.badge}>
            <CheckCheck />
            All-in-one commercial hub, retail, food court, offices & more
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p>
          Step into better opportunities. Explore Town Square Mohali - your smart investment starts here.
        </p>
        <Link href="/" className={styles.contactBtn}>
          Contact Us <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}
