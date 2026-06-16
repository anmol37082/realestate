import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../features/home/components/Header";
import FooterCtaSection from "../features/home/components/FooterCtaSection";
import FooterSection from "../features/home/components/FooterSection";

export const metadata = {
  title: "Mohali Town Square",
  description: "Premium Real Estate in Mohali",
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
