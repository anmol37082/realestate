"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import styles from "./LeadPopup.module.css";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closePopup();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label="Lead form popup">
      <div className={styles.modal}>
        <button type="button" className={styles.closeBtn} aria-label="Close popup" onClick={closePopup}>
          <X size={22} />
        </button>

        {!showForm ? (
          <div className={styles.teaser}>
            <div className={styles.teaserVisual}>
              <div className={styles.teaserBadge}>BRICKLINE</div>
              <h2>Premium spaces, curated for the right buyers</h2>
              <p>Explore exclusive listings, launch details, and payment-friendly opportunities.</p>
            </div>

            <div className={styles.teaserContent}>
              <div className={styles.kicker}>Private access</div>
              <h3>Get the latest property insights</h3>
              <p>
                A quick form unlocks curated options, payment plan details, and a direct callback from
                our team.
              </p>

              <button type="button" className={styles.exploreBtn} onClick={() => setShowForm(true)}>
                Explore Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.formLayout}>
            <div className={styles.formHeader}>
              <h3>Tell us what you&apos;re looking for</h3>
              <p>We&apos;ll use your details to match you with the right projects and connect you quickly.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span>Name <strong>*</strong></span>
                <input type="text" name="name" placeholder="Enter Name" required />
              </label>

              <label className={styles.field}>
                <span>Phone <strong>*</strong></span>
                <div className={styles.phoneRow}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="tel" name="phone" placeholder="Enter Phone" required />
                </div>
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input type="email" name="email" placeholder="Enter Email" />
              </label>

              <label className={styles.field}>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Enter your Message" />
              </label>

              <div className={styles.actions}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setShowForm(false)}>
                  Back
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
