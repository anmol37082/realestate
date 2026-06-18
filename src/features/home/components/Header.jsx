"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const leftLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Payment Plans", href: "/" },
  { label: "contact us", href: "/contact" },
];


const rightLinks = [
  { label: "Rera Number 3j4f9j8r8ugu8eru", href: "/" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === "/" || pathname === "/contact";

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
    <header className={`${styles.header} ${isTransparentPage ? "" : styles.headerSolid}`}>
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
            <Image src="/logo.png" alt="BRICKLINE" width={140} height={40} priority />
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
          <Image src="/logo.png" alt="BRICKLINE" width={140} height={40} />
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
              <Image src="/logo.png" alt="townseqare mohali logo" width={120} height={32} />
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

          </aside>
      </div>
    </header>
  );
}
