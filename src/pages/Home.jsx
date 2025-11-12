// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import CTASection from "../components/CTASection.jsx"; // 1. Importe a nova seção

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CTASection /> {/* 2. Adicione a seção aqui */}
    </>
  );
}

export default Home;
