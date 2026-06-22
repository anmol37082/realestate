"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    alt: "Luxury apartment exterior view",
    title: "Premium Exteriors",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1600&q=80",
    alt: "Skyline Residences luxury apartment",
    title: "Skyline Residences",
  },
  {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&q=80",
    alt: "Courtyard Villas private home",
    title: "Courtyard Villas",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80",
    alt: "Commerce District commercial building",
    title: "Commerce District",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    alt: "Aura Heights modern residence",
    title: "Aura Heights",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
    alt: "Olive Crest contemporary villa",
    title: "Olive Crest",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
    alt: "Botanik kitchen and restaurant",
    title: "Botanik Kitchen & Restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    alt: "Prime edge business park",
    title: "Prime Edge Business Park",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    alt: "Renewasphere district aerial view",
    title: "Renewasphere District",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    alt: "First-time home buying scene",
    title: "Residential Living",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    alt: "Commercial building exterior",
    title: "Commercial Spaces",
  },
  {
    src: "/banner1.webp",
    alt: "Town Square Mohali commercial development",
    title: "Town Square Mohali",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80",
    alt: "Modern premium residence interior",
    title: "Premium Interiors",
  },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((current) => (current + 1) % galleryItems.length);
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setLightboxIndex(null);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Gallery</span>
        <h1 className={styles.title}>Experience Town Square Through Every Frame</h1>
        <p className={styles.subtitle}>
        Take a closer look at the spaces, architecture, and experiences that make Town Square Mohali a thriving hub for business, retail, and lifestyle.
        </p>
      </div>

      <div className={styles.grid} ref={containerRef}>
        {galleryItems.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`${styles.card} ${item.span ? styles[item.span] : ""}`}
            onClick={() => setLightboxIndex(index)}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.caption}>
              <span>{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <div className={styles.lightboxOverlay} aria-hidden={false} onClick={handleOverlayClick}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={() =>
              setLightboxIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length)
            }
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={() => setLightboxIndex((current) => (current + 1) % galleryItems.length)}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className={styles.lightboxContent}>
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              fill
              sizes="100vw"
              className={styles.lightboxImage}
              priority
            />
            <div className={styles.lightboxCaption}>
              <span>{galleryItems[lightboxIndex].title}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
