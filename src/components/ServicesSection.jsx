// src/components/ServicesSection.jsx
import styles from "./ServicesSection.module.css";
import useFadeIn from "../hooks/useFadeIn.js";
import { FaGoogle } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { LuImageMinus } from "react-icons/lu";
import {
  FiCode,
  FiLayout,
  FiTrendingUp,
  FiBarChart2,
  FiFeather,
  FiSettings,
} from "react-icons/fi";

const services = [
  {
    icon: <FiLayout size={40} />,
    title: "Design UI/UX",
    description:
      "Criamos interfaces intuitivas e encantadoras, focadas na experiência do usuário para garantir que seu público se sinta em casa.",
  },
  {
    icon: <FiCode size={40} />,
    title: "Desenvolvimento Web",
    description:
      "Construímos sites e aplicações de alta performance com as tecnologias mais modernas, garantindo velocidade e segurança.",
  },
  {
    icon: <FiTrendingUp size={40} />,
    title: "Otimização e SEO",
    description:
      "Posicionamos seu site no topo dos buscadores, otimizando a estrutura e o conteúdo para atrair mais visitantes qualificados.",
  },
  {
    icon: <SiGoogleads size={40} />,
    title: "Gestão de Google Ads",
    description:
      "Gerenciamos suas campanhas de Google Ads com estratégia e análise de dados, atraindo clientes qualificados e maximizando seu retorno sobre investimento.",
  },
  {
    icon: <LuImageMinus size={40} />,
    title: "Identidade Visual",
    description:
      "Criamos identidades visuais marcantes e coerentes, desde logotipos até guias de marca, para fortalecer o posicionamento do seu negócio.",
  },
  {
    icon: <FiSettings size={40} />,
    title: "Manutenção e Suporte",
    description:
      "Oferecemos suporte técnico contínuo, atualizações de segurança e otimizações de performance para manter seu site sempre no ar e funcionando perfeitamente.",
  },
];

function ServicesSection() {
  // 1.Capture a variável 'isVisible' retornada pelo hook.
  const [sectionRef, isVisible] = useFadeIn();

  return (
    // 2.Adicione as classes de animação dinamicamente.
    <section
      ref={sectionRef}
      className={`${styles.services} fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2 className={styles.sectionTitle}>Nossas Soluções</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
