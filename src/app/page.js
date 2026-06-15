import FooterCtaSection from "../features/home/components/FooterCtaSection";
import FooterSection from "../features/home/components/FooterSection";
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
import RecentProjectsSection from "../features/home/components/RecentProjectsSection";
import StatsSection from "../features/home/components/StatsSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <LeadPopup />
      <Hero />
      <ProjectSection />
      <HighlightsSection />
      <PropertyCategoriesSection />
      <FullScreenBannerSection />
      <PopularLocationsSection />
      <ExpertAgentsSection />
      <RecentProjectsSection />
      <StatsSection />
      <NatureSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FooterCtaSection />
      <FooterSection />
    </main>
  );
}
