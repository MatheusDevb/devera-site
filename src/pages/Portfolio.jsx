// src/pages/Portfolio.jsx
import { Helmet } from "react-helmet-async"; // 1. Importe o Helmet
import styles from "./Portfolio.module.css";

// Importe as imagens dos seus projetos
import project1Image from "../assets/projeto-1.png";
import project2Image from "../assets/projeto-2.png";
import project3Image from "../assets/projeto-dataage-1.png";
import project4Image from "../assets/projeto-aram01.png";

// Crie uma lista com os dados de TODOS os seus projetos
const projects = [
  {
    image: project4Image,
    title: "Aram Ambiental",
    category: "Website Institucional",
    link: "/portfolio/projeto-4",
  },
  {
    image: project2Image,
    title: "Auto Sport",
    category: "Website Institucional",
    link: "/portfolio/projeto-2",
  },
  {
    image: project3Image,
    title: "ERP - Data Age",
    category: "Aplicação Web",
    link: "/portfolio/projeto-3",
  },
  {
    image: project1Image,
    title: "Vida & Saúde",
    category: "Website Institucional",
    link: "/portfolio/projeto-1",
  },
];

function Portfolio() {
  return (
    // 2. Adicione o fragmento <> e o Helmet no início
    <>
      <Helmet>
        <title>Portfólio | Devéra</title>
        <meta
          name="description"
          content="Explore nosso portfólio de projetos, incluindo websites institucionais e aplicações web, e veja como transformamos ideias em realidade."
        />
      </Helmet>

      {/* 3. O resto do seu código da página vem aqui */}
      <div className={styles.portfolioPage}>
        <div className={styles.header}>
          <h1>Nosso Trabalho</h1>
          <p>
            Explore alguns dos projetos que tivemos o prazer de desenvolver.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a href={project.link} key={index} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
