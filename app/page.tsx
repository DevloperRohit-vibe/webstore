import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Home - DesignStore | Premium Design Solutions",
  description: "Build brilliant digital experiences fast with premium design templates. Trusted by industry leaders worldwide for cutting-edge web solutions.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}