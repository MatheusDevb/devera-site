// src/components/PortfolioPreview.jsx
import styles from "./PortfolioPreview.module.css";
import Button from "./Button.jsx";
import useFadeIn from "../hooks/useFadeIn.js"; // 1. Importe o hook

// Importando as imagens dos projetos
import project1Image from "../assets/projeto-1.png";
import project2Image from "../assets/projeto-2.png";
import project3Image from "../assets/projeto-dataage-1.png";

// Criando a lista com os dados dos projetos
const projects = [
  {
    image: project1Image,
    title: "Clínica Médica",
    description:
      "Uma breve descrição do que foi feito neste projeto, os desafios e as tecnologias utilizadas.",
    link: "/portfolio/projeto-1",
  },
  {
    image: project2Image,
    title: "Tapeçaria Automotiva",
    description:
      "Uma breve descrição do que foi feito neste projeto, os desafios e as tecnologias utilizadas.",
    link: "/portfolio/projeto-2",
  },
  {
    image: project3Image,
    title: "ERP - Data Age",
    description:
      "Uma breve descrição do que foi feito neste projeto, os desafios e as tecnologias utilizadas.",
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
