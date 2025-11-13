// src/pages/Servicos.jsx
import styles from "./Servicos.module.css";
import { FiLayout, FiCode, FiTrendingUp } from "react-icons/fi";
import CTASection from "../components/CTASection.jsx"; // Reutilizaremos nossa seção de CTA!

const services = [
  {
    icon: <FiLayout size={50} />,
    title: "Design UI/UX e Estratégia Digital",
    description:
      "Nossa abordagem começa com um mergulho profundo no seu negócio e no seu público. Criamos wireframes, protótipos interativos e um design de interface (UI) que não só é visualmente impressionante, mas também focado em usabilidade e conversão. O resultado é uma experiência de usuário (UX) que encanta e guia seus clientes de forma intuitiva.",
    tags: [
      "Pesquisa de Usuário",
      "Wireframing",
      "Prototipagem",
      "Design System",
    ],
  },
  {
    icon: <FiCode size={50} />,
    title: "Desenvolvimento Web Sob Medida",
    description:
      "Utilizando tecnologias de ponta como React, transformamos o design em um produto digital vivo, rápido e seguro. Construímos desde sites institucionais elegantes até aplicações web complexas, sempre com código limpo, escalável e otimizado para a melhor performance possível em todos os dispositivos.",
    tags: ["React", "Node.js", "HTML5 & CSS3", "APIs RESTful"],
  },
  {
    icon: <FiTrendingUp size={50} />,
    title: "Otimização de Performance e SEO",
    description:
      "Um site bonito precisa ser encontrado. Implementamos as melhores práticas de SEO (Search Engine Optimization) desde a estrutura inicial do projeto, garantindo que seu site tenha a melhor chance de ranquear bem no Google. Além disso, otimizamos o carregamento das páginas para uma velocidade que impressiona os visitantes e os motores de busca.",
    tags: [
      "SEO On-Page",
      "Otimização de Imagens",
      "Performance Web",
      "Google Analytics",
    ],
  },
];

function Servicos() {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.header}>
        <h1>Soluções para o seu sucesso digital</h1>
        <p>
          Do conceito à realidade, oferecemos um conjunto completo de serviços
          para construir e escalar sua presença online.
        </p>
      </div>

      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceText}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className={styles.tags}>
                {service.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seção de CTA no final da página para incentivar a ação */}
      <CTASection />
    </div>
  );
}

export default Servicos;
