"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import styles from "./LeadPopup.module.css";

const interests = ["Buy Residential", "Rent Residential", "Commercial Property", "Investment Consultation", "Site Visit"];
const budgets = ["Under 50 Lakh", "50 Lakh - 1 Cr", "1 Cr - 2 Cr", "2 Cr - 5 Cr", "5 Cr+"];

const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL";

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
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
      setTimeout(() => {
        closePopup();
        setIsSubmitted(false);
      }, 2000);
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
              <div className={styles.teaserBadge}>town sqare mohali</div>
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

            {isSubmitted ? (
              <div className={styles.success}>
                <strong>Thank you! Your enquiry has been received.</strong>
                <span>Our team will contact you shortly.</span>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Name <strong>*</strong></span>
                  <input type="text" name="name" placeholder="Enter Name" required />
                </label>
                <label className={styles.field}>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Enter Email" />
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
                  <span>Budget Range <strong>*</strong></span>
                  <select name="budget" required defaultValue="">
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
                  <span>Preferred Location <strong>*</strong></span>
                  <input type="text" name="location" placeholder="City or locality" required />
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
