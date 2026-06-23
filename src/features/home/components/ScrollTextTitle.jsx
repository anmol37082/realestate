"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ScrollTextTitle.module.css";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollTextTitle({ as: Tag = "h2", children, className = "", ...props }) {
  const titleRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const text = useMemo(() => {
    if (Array.isArray(children)) {
      return children.join("");
    }

    return typeof children === "string" ? children : String(children ?? "");
  }, [children]);

  const words = useMemo(() => {
    const parts = text.match(/\S+|\s+/g) ?? [];

    return parts.map((part) => ({
      text: part,
      isSpace: /^\s+$/.test(part),
      letters: Array.from(part),
    }));
  }, [text]);

  const totalAnimatedLetters = useMemo(
    () => words.reduce((count, word) => count + (word.isSpace ? 0 : word.letters.length), 0),
    [words]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const node = titleRef.current;

    if (!node || prefersReducedMotion) {
      return undefined;
    }

    let rafId = 0;

    const updateProgress = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const startPoint = viewportHeight * 0.92;
      const endPoint = viewportHeight * 0.58;
      const totalDistance = startPoint - endPoint;

      if (totalDistance <= 0) {
        setScrollProgress(1);
        return;
      }

      const nextProgress = (startPoint - rect.top) / totalDistance;
      setScrollProgress(clamp(nextProgress, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <Tag ref={titleRef} className={`${styles.root} ${className}`.trim()} {...props}>
      <span className={styles.srOnly}>{text}</span>
      <span aria-hidden="true" className={styles.text}>
        {words.map((word, wordIndex) => {
          if (word.isSpace) {
            return (
              <span key={`space-${wordIndex}`} className={styles.space}>
                {word.text}
              </span>
            );
          }

          return (
            <span key={`${word.text}-${wordIndex}`} className={styles.word}>
              {word.letters.map((letter, letterIndex) => {
                const animatedIndex = words
                  .slice(0, wordIndex)
                  .reduce((count, prevWord) => count + (prevWord.isSpace ? 0 : prevWord.letters.length), 0) + letterIndex;
                const revealPoint = totalAnimatedLetters <= 1 ? 1 : animatedIndex / (totalAnimatedLetters - 1);
                const isVisible = prefersReducedMotion || scrollProgress >= revealPoint;

                return (
                  <span
                    key={`${letter}-${wordIndex}-${letterIndex}`}
                    className={`${styles.letter} ${isVisible ? styles.visible : ""}`}
                    style={{
                      transitionDelay: `${Math.min(animatedIndex * 14, 260)}ms`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
