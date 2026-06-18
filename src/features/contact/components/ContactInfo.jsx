import Image from "next/image";
import ContactForm from "./ContactForm";
import styles from "./ContactInfo.module.css";

const heroImage =
  "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=600&auto=format&fit=crop&q=60";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Get In Touch</span>

          <h2>Tell Us What You Need</h2>

          <p>
            Our team is here to help you explore the right space at
            Town Square Mohali.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.formWrap}>
            <ContactForm />
          </div>

          <div className={styles.imageWrap}>
            <Image
              src={heroImage}
              alt="Contact our team"
              fill
              priority
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}