// src/components/PortfolioPreview.jsx
import styles from "./PortfolioPreview.module.css";
import Button from "./Button.jsx";

// 1. Importando as imagens dos projetos
import project1Image from "../assets/projeto-1.jpg";
import project2Image from "../assets/projeto-2.jpg";

// 2. Criando a lista com os dados dos projetos
const projects = [
  {
    image: project1Image,
    title: "Nome do Projeto 1",
    description:
      "Uma breve descrição do que foi feito neste projeto, os desafios e as tecnologias utilizadas.",
    link: "/portfolio/projeto-1", // Link para a página de detalhes do projeto (faremos no futuro)
  },
  {
    image: project2Image,
    title: "Nome do Projeto 2",
    description:
      "Uma breve descrição do que foi feito neste projeto, os desafios e as tecnologias utilizadas.",
    link: "/portfolio/projeto-2",
  },
];

function PortfolioPreview() {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              {/* Poderíamos adicionar um link/botão aqui se quiséssemos */}
            </div>
          </div>
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
