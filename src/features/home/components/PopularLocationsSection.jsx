import Image from "next/image";
import styles from "./PopularLocationsSection.module.css";

const locations = [
  {
    src: "/nearlocations/chandigarhgroupofcolleges.webp",
    alt: "Chandigarh Group of Colleges",
    title: "Chandigarh Group of Colleges",
    price: "Just 4 minutes away",
    count: "4 min",
  },
  {
    src: "/nearlocations/court.webp",
    alt: "Mohali Court Complex",
    title: "Mohali Court Complex",
    price: "Approximately 10 minutes away",
    count: "10 min",
  },
  {
    src: "/nearlocations/khararbusstand.webp",
    alt: "Kharar Bus Stand",
    title: "Kharar Bus Stand",
    price: "Around 10 minutes away",
    count: "10 min",
  },
  {
    src: "/nearlocations/chandigarhuni.webp",
    alt: "Chandigarh University",
    title: "Chandigarh University",
    price: "Only 15 minutes away",
    count: "15 min",
  },
  {
    src: "/nearlocations/chd.webp",
    alt: "Chandigarh city",
    title: "Chandigarh",
    price: "Easily accessible within 15 minutes",
    count: "15 min",
  },
  {
    src: "/nearlocations/airport.webp",
    alt: "Chandigarh Airport",
    title: "Chandigarh Airport",
    price: "Just 30 minutes away",
    count: "30 min",
  },
];

export default function PopularLocationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Well-connected to Key Destinations</h2>
        <div className={styles.subtitle}>
          <p className={styles.subtitleLead}>
            Town Square enjoys a strategic location on NH-205, Kharar-Landran Road, Sector-127, Mohali.
          </p>
          <p className={styles.subtitleSupport}>
            Easy access to major educational institutions, commercial hubs, and city landmarks keeps the location highly connected.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {locations.map((location) => (
          <article key={location.title} className={styles.card}>
            <Image src={location.src} alt={location.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.image} />
            <span className={styles.count}>{location.count}</span>
            <div className={styles.overlay}>
              <h3>{location.title}</h3>
              <p>{location.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
