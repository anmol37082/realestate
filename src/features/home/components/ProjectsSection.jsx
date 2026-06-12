"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
    badge: "For Rent",
    summary:
      "A refined modern retreat with strong geometry, grounded finishes, and a private layered facade.",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Villa Bellagio",
    title: "Villa Bellagio",
    location: "San Francisco, 2024",
    badge: "Sold",
    summary:
      "Clean architecture, generous light, and a seamless indoor-outdoor connection define this villa.",
  },
];

const ANIMATION_DURATION = 700;
const SWIPE_THRESHOLD = 50;

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const visibleProjects = [
    projects[activeIndex],
    projects[(activeIndex + 1) % projects.length],
    projects[(activeIndex + 2) % projects.length],
  ];
  const featuredProject = visibleProjects[0];
  const secondaryProjects = visibleProjects.slice(1);

  const goToProject = useCallback((index, nextDirection) => {
    if (isAnimatingRef.current || index === activeIndex) {
      return;
    }

    setDirection(nextDirection);
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setActiveIndex(index);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimatingRef.current) {
        goToProject((activeIndex + 1) % projects.length, "next");
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, goToProject]);

  useEffect(() => {
    if (!isAnimating) {
      return undefined;
    }

    const timer = setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, isAnimating]);

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    touchEndXRef.current = event.changedTouches[0].screenX;

    const diff = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(diff) < SWIPE_THRESHOLD) {
      return;
    }

    if (diff > 0 && activeIndex < projects.length - 1) {
      goToProject(activeIndex + 1, "next");
    } else if (diff < 0 && activeIndex > 0) {
      goToProject(activeIndex - 1, "prev");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Executed &amp; in-progress projects</h2>
        </div>

        <div className={styles.right} />
      </div>

      <div className={styles.layout}>
        <article
          className={`${styles.card} ${styles.featured}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={`featured-${activeIndex}`}
            className={`${styles.cardContent} ${styles.cardContentFeatured} ${
              direction === "next" ? styles.cardEnterNext : styles.cardEnterPrev
            }`}
          >
            <span className={styles.cardBadge}>{featuredProject.badge}</span>
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
          <div key={activeIndex} className={styles.summaryPanel}>
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
              const motionClass = direction === "next" ? styles.cardEnterNext : styles.cardEnterPrev;

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
