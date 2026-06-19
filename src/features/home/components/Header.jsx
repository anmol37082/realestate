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
  { label: "contact us", href: "/contact" },
];

const paymentPlanItems = [
  { label: "Booking 25%" },
  {
    label: "Construction 50%",
    children: [
      "25% after ground floor construction",
      "25% after first floor",
    ],
  },
  { label: "25% possession" },
];


const rightLinks = [
  { label: "RERA NO: PBRERA-SAS80-PC0427-042026", href: "/" },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaymentPlanOpen, setIsPaymentPlanOpen] = useState(false);
  const pathname = usePathname();
  const isTransparentPage = pathname === "/" || pathname === "/contact";

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsPaymentPlanOpen(false);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
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
            <div className={styles.dropdownWrap}>
              <button
                type="button"
                className={styles.navLinkButton}
                aria-expanded={isPaymentPlanOpen}
                aria-controls="payment-plan-menu"
                onClick={() => setIsPaymentPlanOpen((value) => !value)}
              >
                Payment Plans
                <ChevronDown className={styles.arrow} size={12} />
              </button>
              <div
                id="payment-plan-menu"
                className={`${styles.dropdownPanel} ${isPaymentPlanOpen ? styles.dropdownPanelOpen : ""}`}
                role="menu"
                aria-hidden={!isPaymentPlanOpen}
              >
                <div className={styles.dropdownTitle}>Payment Plan</div>
                <ul className={styles.dropdownList}>
                  {paymentPlanItems.map((item) => (
                    <li key={item.label} className={styles.dropdownItem}>
                      {item.label}
                      {item.children ? (
                        <ul className={styles.dropdownSubList}>
                          {item.children.map((child) => (
                            <li key={child} className={styles.dropdownSubItem}>
                              {child}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
        onClick={closeDrawer}
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
              onClick={closeDrawer}
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
                onClick={closeDrawer}
              >
                <span className={styles.drawerLinkIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.drawerLinkLabel}>{link.label}</span>
                {link.label === "Projects" ? <ChevronDown size={14} /> : <ChevronRight size={14} className={styles.drawerLinkArrow} />}
              </Link>
            ))}
            <button
              type="button"
              className={styles.drawerDropdownTrigger}
              aria-expanded={isPaymentPlanOpen}
              aria-controls="mobile-payment-plan"
              onClick={() => setIsPaymentPlanOpen((value) => !value)}
            >
              <span className={styles.drawerLinkIndex}>{String(allLinks.length + 1).padStart(2, "0")}</span>
              <span className={styles.drawerLinkLabel}>Payment Plans</span>
              <ChevronDown size={14} className={isPaymentPlanOpen ? styles.drawerLinkArrowOpen : styles.drawerLinkArrow} />
            </button>
            <div
              id="mobile-payment-plan"
              className={`${styles.drawerDropdown} ${isPaymentPlanOpen ? styles.drawerDropdownOpen : ""}`}
              aria-hidden={!isPaymentPlanOpen}
            >
              {paymentPlanItems.map((item) => (
                <div key={item.label} className={styles.drawerDropdownItem}>
                  {item.label}
                  {item.children ? (
                    <div className={styles.drawerDropdownSubList}>
                      {item.children.map((child) => (
                        <div key={child} className={styles.drawerDropdownSubItem}>
                          {child}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </nav>

        </aside>
      </div>
    </header>
  );
}
