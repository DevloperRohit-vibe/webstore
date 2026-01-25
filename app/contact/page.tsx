import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us - webkitstore | Get in Touch",
  description: "Ready to start your project? Contact webkitstore today for a free consultation. We're here to help bring your digital vision to life.",
  keywords: "contact design agency, web design consultation, get quote, design services inquiry",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <MapSection />
    </>
  );
}