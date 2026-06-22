"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    mainSrc: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Resident testimonial",
    name: "Rajesh Khanna",
    email: "rajesh.khanna82@gmail.com",
    text1:
      "Finding a home in Mohali was a challenging task, but the Town Square team made it incredibly simple. I am particularly impressed with the location and the thoughtful township planning.",
    text2:
      "The entire booking process was transparent and hassle-free.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
    alt: "Priya Sharma testimonial",
    name: "Priya Sharma",
    email: "priya.sharma.pro@gmail.com",
    text1:
      "As a working professional, I was looking for a space that is secure and well-connected to all essential amenities. The infrastructure and connectivity at Town Square are truly excellent.",
    text2:
      "My whole family is very excited to move in!",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    alt: "Amit Verma testimonial",
    name: "Amit Verma",
    email: "amit.v2026@gmail.com",
    text1:
      "I invested in a property here for its high growth potential. In the emerging market of Mohali, Town Square stands out as a premium and well-planned project.",
    text2:
      "The sales team is highly professional and provided complete, detailed information at every step.",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    alt: "Sunita Arora testimonial",
    name: "Sunita Arora",
    email: "sunita.arora.h@gmail.com",
    text1:
      "The architecture and open-space concept at Town Square are fantastic. The amenities promised are being delivered exactly as expected.",
    text2:
      "It is rare to find such a blend of luxury and affordability in a prime location. Extremely happy with this investment!",
  },
  {
    mainSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Vikram Singh testimonial",
    name: "Vikram Singh",
    email: "vikram.singh.official@gmail.com",
    text1:
      "As a first-time homebuyer, I was quite anxious about the process. However, the team at Town Square guided us through everything—from documentation to home loans—with great patience.",
    text2:
      "Their support made our journey very smooth. I would highly recommend them.",
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
                <strong>Town Square Mohali</strong> {activeTestimonial.text1}
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
                  <strong>Town Square Mohali</strong> {incomingTestimonial.text1}
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
