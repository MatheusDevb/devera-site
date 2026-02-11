// src/pages/Servicos.jsx
import { Helmet } from "react-helmet-async";
import styles from "./Servicos.module.css";
import { FiLayout, FiCode, FiTrendingUp, FiSettings } from "react-icons/fi";
import { SiGoogleads } from "react-icons/si";
import { LuImageMinus } from "react-icons/lu";
import CTASection from "../components/CTASection.jsx"; // Reutilizando a seção de CTA

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
  {
    icon: <SiGoogleads size={50} />,
    title: "Gestão Estratégica de Google Ads",
    description:
      "Criamos e gerenciamos campanhas de anúncios no Google Ads com foco em resultados mensuráveis. Nossa abordagem combina pesquisa de palavras-chave estratégicas, segmentação precisa de público e otimização contínua de lances para maximizar seu ROI. Acompanhamos métricas como CTR, CPC e taxa de conversão, ajustando as campanhas em tempo real para garantir que cada real investido traga o máximo retorno possível, atraindo clientes qualificados e prontos para converter.",
    tags: [
      "Pesquisa de Palavras-Chave",
      "Otimização de Campanhas",
      "Análise de ROI",
      "Google Analytics 4",
    ],
  },
  {
    icon: <LuImageMinus size={50} />,
    title: "Identidade Visual e Branding",
    description:
      "Desenvolvemos identidades visuais completas e memoráveis que capturam a essência da sua marca e criam conexão emocional com seu público. Do conceito à execução, criamos logotipos únicos, paletas de cores estratégicas, tipografia personalizada e guias de marca detalhados. Cada elemento visual é pensado para fortalecer o posicionamento do seu negócio no mercado, transmitir profissionalismo e garantir consistência em todos os pontos de contato com seus clientes.",
    tags: [
      "Criação de Logotipo",
      "Paleta de Cores",
      "Manual de Marca",
      "Aplicações Visuais",
    ],
  },
  {
    icon: <FiSettings size={50} />,
    title: "Manutenção e Suporte Técnico",
    description:
      "Seu site é um investimento que precisa de cuidados contínuos. Oferecemos planos de manutenção que incluem atualizações regulares de segurança, backups automáticos, monitoramento de uptime, correção de bugs e otimizações de performance. Nossa equipe está sempre disponível para resolver problemas técnicos rapidamente, implementar melhorias e garantir que seu site esteja sempre no ar, rápido e funcionando perfeitamente. Você foca no seu negócio, nós cuidamos da tecnologia.",
    tags: [
      "Atualizações de Segurança",
      "Backups Automáticos",
      "Monitoramento 24/7",
      "Suporte Prioritário",
    ],
  },
];

function Servicos() {
  return (
    <>
      <Helmet>
        <title>Serviços | Devéra</title>
        <meta
          name="description"
          content="Oferecemos um conjunto completo de serviços, incluindo Design UI/UX, Desenvolvimento Web Sob Medida e Otimização de Performance (SEO)."
        />
      </Helmet>

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

        <CTASection />
      </div>
    </>
  );
}

export default Servicos;
