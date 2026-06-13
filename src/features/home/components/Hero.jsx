"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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

const SWAP_DURATION = 900;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [incomingSlide, setIncomingSlide] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const currentSlide = slides[activeSlide];
  const nextSlide = incomingSlide === null ? null : slides[incomingSlide];

  const finishTransition = useCallback((nextIndex) => {
    setActiveSlide(nextIndex);
    setIncomingSlide(null);
    setIsTransitioning(false);
    isTransitioningRef.current = false;
  }, []);

  const goToSlide = useCallback(
    (nextIndex, nextDirection) => {
      if (isTransitioningRef.current || nextIndex === activeSlide) {
        return;
      }

      setDirection(nextDirection);
      setIncomingSlide(nextIndex);
      setIsTransitioning(true);
      isTransitioningRef.current = true;

      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      transitionTimerRef.current = setTimeout(() => {
        finishTransition(nextIndex);
      }, SWAP_DURATION);
    },
    [activeSlide, finishTransition]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeSlide + 1) % slides.length, "next");
    }, 5000);

    return () => clearInterval(timer);
  }, [activeSlide, goToSlide]);

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    },
    []
  );

  const goToPrevious = () => {
    const nextIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
    goToSlide(nextIndex, "prev");
  };

  const goToNext = () => {
    goToSlide((activeSlide + 1) % slides.length, "next");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <div
          className={`${styles.imageLayer} ${styles.currentLayer} ${
            isTransitioning
              ? direction === "next"
                ? styles.imageExitNext
                : styles.imageExitPrev
              : ""
          }`}
        >
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />
        </div>
        {nextSlide ? (
          <div
            className={`${styles.imageLayer} ${styles.incomingLayer} ${
              direction === "next" ? styles.imageEnterNext : styles.imageEnterPrev
            }`}
          >
            <Image
              src={nextSlide.src}
              alt={nextSlide.alt}
              fill
              priority
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ) : null}
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
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

    </section>
  );
}
