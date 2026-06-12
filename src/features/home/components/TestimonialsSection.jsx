"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    mainSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Client testimonial one",
    name: "Gregg Bergstrom",
    email: "gregg.bergstrom@gmail.com",
    text1:
      "Working with Bricklane was a fantastic experience from start to finish. They listened to exactly what I wanted, and within a few short weeks, I found my dream home.",
    text2:
      "They went above and beyond to ensure everything went smoothly. Communication was always clear and timely.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    alt: "Client testimonial two",
    name: "Ava Mitchell",
    email: "ava.mitchell@gmail.com",
    text1:
      "The team understood the brief quickly and showed us homes that matched our style, budget, and long-term plans without wasting time.",
    text2:
      "Every step felt organized and calm. Their guidance made a stressful process feel simple and transparent.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    alt: "Client testimonial three",
    name: "Noah Carter",
    email: "noah.carter@gmail.com",
    text1:
      "Their market knowledge was excellent. We got clear advice on value, timing, and what improvements would matter most.",
    text2:
      "We ended up with a property that felt right from day one, and the closing process was handled very efficiently.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    alt: "Client testimonial four",
    name: "Sofia Lane",
    email: "sofia.lane@gmail.com",
    text1:
      "What stood out most was the attention to detail. Nothing felt rushed, and every property view was tailored to our preferences.",
    text2:
      "They kept us informed at each stage, and the final result exceeded what we had originally hoped for.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Client testimonial five",
    name: "Ethan Brooks",
    email: "ethan.brooks@gmail.com",
    text1:
      "A smooth, professional, and genuinely helpful experience from the first call to the final signature.",
    text2:
      "Their advice was practical, their response time was quick, and the whole process felt well managed.",
  },
];

const SWAP_DURATION = 900;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);

  const activeTestimonial = testimonials[activeIndex];
  const incomingTestimonial =
    incomingIndex === null ? null : testimonials[incomingIndex];

  const finishTransition = useCallback((nextIndex) => {
    setActiveIndex(nextIndex);
    setIncomingIndex(null);
    setIsTransitioning(false);
    isTransitioningRef.current = false;
  }, []);

  const goToIndex = useCallback(
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
      goToIndex((activeIndex + 1) % testimonials.length, "next");
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex, goToIndex]);

  useEffect(
    () => () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    },
    []
  );

  const goToPrevious = () => {
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    goToIndex(nextIndex, "prev");
  };

  const goToNext = () => {
    goToIndex((activeIndex + 1) % testimonials.length, "next");
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our client testimonial</h2>
        <Link href="/" className={styles.outlineBtn}>
          Our Clients <ArrowRight size={14} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrap}>
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
              src={activeTestimonial.mainSrc}
              alt={activeTestimonial.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.mainImage}
              priority
            />
          </div>
          {incomingTestimonial ? (
            <div
              className={`${styles.imageLayer} ${styles.incomingLayer} ${
                direction === "next" ? styles.imageEnterNext : styles.imageEnterPrev
              }`}
            >
              <Image
                src={incomingTestimonial.mainSrc}
                alt={incomingTestimonial.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className={styles.mainImage}
                priority
              />
            </div>
          ) : null}
        </div>

        <div className={styles.text}>
          <div className={styles.reviewStack}>
            <div
              className={`${styles.reviewCopy} ${
                isTransitioning
                  ? direction === "next"
                    ? styles.reviewExitNext
                    : styles.reviewExitPrev
                  : ""
              }`}
            >
              <p>
                <strong>Bricklane</strong> {activeTestimonial.text1}
              </p>
              <p>{activeTestimonial.text2}</p>
            </div>
            {incomingTestimonial ? (
              <div
                className={`${styles.reviewCopy} ${styles.reviewIncoming} ${
                  direction === "next" ? styles.reviewEnterNext : styles.reviewEnterPrev
                }`}
              >
                <p>
                  <strong>Bricklane</strong> {incomingTestimonial.text1}
                </p>
                <p>{incomingTestimonial.text2}</p>
              </div>
            ) : null}
          </div>

          <div className={styles.author}>
            <div className={styles.avatar}>
              <Image src={activeTestimonial.avatarSrc} alt={activeTestimonial.name} fill sizes="44px" />
            </div>
            <div className={styles.authorInfo}>
              <h4>{activeTestimonial.name}</h4>
              <span>{activeTestimonial.email}</span>
            </div>
          </div>

          <div className={styles.slider}>
            <button
              type="button"
              className={styles.sliderBtn}
              aria-label="Previous testimonial"
              onClick={goToPrevious}
            >
              <ChevronLeft size={14} />
            </button>
            <div className={styles.track} />
            <button
              type="button"
              className={styles.sliderBtn}
              aria-label="Next testimonial"
              onClick={goToNext}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
