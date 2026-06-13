import FooterCtaSection from "../features/home/components/FooterCtaSection";
import FooterSection from "../features/home/components/FooterSection";
import BlogPreviewSection from "../features/home/components/BlogPreviewSection";
import Hero from "../features/home/components/Hero";
import ProjectSection from "../features/home/components/ProjectSection";
import HighlightsSection from "../features/home/components/HighlightsSection";
import ExpertAgentsSection from "../features/home/components/ExpertAgentsSection";
import PopularLocationsSection from "../features/home/components/PopularLocationsSection";
import PropertyCategoriesSection from "../features/home/components/PropertyCategoriesSection";
import NatureSection from "../features/home/components/NatureSection";
import RecentProjectsSection from "../features/home/components/RecentProjectsSection";
import StatsSection from "../features/home/components/StatsSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";
import WhyChooseUsSection from "../features/home/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectSection />
      <HighlightsSection />
      <PropertyCategoriesSection />
      <WhyChooseUsSection />
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
