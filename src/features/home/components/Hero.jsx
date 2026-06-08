"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
    alt: "Premium real estate interior",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    alt: "Luxury modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&q=80",
    alt: "Elegant home exterior",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];

  const goToPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveSlide((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Image
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.tag}>Signature home</span>
        <h1 className={styles.title}>
          Your high-end
          <br />
          Haven awaits
        </h1>
        <p className={styles.description}>
          Discover lavish interiors, curated design, premium amenities, and personalized
          services that define an elevated lifestyle.
        </p>
        <Link href="/" className={styles.primaryBtn}>
          Find Property <ArrowRight size={14} />
        </Link>
      </div>

      <div className={styles.slider} aria-label="Hero slider controls">
        <button type="button" className={styles.sliderBtn} aria-label="Previous slide" onClick={goToPrevious}>
          <ChevronLeft size={14} />
        </button>
        <div className={styles.track} />
        <button type="button" className={styles.sliderBtn} aria-label="Next slide" onClick={goToNext}>
          <ChevronRight size={14} />
        </button>
      </div>

      <div className={styles.bottomText}>
        Unlock the potential of real estate with strategic insights, innovative solutions, and
        exceptional service.
      </div>

      <div className={styles.consultCard}>
        <Phone size={20} />
        <span>Book a Consultation</span>
      </div>
    </section>
  );
}
