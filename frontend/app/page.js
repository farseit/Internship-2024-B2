import Hero from "@/components/Hero/Hero";
import ProductContainer from "@/components/Product/ProductContainer";

export default function Home() {
  return (
    <main className="w-[95%] mx-auto">
      <Hero />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
    </main>
  );
}
