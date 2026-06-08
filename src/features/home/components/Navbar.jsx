import Link from "next/link";
import { ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const leftLinks = ["Projects", "Services", "About Us"];
const rightLinks = ["Properties", "Loan"];

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} d-flex align-items-center justify-content-between`}>
      <div className={styles.navLeft}>
        {leftLinks.map((link) => (
          <Link key={link} href="/" className={styles.navLink}>
            {link}
            {link === "Projects" ? <ChevronDown className={styles.arrow} size={12} /> : null}
          </Link>
        ))}
      </div>

      <Link href="/" className={styles.logo}>
        BRICKLINE.
      </Link>

      <div className={styles.navRight}>
        {rightLinks.map((link) => (
          <Link key={link} href="/" className={styles.navLink}>
            {link}
            {link === "Properties" ? <ChevronDown className={styles.arrow} size={12} /> : null}
          </Link>
        ))}
        <Link href="/" className={styles.contactBtn}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
