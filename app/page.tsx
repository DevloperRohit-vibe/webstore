import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "webkitStore - Premium websites , Design & digital Solutions",
  description: "Build brilliant digital experiences fast with premium design templates. webkitstore provides you cutting-edge web solutions.",
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