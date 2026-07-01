import Image from "next/image";
import styles from "./MissionBanner.module.css";

const points = [
  "Premium construction focus",
  "Material quality first",
  "Strong civil supervision",
];

export default function MissionBanner() {
  return (
    <section className={styles.section} aria-label="Mission banner">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <p className={styles.label}>Built around quality</p>
            <h2 className={styles.title}>A visual reminder of the standard the project should hold.</h2>
            <p className={styles.text}>
              The Mission page now includes a stronger visual break with an image banner that reflects the premium direction of Town Square.
            </p>

            <div className={styles.pointList}>
              {points.map((point) => (
                <div key={point} className={styles.point}>
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mediaWrap}>
            <Image
              src="/banner1.webp"
              alt="Town Square Mohali premium development banner"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.badge}>Town Square Mission</div>
            <div className={styles.caption}>
              Focused on premium material, disciplined execution, and strong civil work.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
