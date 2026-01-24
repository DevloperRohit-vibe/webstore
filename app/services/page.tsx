import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import PricingSection from "@/components/services/PricingSection";
import FAQSection from "@/components/services/FAQSection";

export const metadata: Metadata = {
  title: "Services - webkitstore | Web Design & Development",
  description: "Professional web design and development services including custom websites, UI/UX design, e-commerce solutions, and ongoing maintenance. Get a free consultation today.",
  keywords: "web design services, custom website development, UI/UX design, e-commerce development, website maintenance, digital solutions",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
    </>
  );
}