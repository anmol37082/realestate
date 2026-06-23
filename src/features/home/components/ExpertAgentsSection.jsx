import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ScrollTextTitle from "./ScrollTextTitle";
import styles from "./ExpertAgentsSection.module.css";

const agents = [
  {
    name: "Vikram Singh",
    role: "Senior Consultant",
    exp: "8+ Years Experience",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Neha Gupta",
    role: "Property Advisor",
    exp: "5+ Years Experience",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "Rajesh Mehta",
    role: "Commercial Expert",
    exp: "12+ Years Experience",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    name: "Anita Sharma",
    role: "Luxury Specialist",
    exp: "6+ Years Experience",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
];

export default function ExpertAgentsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <ScrollTextTitle className={styles.title}>Meet Our Team Page</ScrollTextTitle>
        <p className={styles.subtitle}>Our Trusted Advisors</p>
      </div>

      <div className={styles.grid}>
        {agents.map((agent) => (
          <article key={agent.name} className={styles.card}>
            <div className={styles.photo}>
              <Image src={agent.src} alt={agent.name} fill sizes="(max-width: 768px) 100vw, 25vw" className={styles.image} />
            </div>
            <div className={styles.body}>
              <h3>{agent.name}</h3>
              <p className={styles.role}>{agent.role}</p>
              <p className={styles.exp}>{agent.exp}</p>
              <div className={styles.social}>
                <span className={styles.socialBtn}><Phone size={14} /></span>
                <span className={styles.socialBtn}><MessageCircle size={14} /></span>
                <span className={styles.socialBtn}><Mail size={14} /></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
