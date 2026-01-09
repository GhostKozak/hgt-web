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
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <CaseStudies />
      <OurValues />
      <CallInAction />
      <Footer />
      <Head />
    </main>
  );
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LogisticsService",
  name: "HGT Taşımacılık",
  image: "https://hgttasimacilik.com/logo.svg",
  telephone: "+90 533 145 24 36",
  email: "info@hgttasimacilik.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Istanbul",
    addressCountry: "TR",
  },
};

export function Head() {
  return (
    <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
  );
}
