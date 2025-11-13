// src/pages/Portfolio.jsx
import styles from "./Portfolio.module.css";

// Importe as imagens dos seus projetos
import project1Image from "../assets/projeto-1.png";
import project2Image from "../assets/projeto-2.png";
import project3Image from "../assets/projeto-dataage-1.png";
// Adicione mais imagens conforme necessário
// import project3Image from '../assets/projeto-3.jpg';
// import project4Image from '../assets/projeto-4.jpg';

// Crie uma lista com os dados de TODOS os seus projetos
const projects = [
  {
    image: project1Image,
    title: "Clínica Médica",
    category: "Website Institucional",
    link: "/portfolio/projeto-1",
  },
  {
    image: project2Image,
    title: "Tapeçaria Automotiva",
    category: "Website Institucional",
    link: "/portfolio/projeto-2",
  },
  {
    image: project3Image,
    title: "ERP - Data Age",
    category: "Aplicação Web",
    link: "/portfolio/projeto-3",
  },
  // Adicione mais projetos aqui
  // {
  //   image: project3Image,
  //   title: 'Nome do Projeto 3',
  //   category: 'Aplicação Web',
  //   link: '/portfolio/projeto-3'
  // },
  // {
  //   image: project4Image,
  //   title: 'Nome do Projeto 4',
  //   category: 'Blog Pessoal',
  //   link: '/portfolio/projeto-4'
  // }
];

function Portfolio() {
  return (
    <div className={styles.portfolioPage}>
      <div className={styles.header}>
        <h1>Nosso Trabalho</h1>
        <p>Explore alguns dos projetos que tivemos o prazer de desenvolver.</p>
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
              <span className={styles.projectCategory}>{project.category}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
