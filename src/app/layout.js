import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../features/home/components/Header";

export const metadata = {
  title: "BRICKLINE - Premium Real Estate",
  description: "A premium real-estate landing page built with Next.js and Bootstrap.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
