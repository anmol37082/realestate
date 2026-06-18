import styles from "./OfficeLocation.module.css";

export default function OfficeLocation() {
  return (
    <section id="office-location" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Office Location</span>
        <h2 className={styles.title}>Let&apos;s Meet at Town Square</h2>
        <p className={styles.subtitle}>Schedule a site visit and discover spaces designed for your business. </p>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.4578048860967!2d76.65057482249547!3d30.72351882474642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc9cdfbad61%3A0xaa60f0e786ebffb0!2z4KSf4KS-4KSJ4KSoIOCkuOCljeCkleCljeCkteCkvuCkr-CksCDgpK7gpYvgpLngpL7gpLLgpYA!5e0!3m2!1shi!2sin!4v1781770176447!5m2!1shi!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brickline office location map"
        />
      </div>
    </section>
  );
}

