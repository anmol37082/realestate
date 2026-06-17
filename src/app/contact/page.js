import AboutCompany from "../../features/contact/components/AboutCompany";
import CompanyStats from "../../features/contact/components/CompanyStats";
import ContactHero from "../../features/contact/components/ContactHero";
import ContactInfo from "../../features/contact/components/ContactInfo";
import FAQSection from "../../features/contact/components/FAQSection";
import OfficeLocation from "../../features/contact/components/OfficeLocation";
import WhyChooseUs from "../../features/contact/components/WhyChooseUs";

export const metadata = {
  title: "Contact Us | Mohali Town Square",
  description: "Get in touch with Mohali Town Square for premium real estate guidance, project details, site visits, and investment support.",
};

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
    </main>
  );
}
