import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";
import ProductsLogo from "@/components/products-logo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsLogo />
      <ProductSection title="New Arrivals" />
    </>
  );
}
