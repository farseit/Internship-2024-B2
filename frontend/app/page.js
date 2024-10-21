import Hero from "@/components/Hero/Hero";
import ProductContainer from "@/components/Product/ProductContainer";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`w-[95%] mx-auto ${inter.className}`}>
      <Hero />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
    </main>
  );
}
