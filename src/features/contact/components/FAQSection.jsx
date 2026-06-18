import { HelpCircle, MessageCircle, Calendar, FileCheck } from "lucide-react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    icon: <HelpCircle />,
    question: "1. What makes Town Square different?",
    answer: "It brings together retail, offices, dining, entertainment, and daily convenience in one destination.",
  },
  {
    icon: <Calendar />,
    question: "2. Is the project designed for everyday visitors?",
    answer: "Yes, the project is planned to offer a convenient and enjoyable experience for visitors.",
  },
  {
    icon: <MessageCircle />,
    question: "3. How can I book a site visit?",
    answer: "Simply get in touch with our team, and we'll help you schedule a convenient site visit.",
  },
  {
    icon: <FileCheck />,
    question: "4. Who can invest in Town Square?",
    answer: "The project is suitable for business owners, retailers, entrepreneurs, and investors seeking commercial space.",
  },
  {
    icon: <HelpCircle />,
    question: "5. Does the project offer office spaces?",
    answer: "Yes, modern office spaces are available for professionals and businesses.",
  },
  {
    icon: <Calendar />,
    question: "6. Are retail showrooms available?",
    answer: "Yes, the project includes premium retail showrooms designed for a wide range of businesses.",
  },
];


export default function FAQSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>Everything You Need to Know</h2>
        <p className={styles.subtitle}>Explore answers to help you understand Town Square Mohali better. </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq) => (
          <details key={faq.question} className={styles.item}>
            <summary>
              <span className={styles.iconWrapper}>{faq.icon}</span>
              {faq.question}
              <span className={styles.chevron}>+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
