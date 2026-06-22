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

    </section>
  );
}
