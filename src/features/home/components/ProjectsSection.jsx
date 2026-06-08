"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Golden Horizon Villa",
    title: "Golden Horizon Villa",
    location: "South Carolina, 2025",
    badge: "For Sale",
    summary:
      "Bright, open interiors with warm textures and a calm resort feel make this home stand out instantly.",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Maison Noire",
    title: "Maison Noire",
    location: "Oklahoma City, 2024",
    summary:
      "A refined modern retreat with strong geometry, grounded finishes, and a private layered facade.",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Villa Bellagio",
    title: "Villa Bellagio",
    location: "San Francisco, 2024",
    summary:
      "Clean architecture, generous light, and a seamless indoor-outdoor connection define this villa.",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const visibleProjects = [
    projects[activeIndex],
    projects[(activeIndex + 1) % projects.length],
    projects[(activeIndex + 2) % projects.length],
  ];
  const featuredProject = visibleProjects[0];
  const secondaryProjects = visibleProjects.slice(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Executed &amp; in-progress projects</h2>
        </div>

        <div className={styles.right} />
      </div>

      <div className={styles.layout}>
        <article className={`${styles.card} ${styles.featured}`}>
          <span className={styles.cardBadge}>For Sale</span>
          <div key={`featured-${activeIndex}`} className={`${styles.cardContent} ${styles.cardContentFeatured}`}>
            <div className={styles.imageWrap}>
              <Image
                src={featuredProject.src}
                alt={featuredProject.alt}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <h3>{featuredProject.title}</h3>
              <div className={styles.location}>{featuredProject.location}</div>
            </div>
          </div>
        </article>

        <div className={styles.sideRail}>
          <div
            key={activeIndex}
            className={`${styles.summaryPanel} ${styles.cardContent} ${
              direction === "next" ? styles.cardContentNext : styles.cardContentPrev
            }`}
          >
            <p
              className={`${styles.summaryText} ${
                direction === "next" ? styles.summarySlideNext : styles.summarySlidePrev
              }`}
            >
              {featuredProject.summary}
            </p>
          </div>

          <div className={styles.sideCards}>
            {secondaryProjects.map((project, index) => {
              const motionClass =
                direction === "next" ? styles.cardContentNext : styles.cardContentPrev;

              return (
                <article key={index} className={styles.card}>
                  <div key={`${activeIndex}-${index + 1}`} className={`${styles.cardContent} ${motionClass}`}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 24vw"
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.info}>
                      <h3>{project.title}</h3>
                      <div className={styles.location}>{project.location}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
