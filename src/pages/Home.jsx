// src/pages/Home.jsx
import Hero from "../components/Hero.jsx";
import ServicesSection from "../components/ServicesSection.jsx"; // 1. Importe a nova seção

function Home() {
  return (
    <>
      <Hero />
      <ServicesSection /> {/* 2. Adicione a seção aqui */}
    </>
  );
}

export default Home;
