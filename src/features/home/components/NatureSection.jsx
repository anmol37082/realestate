"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./NatureSection.module.css";

const natureSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    tag: "Prime Location",
    heading: "Built for Business. Designed for Growth.",
    subheading:
      "Discover a commercial destination that brings together retail, office spaces, a food court, and lifestyle experiences.",
   
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    tag: "Town Square Mohali",
    heading: "More Than a Space. A Business Destination.",
    subheading:
      "A place where shopping, work, dining, and opportunities come together.",
  
  },
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    tag: "Welcome to Town Square",
    heading: "Everything Your Business Needs, All in One Place",
    subheading:
      "Retail spaces, offices, food court, entertainment, and daily essentials under one roof.",
   
  },
];

const SWAP_DURATION = 900;

export default function NatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const activeSlide = natureSlides[activeIndex];
  const incomingSlide = incomingIndex === null ? null : natureSlides[incomingIndex];

  const finishTransition = useCallback((nextIndex) => {
    setActiveIndex(nextIndex);
    setIncomingIndex(null);
    setIsTransitioning(false);
    isTransitioningRef.current = false;
  }, []);

  const goToSlide = useCallback(
    (nextIndex, nextDirection) => {
      if (isTransitioningRef.current || nextIndex === activeIndex) {
        return;
      }

      setDirection(nextDirection);
      setIncomingIndex(nextIndex);
      setIsTransitioning(true);
      isTransitioningRef.current = true;

      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      transitionTimerRef.current = setTimeout(() => {
        finishTransition(nextIndex);
      }, SWAP_DURATION);
    },
    [activeIndex, finishTransition]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeIndex + 1) % natureSlides.length, "next");
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, goToSlide]);

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    },
    []
  );

  const goToPrevious = () => {
    const nextIndex = activeIndex === 0 ? natureSlides.length - 1 : activeIndex - 1;
    goToSlide(nextIndex, "prev");
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % natureSlides.length, "next");
  };

  return (
    <section className={styles.section}>
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
            src={activeSlide.image}
            alt={activeSlide.heading}
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>
        {incomingSlide ? (
          <div
            className={`${styles.imageLayer} ${styles.incomingLayer} ${
              direction === "next" ? styles.imageEnterNext : styles.imageEnterPrev
            }`}
          >
            <Image
              src={incomingSlide.image}
              alt={incomingSlide.heading}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ) : null}
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div
          className={`${styles.contentLayer} ${
            isTransitioning
              ? direction === "next"
                ? styles.contentExitNext
                : styles.contentExitPrev
              : ""
          }`}
        >
          <span className={styles.tag}>{activeSlide.tag}</span>
          <h2>{activeSlide.heading}</h2>
          <p className={styles.subheading}>{activeSlide.subheading}</p>
        </div>
        {incomingSlide ? (
          <div
            className={`${styles.contentLayer} ${styles.contentIncoming} ${
              direction === "next" ? styles.contentEnterNext : styles.contentEnterPrev
            }`}
          >
            <span className={styles.tag}>{incomingSlide.tag}</span>
            <h2>{incomingSlide.heading}</h2>
            <p className={styles.subheading}>{incomingSlide.subheading}</p>
          </div>
        ) : null}
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
