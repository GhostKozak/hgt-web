import AboutUs from "@/components/About";
import CallInAction from "@/components/CallInAction";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurValues from "@/components/OurValues";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <CaseStudies />
      <OurValues />
      <CallInAction />
      <Footer />
    </>
  );
}
