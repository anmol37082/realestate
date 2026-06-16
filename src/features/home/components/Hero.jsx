"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/home page video.webm" type="video/webm" />
          <source src="/home page video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          The Future of Commercial Excellence
        </h1>
        <p className={styles.description}>
          A premium commercial destination designed for business, lifestyle, and convenience.
        </p>
      </div>

      <div className={styles.bottomText}>
        Invest in a location that offers excellent visibility, strong customer footfall, and
        long-term growth potential.
      </div>

    </section>
  );
}
