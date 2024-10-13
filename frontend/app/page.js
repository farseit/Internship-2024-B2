import Hero from "@/components/Hero/Hero";
import ProductContainer from "@/components/Product/ProductContainer";

export default function Home() {
  return (
    <main className="bg-[#f5f6fa]">
      <Hero />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
    </main>
  );
}
