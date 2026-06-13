import Image from "next/image";
import styles from "./PopularLocationsSection.module.css";

const locations = [
  {
    src: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80",
    alt: "Mumbai skyline",
    title: "Mumbai",
    price: "Avg. Price: INR 2.5 Cr",
    count: "250+",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    alt: "Delhi skyline",
    title: "Delhi NCR",
    price: "Avg. Price: INR 1.8 Cr",
    count: "180+",
  },
  {
    src: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80",
    alt: "Bangalore skyline",
    title: "Bangalore",
    price: "Avg. Price: INR 1.2 Cr",
    count: "200+",
  },
  {
    src: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
    alt: "Pune city",
    title: "Pune",
    price: "Avg. Price: INR 80 L",
    count: "150+",
  },
  {
    src: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80",
    alt: "Hyderabad skyline",
    title: "Hyderabad",
    price: "Avg. Price: INR 90 L",
    count: "120+",
  },
  {
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    alt: "Jaipur city",
    title: "Jaipur",
    price: "Avg. Price: INR 50 L",
    count: "80+",
  },
];

export default function PopularLocationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popular Locations</h2>
        <p className={styles.subtitle}>Top cities with premium properties</p>
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
