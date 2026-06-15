import styles from "./AboutCompany.module.css";

export default function AboutCompany() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className={styles.tag}>About Company</span>
          <h2>Trusted real estate guidance for smarter decisions</h2>
          <p>
            Brickline helps buyers, investors, and businesses evaluate premium residential and commercial opportunities with clear information, market insight, and end-to-end support.
          </p>
          <p>
            From first enquiry to site visit and final documentation, our team keeps the process transparent, responsive, and focused on your goals.
          </p>
        </div>

        <div className={styles.panel}>
          <h3>Our approach</h3>
          <ul>
            <li>Understand budget, location, timeline, and investment goals.</li>
            <li>Shortlist verified properties with clear pricing and documents.</li>
            <li>Arrange site visits and connect you with the right experts.</li>
            <li>Support negotiations, paperwork, and possession-related steps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
