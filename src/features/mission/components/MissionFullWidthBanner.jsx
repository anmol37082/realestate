import Image from "next/image";
import styles from "./MissionFullWidthBanner.module.css";

export default function MissionFullWidthBanner() {
  return (
    <section className={styles.section} aria-label="Mission banner">
      <div className={styles.media}>
        <Image
          src="/banner1.webp"
          alt="Town Square Mohali premium development banner"
          fill
          sizes="100vw"
          className={styles.image}
          priority={false}
        />
      </div>
    </section>
  );
}
