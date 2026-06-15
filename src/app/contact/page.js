export const metadata = {
  title: "Contact Us | Brickline Real Estate",
  description: "Get in touch with Brickline for premium real estate guidance, project details, site visits, and investment support.",
};

import CTASection from "../../features/contact/components/CTASection";
import AboutCompany from "../../features/contact/components/AboutCompany";
import CompanyStats from "../../features/contact/components/CompanyStats";
import ContactHero from "../../features/contact/components/ContactHero";
import ContactInfo from "../../features/contact/components/ContactInfo";
import FAQSection from "../../features/contact/components/FAQSection";
import OfficeLocation from "../../features/contact/components/OfficeLocation";
import WhyChooseUs from "../../features/contact/components/WhyChooseUs";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <AboutCompany />
      <CompanyStats />
      <WhyChooseUs />
      <OfficeLocation />
      <FAQSection />
      <CTASection />
    </main>
  );
}
