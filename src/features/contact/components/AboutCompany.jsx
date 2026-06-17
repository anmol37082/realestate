import styles from "./AboutCompany.module.css";

export default function AboutCompany() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className={styles.tag}>About Town Square</span>
          <h2>Where Every Day Brings New Opportunities</h2>
          <p style={{ maxWidth: "560px" }}>
            Town Square Mohali is a vibrant commercial destination where businesses,
            shopping, dining, and everyday experiences come together. Designed to create a place people love to visit and businesses are proud to be part of.
          </p>

        </div>

        <div className={styles.panel}>
          <h3>Why Town Square</h3>
          <div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🛍️</span>
              <span>Spaces for retail and offices.</span>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🍽️</span>
              <span>A destination for food and entertainment.</span>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>🏙️</span>
              <span>Designed for convenience.</span>
            </div>
            <div className={styles.whyItem}>
              <span className={styles.whyIcon}>✨</span>
              <span>Made for today&apos;s lifestyle.</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

