// src/components/PortfolioPreview.jsx
import styles from "./PortfolioPreview.module.css";
import Button from "./Button.jsx";
import useFadeIn from "../hooks/useFadeIn.js"; // 1. Importe o hook

// Importando as imagens dos projetos
import project1Image from "../assets/projeto-1.png";
import project3Image from "../assets/projeto-dataage-1.png";
import project4Image from "../assets/projeto-aram01.png";

// Criando a lista com os dados dos projetos
const projects = [
  {
    image: project1Image,
    title: "Clínica Médica",
    description:
      "Site institucional responsivo com foco em agendamento simplificado e experiência do usuário em dispositivos móveis.",
    link: "/portfolio/projeto-1",
  },
  {
    image: project4Image,
    title: "Aram Ambiental",
    description:
      "Website institucional que destaca soluções ambientais com design profissional e navegação intuitiva para clientes corporativos.",
    link: "/portfolio/projeto-4",
  },
  {
    image: project3Image,
    title: "ERP - Data Age",
    description:
      "Redesign de interface para sistema ERP, tornando a gestão empresarial mais intuitiva, rápida e agradável para os usuários.",
    link: "/portfolio/projeto-3",
  },
];

function PortfolioPreview() {
  // 2. Use o hook para obter a ref e o estado de visibilidade
  const [sectionRef, isVisible] = useFadeIn();

  return (
    // 3. Adicione a ref e as classes de animação ao elemento <section>
    <section
      ref={sectionRef}
      className={`${styles.portfolio} fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <a href={project.link} key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.cta}>
        <Button to="/portfolio" variant="primary">
          Ver todos os projetos
        </Button>
      </div>
    </section>
  );
}

export default PortfolioPreview;
