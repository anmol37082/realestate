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
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
