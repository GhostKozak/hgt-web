import AboutUs from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <CaseStudies />
      <Footer />
    </>
  );
}
