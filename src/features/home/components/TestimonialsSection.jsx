"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    mainSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    floatingSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
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
    floatingSrc: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
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
    floatingSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
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
    floatingSrc: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&q=80",
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
    floatingSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
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

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection("prev");
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setDirection("next");
    setActiveIndex((current) => (current + 1) % testimonials.length);
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
          <Image
            key={`main-${activeIndex}`}
            src={activeTestimonial.mainSrc}
            alt={activeTestimonial.alt}
            width={800}
            height={360}
            className={`${styles.mainImage} ${
              direction === "next" ? styles.imageNext : styles.imagePrev
            }`}
          />
          <div className={styles.floating}>
            <Image
              key={`floating-${activeIndex}`}
              src={activeTestimonial.floatingSrc}
              alt={activeTestimonial.alt}
              fill
              sizes="160px"
              className={`${styles.floatingImage} ${
                direction === "next" ? styles.imageNext : styles.imagePrev
              }`}
            />
          </div>
        </div>

        <div className={styles.text}>
          <div
            key={activeIndex}
            className={`${styles.reviewCopy} ${
              direction === "next" ? styles.reviewNext : styles.reviewPrev
            }`}
          >
            <p>
              <strong>Bricklane</strong> {activeTestimonial.text1}
            </p>
            <p>{activeTestimonial.text2}</p>
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
