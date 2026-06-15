import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./ContactInfo.module.css";

const heroImage =
  "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Get In Touch</span>
          <h2>Share your requirement with us</h2>
          <p>Tell us your property preference and our advisors will help you find the right option.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formWrap}>
            <ContactForm embedded showHeader={false} />
          </div>

          <div className={styles.imageWrap}>
            <Image src={heroImage} alt="Contact our team" fill sizes="(max-width: 1024px) 100vw, 45vw" className={styles.image} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
