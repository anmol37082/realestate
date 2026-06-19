import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../features/home/components/Header";
import FooterCtaSection from "../features/home/components/FooterCtaSection";
import FooterSection from "../features/home/components/FooterSection";
import { absoluteUrl, siteDescription, siteName, siteUrl } from "../lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: siteName,
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
    title: siteName,
    description: siteDescription,
    images: [absoluteUrl("/logo.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head></head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <FooterCtaSection />
        <FooterSection />
      </body>
    </html>
  );
}
