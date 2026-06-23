import Image from "next/image";
import ContactForm from "./ContactForm";
import ScrollTextTitle from "../../home/components/ScrollTextTitle";
import styles from "./ContactInfo.module.css";

const heroImage =
  "/contact/contactform5.webp";

export default function ContactInfo() {
  return (
    <section id="contact-info" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>Get In Touch</span>

          <ScrollTextTitle as="h2" className={styles.title}>Tell Us What You Need</ScrollTextTitle>

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
