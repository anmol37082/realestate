import FooterCtaSection from "../features/home/components/FooterCtaSection";
import FooterSection from "../features/home/components/FooterSection";
import Hero from "../features/home/components/Hero";
import HighlightsSection from "../features/home/components/HighlightsSection";
import Navbar from "../features/home/components/Navbar";
import NatureSection from "../features/home/components/NatureSection";
import ProjectsSection from "../features/home/components/ProjectsSection";
import RecentProjectsSection from "../features/home/components/RecentProjectsSection";
import TestimonialsSection from "../features/home/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <HighlightsSection />
      <RecentProjectsSection />
      <NatureSection />
      <TestimonialsSection />
      <FooterCtaSection />
      <FooterSection />
    </main>
  );
}
