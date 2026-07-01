import JsonLd from "../../components/JsonLd";
import MissionHero from "../../features/mission/components/MissionHero";
import MissionPillars from "../../features/mission/components/MissionPillars";
import QualityPromise from "../../features/mission/components/QualityPromise";
import MissionFullWidthBanner from "../../features/mission/components/MissionFullWidthBanner";
import CivilTeam from "../../features/mission/components/CivilTeam";
import MaterialStandards from "../../features/mission/components/MaterialStandards";
import MissionClosing from "../../features/mission/components/MissionClosing";
import {
  absoluteUrl,
  missionKeywords,
  siteDescription,
  siteName,
} from "../../lib/site";

export const metadata = {
  title: "Mission",
  description:
    "Learn how Mohali Town Square is being developed with a clear mission, premium materials, and a strong civil team focused on construction quality.",
  keywords: missionKeywords,
  alternates: {
    canonical: "/mission",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/mission",
    siteName,
    title: "Mission | Mohali Town Square",
    description:
      "Learn how Mohali Town Square is being developed with a clear mission, premium materials, and a strong civil team focused on construction quality.",
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
    title: "Mission | Mohali Town Square",
    description:
      "Learn how Mohali Town Square is being developed with a clear mission, premium materials, and a strong civil team focused on construction quality.",
    images: [absoluteUrl("/logo.png")],
  },
};

const missionPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Mission | Mohali Town Square",
  url: absoluteUrl("/mission"),
  description:
    "Learn how Mohali Town Square is being developed with a clear mission, premium materials, and a strong civil team focused on construction quality.",
  about: {
    "@type": "RealEstateAgent",
    name: siteName,
    url: absoluteUrl("/"),
    description: siteDescription,
  },
};

export default function MissionPage() {
  return (
    <main>
      <JsonLd data={missionPageSchema} />
      <MissionHero />
      <MissionPillars />
      <QualityPromise />
      <MissionFullWidthBanner />
      <CivilTeam />
      <MaterialStandards />
      <MissionClosing />
    </main>
  );
}
