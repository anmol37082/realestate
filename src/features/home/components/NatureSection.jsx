"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./NatureSection.module.css";

const natureSlides = [
  {
    image: "/mapimage.webp",
    tag: "Prime Location",
    heading: "Built for Business. Designed for Growth.",
    subheading:
      "Discover a commercial destination that brings together retail, office spaces, a food court, and lifestyle experiences.",
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
    if (natureSlides.length <= 1) return;

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
        <div className={styles.imageLayer}>
          <Image
            src={activeSlide.image}
            alt={activeSlide.heading}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={styles.overlay} />
    </section>
  );
}
