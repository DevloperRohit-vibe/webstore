import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "growkit - Premium Design Solutions",
  description: "Transform your vision into stunning websites with our premium design templates. Crafted for perfection, optimized for performance.",
  keywords: "web design, website templates, premium designs, modern websites, UI/UX, responsive website design",
  authors: [{ name: "growkit" }],
  openGraph: {
    title: "growkit - Premium Design Solutions",
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
    </html>
  );
}