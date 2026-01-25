import { Metadata } from "next";
import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCategories from "@/components/products/ProductCategories";
import ProductFeatures from "@/components/products/ProductFeatures";

export const metadata: Metadata = {
  title: "Products - growkit | Premium Templates & Components",
  description: "Explore our collection of handcrafted design templates, modern dashboards, e-commerce platforms, and creative portfolios. Built for performance and scalability.",
  keywords: "web templates, dashboard templates, e-commerce design, portfolio templates, SaaS templates, modern web design",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <ProductGrid />
      <ProductFeatures />
    </>
  );
}