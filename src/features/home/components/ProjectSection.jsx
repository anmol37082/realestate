"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import styles from "./ProjectSection.module.css";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80",
    alt: "Luxury apartment exterior",
    title: "Skyline Residences",
    type: "Luxury Apartments",
    location: "Bandra West, Mumbai",
    details: "42 units | rooftop lounge | city views",
  },
  {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
    alt: "Private home exterior",
    title: "Courtyard Villas",
    type: "Private Homes",
    location: "Sector 62, Gurgaon",
    details: "18 villas | green courts | gated community",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
    alt: "Commercial building exterior",
    title: "Commerce District",
    type: "Mixed-Use Hub",
    location: "Outer Ring Road, Bangalore",
    details: "12 suites | retail base | office floors",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    alt: "Modern premium residence",
    title: "Aura Heights",
    type: "Premium Living",
    location: "Whitefield, Bangalore",
    details: "28 units | sky deck | private concierge",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    alt: "Contemporary villa exterior",
    title: "Olive Crest",
    type: "Contemporary Villas",
    location: "Koregaon Park, Pune",
    details: "24 villas | private garden | calm streets",
  },
];

const AUTOPLAY_MS = 4200;

function getOffset(index, activeIndex, length) {
  let offset = index - activeIndex;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [paused]);

  const goToSlide = (nextIndex) => {
    setActiveIndex((nextIndex + projects.length) % projects.length);
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      goNext();
      return;
    }

    goToSlide(index);
  };

  const goPrev = () => goToSlide(activeIndex - 1);
  const goNext = () => goToSlide(activeIndex + 1);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Projects</span>
        <h2 className={styles.title}>Featured developments</h2>
        <p className={styles.subtitle}>
          Selected launches with strong location value, premium planning, and clean architecture.
        </p>
      </div>

      <div
        className={styles.swiper}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button type="button" className={`${styles.navBtn} ${styles.prevBtn}`} onClick={goPrev} aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>

        <div className={styles.stage}>
          {projects.map((project, index) => {
            const offset = getOffset(index, activeIndex, projects.length);
            const isActive = offset === 0;

            return (
              <article
                key={project.title}
                className={styles.card}
                data-offset={offset}
                aria-hidden={!isActive}
                style={{ "--offset": offset }}
              >
                <button
                  type="button"
                  className={styles.mediaButton}
                  onClick={() => handleCardClick(index)}
                  aria-label={`View ${project.title}`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                  <span className={styles.badge}>{project.type}</span>
                </button>

                <div className={styles.body}>
                  <div className={styles.metaRow}>
                    <span className={styles.location}>
                      <MapPin size={14} />
                      {project.location}
                    </span>
                    <span className={styles.newPill}>NEW</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className={styles.details}>{project.details}</p>

                  <Link href="/" className={styles.link} onClick={(event) => event.stopPropagation()}>
                    View Project <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <button type="button" className={`${styles.navBtn} ${styles.nextBtn}`} onClick={goNext} aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className={styles.dots} aria-label="Project carousel pagination">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}
