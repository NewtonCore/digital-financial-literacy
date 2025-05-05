import Hero from "./components/HomePages/Hero";
import Introduction from "./components/HomePages/Introduction";
import OurSolutions from "./components/HomePages/OurSolutions";
import WhatWeOffer from "./components/HomePages/WhatWeOffer";
import WhyDigitalEntrepreneurship from "./components/HomePages/WhyDigitalEntrepreneurship";
import Footer from "./components/HomePages/Footer";
import TargetImpact from "./components/HomePages/TargetImpact";
import CallToAction from "./components/HomePages/CallToAction";
import NavBar from "./components/HomePages/NavBar";
import Conclusion from "./components/HomePages/Conclusion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Introduction />
      <OurSolutions />
      <WhatWeOffer />
      <WhyDigitalEntrepreneurship />
      <TargetImpact />
      <CallToAction />
      <Conclusion />
      <Footer />
    </div>
  );
}
