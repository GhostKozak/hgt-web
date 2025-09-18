import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start"></main>
      <Footer />
    </>
  );
}
