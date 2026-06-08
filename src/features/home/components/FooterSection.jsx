import Link from "next/link";
import styles from "./FooterSection.module.css";

const navLinks = ["Loan", "Projects", "Our service", "About us"];
const legalLinks = ["Terms of Service", "Privacy Policy"];

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>BRICKLINE</div>
      <div className={styles.social}>
        <Link href="/">in</Link>
        <Link href="/">X</Link>
        <Link href="/">f</Link>
        <Link href="/">ig</Link>
      </div>
      <div className={styles.center}>© 2025 Ryle Studio. All rights reserved.</div>
      <div className={styles.nav}>
        {navLinks.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </div>
      <div className={styles.links}>
        {legalLinks.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </div>
    </footer>
  );
}
