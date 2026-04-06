import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import HeroStats from "@/components/sections/HeroStats";
import Problems from "@/components/sections/Problems";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroStats />
        <Problems />
      </main>
    </>
  );
}