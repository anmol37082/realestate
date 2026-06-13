"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const leftLinks = [
  { label: "Projects", href: "/" },
  { label: "Payment Plans", href: "/" },
  { label: "About Us", href: "/" },
];

const rightLinks = [
  { label: "Rare Number 3f4d55hes", href: "/" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.desktopNav}>
        <nav className={styles.navbar} aria-label="Primary">
          <div className={styles.navLeft}>
            {leftLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
                {link.label === "Projects" ? <ChevronDown className={styles.arrow} size={12} /> : null}
              </Link>
            ))}
          </div>

          <Link href="/" className={styles.logo}>
            BRICKLINE.
          </Link>

          <div className={styles.navRight}>
            {rightLinks.map((link) => (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className={styles.mobileNav}>
        <Link href="/" className={styles.logo}>
          BRICKLINE.
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsDrawerOpen((value) => !value)}
        >
          {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.drawerBackdrop} ${isDrawerOpen ? styles.drawerBackdropOpen : ""}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden={!isDrawerOpen}
      >
        <aside
          className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.drawerTop}>
            <div className={styles.drawerBrand}>
              <span className={styles.drawerBrandMark}>B</span>
              <div className={styles.drawerBrandCopy}>
                <span className={styles.drawerBrandName}>BRICKLINE</span>
                <span className={styles.drawerBrandTag}>Premium real estate</span>
              </div>
            </div>
            <button
              type="button"
              className={styles.drawerClose}
              aria-label="Close menu"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>Menu</span>
          </div>

          <nav className={styles.drawerNav} aria-label="Mobile primary">
            {allLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.drawerLink}
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className={styles.drawerLinkIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.drawerLinkLabel}>{link.label}</span>
                {link.label === "Projects" ? <ChevronDown size={14} /> : <ChevronRight size={14} className={styles.drawerLinkArrow} />}
              </Link>
            ))}
          </nav>

          <Link href="/" className={styles.drawerCta} onClick={() => setIsDrawerOpen(false)}>
            Request Callback
          </Link>

        </aside>
      </div>
    </header>
  );
}
