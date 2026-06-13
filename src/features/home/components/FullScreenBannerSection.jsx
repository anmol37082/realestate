"use client";

import Image from "next/image";
import styles from "./FullScreenBannerSection.module.css";

export default function FullScreenBannerSection() {
  return (
    <section className={styles.section} aria-label="Featured banner">
      <div className={styles.media}>
        <Image
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80"
          alt="Elegant luxury residence interior"
          fill
          sizes="100vw"
          priority={false}
          className={styles.image}
        />
      </div>
    </section>
  );
}
