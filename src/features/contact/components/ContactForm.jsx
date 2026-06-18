"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz7RC6gk9pS7zGkhLxiD1-3wmIe16So2mH31ULirnrJBLL9UULfs9E3ozUz4JaEMw27/exec";

const interests = [
  "Buy Residential",
  "Rent Residential",
  "Commercial Property",
  "Investment Consultation",
  "Site Visit",
];

const budgets = [
  "Under 50 Lakh",
  "50 Lakh - 1 Cr",
  "1 Cr - 2 Cr",
  "2 Cr - 5 Cr",
  "5 Cr+",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interest: formData.get("interest"),
      budget: formData.get("budget"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      setIsSubmitting(true);

      if (!SCRIPT_URL) {
        throw new Error(
          "Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL. Set it in client/.env.local"
        );
      }

      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // Keep CORS behavior permissive; Apps Script may not return CORS headers.
        mode: "no-cors",
      });


      setIsSubmitted(true);

      form.reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {isSubmitted && (
        <div className={styles.success}>
          <strong>
            Thank you! Your enquiry has been received.
          </strong>

          <span>
            Our team will contact you shortly.
          </span>
        </div>
      )}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.row}>
          <label className={styles.field}>
            <span>Full Name</span>

            <input
              type="text"
              name="name"
              required
              className={styles.control}
              placeholder="Enter your name"
            />
          </label>

          <label className={styles.field}>
            <span>Email Address</span>

            <input
              type="email"
              name="email"
              required
              className={styles.control}
              placeholder="Enter your email"
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Phone Number</span>

            <input
              type="tel"
              name="phone"
              required
              className={styles.control}
              placeholder="Enter your phone number"
            />
          </label>

          <label className={styles.field}>
            <span>Interested In</span>

            <select
              name="interest"
              required
              defaultValue=""
              className={styles.control}
            >
              <option value="" disabled>
                Select an option
              </option>

              {interests.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Budget Range</span>

            <select
              name="budget"
           
              defaultValue=""
              className={styles.control}
            >
              <option value="" disabled>
                Select budget
              </option>

              {budgets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Preferred Location</span>

            <input
              type="text"
              name="location"
              
              className={styles.control}
              placeholder="City or locality"
            />
          </label>
        </div>

        <div className={styles.row}>
          <label className={styles.field}>
            <span>Message</span>

            <textarea
              name="message"
              rows={5}
              
              className={styles.control}
              placeholder="Tell us more about your requirement"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitBtn}
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit Enquiry"}
        </button>
      </form>
    </>
  );
}