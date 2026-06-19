import JsonLd from "../../components/JsonLd";
import GalleryPage from "./Gallery.jsx";
import {
  absoluteUrl,
  galleryKeywords,
  socialLinks,
  siteDescription,
  siteName,
} from "../../lib/site";

export const metadata = {
  title: "Gallery",
  description:
    "Explore the visual journey of Mohali Town Square, including interiors, exteriors, amenities, and site glimpses.",
  keywords: galleryKeywords,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/gallery",
    siteName,
    title: "Gallery | Mohali Town Square",
    description:
      "Explore the visual journey of Mohali Town Square, including interiors, exteriors, amenities, and site glimpses.",
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
    title: "Gallery | Mohali Town Square",
    description:
      "Explore the visual journey of Mohali Town Square, including interiors, exteriors, amenities, and site glimpses.",
    images: [absoluteUrl("/logo.png")],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gallery | Mohali Town Square",
  url: absoluteUrl("/gallery"),
  description:
    "Explore the visual journey of Mohali Town Square, including interiors, exteriors, amenities, and site glimpses.",
  about: {
    "@type": "RealEstateAgent",
    name: siteName,
    url: absoluteUrl("/"),
    description: siteDescription,
    sameAs: socialLinks.map((link) => link.href),
  },
};

export default function Gallery() {
  return (
    <main>
      <JsonLd data={gallerySchema} />
      <GalleryPage />
    </main>
  );
}
