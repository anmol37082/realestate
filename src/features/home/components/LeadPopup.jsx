"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./LeadPopup.module.css";

const interests = ["Buy Residential", "Rent Residential", "Commercial Property", "Investment Consultation", "Site Visit"];
const budgets = ["Under 50 Lakh", "50 Lakh - 1 Cr", "1 Cr - 2 Cr", "2 Cr - 5 Cr", "5 Cr+"];

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7RC6gk9pS7zGkhLxiD1-3wmIe16So2mH31ULirnrJBLL9UULfs9E3ozUz4JaEMw27/exec";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      budget: formData.get("budget"),
      location: formData.get("location"),
      message: formData.get("message")
    };
    
    setIsSubmitting(true);
    try {
      if (!SCRIPT_URL) {
        throw new Error(
          "Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL. Set it in client/.env.local"
        );
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "no-cors"
      });

      setIsSubmitted(true);
      // Success message will stay open until user closes (X / Esc / Back)

    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
              <div className={styles.teaserMedia}>
                <Image
                  src="/popup.png"
                  alt="Town Square Mohali"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.teaserImage}
                />
              </div>
              <div className={styles.teaserBadge}>town sqare mohali</div>
              <h2>Invest in the Future of Mohali</h2>
              <p>Explore strategically located properties with strong appreciation potential, attractive payment plans, and exclusive pre-launch benefits.</p>
            </div>

            <div className={styles.teaserContent}>
              <div className={styles.kicker}>PREMIUM ACCESS </div>
              <h3>Get the latest property insights</h3>
              <p>
               A quick form unlocks curated opportunities, pricing details, and a direct callback from our team.
              </p>

              <button type="button" className={styles.exploreBtn} onClick={() => setShowForm(true)}>
               Explore Opportunities <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className={`${styles.formLayout} ${isSubmitted ? styles.formLayoutCentered : ""}`}>
            {!isSubmitted && (
              <div className={styles.formHeader}>
                <h3>Tell Us What You Need</h3>
                <p> Our team is here to help you explore the right space at
            Town Square Mohali.</p>
              </div>
            )}

            {isSubmitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={32} strokeWidth={2} />
                </div>
                <strong className={styles.successTitle}>Thank you!</strong>
                <span className={styles.successMsg}>
                  Your details have been received. Our team will review your requirements and reach out shortly with the best matching opportunities.
                </span>
                <button type="button" className={styles.successCloseBtn} onClick={closePopup}>
                  Done
                </button>
              </div>

            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Name <strong>*</strong></span>
                  <input type="text" name="name" placeholder="Enter Name" required />
                </label>
                <label className={styles.field}>
                  <span>Email <strong>*</strong></span>
                  <input type="email" name="email" placeholder="Enter Email" required />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Phone <strong>*</strong></span>
                  <div className={styles.phoneRow}>
                    <span className={styles.countryCode}>+91</span>
                    <input type="tel" name="phone" placeholder="Enter Phone" required />
                  </div>
                </label>
                <label className={styles.field}>
                  <span>Interested In <strong>*</strong></span>
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>
                      Select an option
                    </option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Budget Range <strong></strong></span>
                  <select name="budget"  defaultValue="">
                    <option value="" disabled>
                      Select budget
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={styles.field}>
                  <span>Preferred Location <strong></strong></span>
                  <input type="text" name="location" placeholder="City or locality"  />
                </label>
              </div>

<label className={styles.fieldFull}>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Enter your Message" />
              </label>

              <div className={styles.buttonRow}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setShowForm(false)}>
                  Back
                </button>
                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
