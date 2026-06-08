"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import styles from "./NatureSection.module.css";

const natureSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    location: "Arizona, United States",
    title: "Stillwater Retreat",
    tag: "Property spotlight",
    heading: "Where every home lives in balance with nature",
    primary: "4 BHK Rental",
    secondary: "Find Property",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    location: "Bali, Indonesia",
    title: "Palm Horizon Villa",
    tag: "Featured banner",
    heading: "Open-air living with calm views and clean lines",
    primary: "Luxury Villas",
    secondary: "Explore Homes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    location: "Lake Tahoe, USA",
    title: "Mountain Crest Residence",
    tag: "Nature collection",
    heading: "A private escape wrapped in trees, light, and silence",
    primary: "Holiday Homes",
    secondary: "View Details",
  },
];

export default function NatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = natureSlides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? natureSlides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % natureSlides.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.media}>
        <Image
          key={activeSlide.image}
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.location}>
        <div className={styles.locTag}>
          <MapPin size={12} />
          {activeSlide.location}
        </div>
        <h3>{activeSlide.title}</h3>
      </div>

      <div key={activeSlide.title} className={styles.content}>
        <span className={styles.tag}>{activeSlide.tag}</span>
        <h2>{activeSlide.heading}</h2>
        <div className={styles.buttons}>
          <Link href="/" className={styles.btn}>
            {activeSlide.primary}
          </Link>
          <Link href="/" className={styles.btn}>
            {activeSlide.secondary} <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className={styles.slider}>
        <button
          type="button"
          className={styles.sliderBtn}
          aria-label="Previous nature slide"
          onClick={goToPrevious}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          className={`${styles.sliderBtn} ${styles.accent}`}
          aria-label="Next nature slide"
          onClick={goToNext}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.counter}>
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(natureSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
