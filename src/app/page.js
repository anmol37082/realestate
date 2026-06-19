import JsonLd from "../components/JsonLd";
import BlogPreviewSection from "../features/home/components/BlogPreviewSection";
import LeadPopup from "../features/home/components/LeadPopup";
import Hero from "../features/home/components/Hero";
import ProjectSection from "../features/home/components/ProjectSection";
import HighlightsSection from "../features/home/components/HighlightsSection";
import ExpertAgentsSection from "../features/home/components/ExpertAgentsSection";
import PopularLocationsSection from "../features/home/components/PopularLocationsSection";
import PropertyCategoriesSection from "../features/home/components/PropertyCategoriesSection";
import FullScreenBannerSection from "../features/home/components/FullScreenBannerSection";
import NatureSection from "../features/home/components/NatureSection";
import StatsSection from "../features/home/components/StatsSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";
import RecentProjectsSection from "../features/home/components/RecentProjectsSection";
import {
  absoluteUrl,
  homeKeywords,
  socialLinks,
  siteDescription,
  siteName,
} from "../lib/site";

export const metadata = {
  title: "Premium Real Estate in Mohali",
  description: siteDescription,
  keywords: homeKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: "Premium Real Estate in Mohali",
    description: siteDescription,
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
    title: "Premium Real Estate in Mohali",
    description: siteDescription,
    images: [absoluteUrl("/logo.png")],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteName,
  url: absoluteUrl("/"),
  description: siteDescription,
  areaServed: ["Mohali", "Chandigarh", "Punjab", "Haryana", "Himachal Pradesh"],
  sameAs: socialLinks.map((link) => link.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: absoluteUrl("/"),
  description: siteDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: `${absoluteUrl("/")}?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <LeadPopup />
      <Hero />
      <ProjectSection />
      <HighlightsSection />
      <PropertyCategoriesSection />
      <FullScreenBannerSection />
      <PopularLocationsSection />
      <ExpertAgentsSection />
      <StatsSection />
      <NatureSection />
      <TestimonialsSection />
      <RecentProjectsSection />
      <BlogPreviewSection />
    </main>
  );
}
