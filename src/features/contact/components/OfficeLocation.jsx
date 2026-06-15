import styles from "./OfficeLocation.module.css";

export default function OfficeLocation() {
  return (
    <section id="office-location" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Office Location</span>
        <h2 className={styles.title}>Visit us in Chandigarh</h2>
        <p className={styles.subtitle}>Schedule a meeting with our advisors and discuss your property requirements in person.</p>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12849.9764326965!2d76.83299747852183!3d30.653646913169553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95678db0d10f%3A0x2510bc474ebebd63!2z4KSH4KSu4KWH4KSc4KS_4KSoIOCkieCkuCDgpI_gpJXgpYfgpKHgpK7gpYAgLSDgpKzgpYfgpLjgpY3gpJ8g4KSh4KS_4KSc4KS_4KSf4KSyIOCkruCkvuCksOCljeCkleClh-Ckn-Ckv-CkguCklyB8IOCkl-CljeCksOCkvuCkq-Ckv-CkleCljeCkuCDgpKHgpL_gpJzgpL7gpIfgpKjgpL_gpILgpJcgfCDgpLXgpYDgpKHgpL_gpK_gpYsg4KSP4KSh4KS_4KSf4KS_4KSC4KSXIOCkh-CkguCkuOCljeCkn-ClgOCkn-CljeCkr-ClguCknyDgpIfgpKgg4KSa4KSC4KSh4KWA4KSX4KSi4KS8IHwg4KSq4KSC4KSa4KSV4KWB4KSy4KS-IHwg4KSu4KWL4KS54KS-4KSy4KWA!5e1!3m2!1shi!2sin!4v1781507135187!5m2!1shi!2sin"
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
