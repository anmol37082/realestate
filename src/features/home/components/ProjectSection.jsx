"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import styles from "./ProjectSection.module.css";

const projects = [
  {
    src: "/cards/PREMIUMRETAIL.webp",
    alt: "Premium retail space exterior",
    title: "PREMIUM RETAIL",
    type: "Town Square",
    location: "NH-205, Mohali",
    details: "Premium retail outlets designed for brands, lifestyle stores and everyday shopping.",
    tags: "Retail | Daily Needs | High Visibility",
  },
  {
    src: "/cards/modernoffice.webp",
    alt: "Modern office building exterior",
    title: "MODERN OFFICES",
    type: "Town Square",
    location: "Sector-127, Mohali",
    details:
      "Contemporary office spaces crafted for productivity, growth and business success. ",
       tags: "Offices | Pro Spaces | Growth Hub",
  },
  {
    src: "/cards/cafe.webp",
    alt: "Food court and cafe area exterior",
    title: "FOOD COURT & CAFES",
    type: "Town Square",
    location: "Kharar–Landran Road",
    details:
      "A vibrant dining destination offering diverse food experiences and cafe spaces.",
    tags: "Food Court | Cafes | Rooftop Garden",
  },
  {
    src: "/cards/ENTERTAINMENTZONE.webp",
    alt: "Entertainment zone interior",
    title: "ENTERTAINMENT ZONE",
    type: "Town Square",
    location: "NH-205, Mohali",
    details:
      "Exciting entertainment spaces designed to create fun and engaging experiences. ",
    tags: "Gaming | Leisure | Family Friendly",
  },
  {
    src: "/cards/FITNESS&WELLNESS.webp",
    alt: "Fitness and wellness space interior",
    title: "FITNESS & WELLNESS",
    type: "Town Square",
    location: "Sector-127, Mohali",
    details:
      "A modern gymnasium designed for health, fitness and an active lifestyle.",
    tags: "Gymnasium | Wellness | Active Living",
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
    <section id="projects" className={styles.section}>

      <div className={styles.header}>
        <span className={styles.tag}>Projects</span>
        <h2 className={styles.title}>A Smart Investment Destination</h2>
<div className={styles.subtitle}>
              <p className={styles.subtitleLead}>Well-planned commercial spaces in a prime location with modern infrastructure and excellent future prospects.</p>
        </div>
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

                   <div className={styles.tagsRow}>
                     {project.tags?.split(" | ").map((tag, i) => (
                       <span key={i} className={styles.detailTag}>{tag}</span>
                     ))}
                   </div>

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
