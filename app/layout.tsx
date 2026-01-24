import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DesignStore - Premium Design Solutions",
  description: "Transform your vision into stunning websites with our premium design templates. Crafted for perfection, optimized for performance.",
  keywords: "web design, templates, premium designs, modern websites, UI/UX, responsive design",
  authors: [{ name: "webkit store" }],
  openGraph: {
    title: "DesignStore - Premium Design Solutions",
    description: "Transform your vision into stunning websites with our premium design templates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="WCa0PICmHpRFT2crQNZ-X9ykXfS9kX6teYbxfvCrOqM" />
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VYRG4SQ6WN"></script>
      <script>
  
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VYRG4SQ6WN');
      </script>
    </html>
  );
}