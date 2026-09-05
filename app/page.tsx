import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Food } from "@/components/Food";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sakata } from "@/components/Sakata";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShopInfo } from "@/components/ShopInfo";
import { Space } from "@/components/Space";
import { Workshop } from "@/components/Workshop";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        <Hero />
        <About />
        <Food />
        <Sakata />
        <Workshop />
        <Space />
        <ShopInfo />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
