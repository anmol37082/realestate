"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const interests = ["Buy Residential", "Rent Residential", "Commercial Property", "Investment Consultation", "Site Visit"];
const budgets = ["Under 50 Lakh", "50 Lakh - 1 Cr", "1 Cr - 2 Cr", "2 Cr - 5 Cr", "5 Cr+"];

export default function ContactForm({ embedded = false, showHeader = true }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  if (embedded) {
    return (
      <div id="contact-form" className={styles.embedded}>
        {showHeader ? (
          <div className={styles.header}>
            <span className={styles.tag}>Quick Enquiry</span>
            <h2>Send us your requirement</h2>
            <p>Tell us what you are looking for and our advisors will respond with the most relevant options.</p>
          </div>
        ) : null}

        {isSubmitted ? (
          <div className={styles.success}>
            <strong>Thank you! Your enquiry has been received.</strong>
            <span>Our team will contact you shortly.</span>
          </div>
        ) : null}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Full Name</span>
              <input className={styles.control} type="text" name="name" placeholder="Enter your name" required />
            </label>
            <label className={styles.field}>
              <span>Email Address</span>
              <input className={styles.control} type="email" name="email" placeholder="Enter your email" required />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Phone Number</span>
              <input className={styles.control} type="tel" name="phone" placeholder="Enter your phone number" required />
            </label>
            <label className={styles.field}>
              <span>Interested In</span>
              <select className={styles.control} name="interest" required defaultValue="">
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
              <span>Budget Range</span>
              <select className={styles.control} name="budget" required defaultValue="">
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
              <span>Preferred Location</span>
              <input className={styles.control} type="text" name="location" placeholder="City or locality" required />
            </label>
          </div>

          <label className={styles.field}>
            <span>Message</span>
            <textarea className={styles.control} name="message" rows="5" placeholder="Tell us more about your requirement" required />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Submit Enquiry
          </button>
        </form>
      </div>
    );
  }

  return (
    <section id="contact-form" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Quick Enquiry</span>
          <h2>Tell us what you are looking for</h2>
          <p>Share your requirement and our team will get back with the most relevant options.</p>
        </div>

        {isSubmitted ? (
          <div className={styles.success}>
            <strong>Thank you! Your enquiry has been received.</strong>
            <span>Our team will contact you shortly.</span>
          </div>
        ) : null}

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Full Name</span>
              <input className={styles.control} type="text" name="name" placeholder="Enter your name" required />
            </label>
            <label className={styles.field}>
              <span>Email Address</span>
              <input className={styles.control} type="email" name="email" placeholder="Enter your email" required />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Phone Number</span>
              <input className={styles.control} type="tel" name="phone" placeholder="Enter your phone number" required />
            </label>
            <label className={styles.field}>
              <span>Interested In</span>
              <select className={styles.control} name="interest" required defaultValue="">
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
              <span>Budget Range</span>
              <select className={styles.control} name="budget" required defaultValue="">
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
              <span>Preferred Location</span>
              <input className={styles.control} type="text" name="location" placeholder="City or locality" required />
            </label>
          </div>

          <label className={styles.field}>
            <span>Message</span>
            <textarea className={styles.control} name="message" rows="5" placeholder="Tell us more about your requirement" required />
          </label>

          <button type="submit" className={styles.submitBtn}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
