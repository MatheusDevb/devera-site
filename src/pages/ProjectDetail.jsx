// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./ProjectDetail.module.css";
import Button from "../components/Button";

// --- BANCO DE DADOS DOS PROJETOS ---
// No futuro, isso poderia vir de uma API, mas por enquanto, vamos mantê-lo aqui.
import project1Image from "../assets/projeto-1.png";
import project2Image from "../assets/projeto-2.png";
import project3Image from "../assets/projeto-dataage-1.png";

const projectsData = {
  "projeto-1": {
    title: "Clínica Médica",
    category: "Website Institucional",
    image: project1Image,
    description:
      "O desafio era criar um site que transmitisse confiança, profissionalismo e acolhimento. Desenvolvemos uma plataforma com agendamento online, informações sobre tratamentos e um blog de saúde, tudo com um design limpo e acessível.",
    technologies: ["React", "CSS Modules", "React Router"],
    liveUrl: "#", // Link para o site ao vivo
  },
  "projeto-2": {
    title: "Tapeçaria Automotiva",
    category: "Website Institucional",
    image: project2Image,
    description:
      "Para esta empresa tradicional, o objetivo era modernizar sua presença online. Criamos um catálogo visual dos serviços e materiais, com um design que reflete a qualidade artesanal do trabalho, facilitando o contato de novos clientes.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
  },
  "projeto-3": {
    title: "ERP - Data Age",
    category: "Aplicação Web",
    image: project3Image,
    description:
      "Desenvolvimento de um módulo crucial para um sistema de ERP (Enterprise Resource Planning). O foco foi criar uma interface de usuário (UI) complexa, mas intuitiva, para gerenciamento de dados, com alta performance e segurança.",
    technologies: ["React", "Redux", "Styled-Components", "API RESTful"],
    liveUrl: "#",
  },
};
// --- FIM DO BANCO DE DADOS ---

function ProjectDetail() {
  const { projectId } = useParams(); // Pega o 'projectId' da URL
  const project = projectsData[projectId];

  // Se o projeto não for encontrado, exibe uma mensagem
  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Projeto não encontrado</h1>
        <p>O projeto que você está procurando não existe ou foi movido.</p>
        <Link to="/portfolio">Voltar ao Portfólio</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfólio Devéra</title>
        <meta
          name="description"
          content={project.description.substring(0, 160)}
        />
      </Helmet>

      <div className={styles.projectDetailPage}>
        <header className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <h1>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </header>

        <div className={styles.imageContainer}>
          <img src={project.image} alt={`Imagem do projeto ${project.title}`} />
        </div>

        <div className={styles.detailsContainer}>
          <h2>Tecnologias Utilizadas</h2>
          <div className={styles.techList}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto Online
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
