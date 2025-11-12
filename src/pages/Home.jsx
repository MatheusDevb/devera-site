// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import CTASection from "../components/CTASection.jsx";
import PortfolioPreview from "../components/PortfolioPreview.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CTASection />
      <PortfolioPreview />
    </>
  );
}

export default Home;
