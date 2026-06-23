"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollTextTitle from "./ScrollTextTitle";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Resident testimonial",
    name: "Rajesh Khanna",
    meta: "1 week ago",
    text: "Finding a home in Mohali was a challenging task, but the Town Square team made it incredibly simple. The process was transparent and hassle-free.",
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=80",
    alt: "Priya Sharma testimonial",
    name: "Priya Sharma",
    meta: "10 days ago",
    text: "I was looking for a secure and well-connected space. The infrastructure and connectivity at Town Square are truly excellent.",
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    alt: "Amit Verma testimonial",
    name: "Amit Verma",
    meta: "2 weeks ago",
    text: "A premium and well-planned project with complete information at every step. The sales team was highly professional.",
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    alt: "Sunita Arora testimonial",
    name: "Sunita Arora",
    meta: "2 weeks ago",
    text: "The open-space concept and amenities are fantastic. It is rare to find such a blend of luxury and affordability in a prime location.",
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    alt: "Vikram Singh testimonial",
    name: "Vikram Singh",
    meta: "3 weeks ago",
    text: "The team guided us through documentation and home loans with great patience. Their support made the journey very smooth.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const [cardHeight, setCardHeight] = useState(null);
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useLayoutEffect(() => {
    const syncCardHeight = () => {
      const heights = cardRefs.current
        .map((card) => card?.offsetHeight ?? 0)
        .filter(Boolean);

      if (!heights.length) {
        return;
      }

      setCardHeight(Math.max(...heights));
    };

    syncCardHeight();
    window.addEventListener("resize", syncCardHeight);

    return () => {
      window.removeEventListener("resize", syncCardHeight);
    };
  }, [activeIndex]);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || hasEntered) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.38,
        rootMargin: "0px 0px -16% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasEntered]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const visibleTestimonials = Array.from({ length: 3 }, (_, offset) => {
    const index = (activeIndex + offset) % testimonials.length;
    return {
      ...testimonials[index],
    };
  });

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headingBlock}>
            <Quote className={styles.quoteIcon} aria-hidden="true" />
            <ScrollTextTitle className={styles.title}>What our customers are saying</ScrollTextTitle>
            <p className={styles.subtitle}>
              Real feedback from buyers and residents who experienced the Town Square journey.
            </p>

            <div className={styles.controls}>
              <button type="button" className={styles.navBtn} onClick={goToPrevious} aria-label="Previous testimonial">
                <ChevronLeft size={16} />
              </button>
              <div className={styles.track} aria-hidden="true">
                <span className={styles.trackFill} />
              </div>
              <button type="button" className={styles.navBtn} onClick={goToNext} aria-label="Next testimonial">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className={`${styles.card} ${hasEntered ? styles.cardVisible : ""}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              style={{
                ...(cardHeight ? { height: `${cardHeight}px` } : null),
                "--reveal-delay": `${index * 200}ms`,
              }}
            >
              <div className={styles.cardQuote}>{"\""}</div>
              <p className={styles.cardText}>{testimonial.text}</p>

              <div className={styles.cardFooter}>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <Image src={testimonial.avatarSrc} alt={testimonial.alt} fill sizes="40px" />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.meta}</span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


