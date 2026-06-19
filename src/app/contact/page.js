import JsonLd from "../../components/JsonLd";
import AboutCompany from "../../features/contact/components/AboutCompany";
import CompanyStats from "../../features/contact/components/CompanyStats";
import ContactHero from "../../features/contact/components/ContactHero";
import ContactInfo from "../../features/contact/components/ContactInfo";
import FAQSection from "../../features/contact/components/FAQSection";
import OfficeLocation from "../../features/contact/components/OfficeLocation";
import WhyChooseUs from "../../features/contact/components/WhyChooseUs";
import {
  absoluteUrl,
  contactKeywords,
  socialLinks,
  siteDescription,
  siteName,
} from "../../lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mohali Town Square for premium real estate guidance, project details, site visits, and investment support.",
  keywords: contactKeywords,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/contact",
    siteName,
    title: "Contact Us | Mohali Town Square",
    description:
      "Get in touch with Mohali Town Square for premium real estate guidance, project details, site visits, and investment support.",
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1600,
        height: 900,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mohali Town Square",
    description:
      "Get in touch with Mohali Town Square for premium real estate guidance, project details, site visits, and investment support.",
    images: [absoluteUrl("/logo.png")],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us | Mohali Town Square",
  url: absoluteUrl("/contact"),
  description:
    "Get in touch with Mohali Town Square for premium real estate guidance, project details, site visits, and investment support.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteName,
  url: absoluteUrl("/"),
  description: siteDescription,
  areaServed: ["Mohali", "Chandigarh", "Punjab", "Haryana", "Himachal Pradesh"],
  sameAs: socialLinks.map((link) => link.href),
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
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
