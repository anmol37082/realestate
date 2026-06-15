import { HelpCircle, MessageCircle, Calendar, FileCheck } from "lucide-react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    icon: <Calendar />,
    question: "How quickly will someone contact me after submitting the form?",
    answer: "Our team reviews enquiries as soon as they come in and usually responds the same business day.",
  },
  {
    icon: <MessageCircle />,
    question: "Can I book a site visit through this page?",
    answer: "Yes. Mention your preferred project, location, and timing in the message field.",
  },
  {
    icon: <FileCheck />,
    question: "Do you help with documentation and legal checks?",
    answer: "Yes. Brickline supports document verification, legal coordination, and possession-related guidance.",
  },
  {
    icon: <HelpCircle />,
    question: "Can I discuss investment options before choosing a property?",
    answer: "Yes. Share your budget and investment goals, and our advisors will suggest suitable options.",
  },
];

export default function FAQSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>Common questions</h2>
        <p className={styles.subtitle}>Quick answers to help you get started</p>
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
