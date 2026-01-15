// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/projectsData"; // Importa os dados
import styles from "./ProjectDetail.module.css";
import NotFound from "./NotFound";

function ProjectDetail() {
  // Pega o ID do projeto da URL (ex: /portfolio/clinica-medica)
  const { projectId } = useParams();

  // Busca o projeto correspondente no array de dados
  const project = projects.find((p) => p.id === projectId);

  // Se o projeto não existir, mostra a página 404
  if (!project) {
    return <NotFound />;
  }

  // Lógica para navegação Próximo/Anterior
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* SEO: Título e descrição específicos para cada projeto */}
      <Helmet>
        <title>{project.title} | Portfólio Devéra</title>
        <meta
          name="description"
          content={project.challenge.substring(0, 155)}
        />
      </Helmet>

      <div className={styles.projectDetail}>
        {/* Banner Hero com imagem de fundo */}
        <header className={styles.hero}>
          <div className={styles.heroImage}>
            <img src={project.mainImage} alt={project.title} />
          </div>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.category}>{project.category}</span>
              <h1>{project.title}</h1>
            </div>
          </div>
        </header>

        {/* Container principal do conteúdo */}
        <div className={styles.container}>
          {/* Resumo do Projeto em Cards */}
          <section className={styles.summary}>
            <div className={styles.summaryCard}>
              <h3>Cliente</h3>
              <p>{project.client}</p>
            </div>
            <div className={styles.summaryCard}>
              <h3>Serviços</h3>
              <p>{project.services}</p>
            </div>
            <div className={styles.summaryCard}>
              <h3>Tecnologias</h3>
              <p>{project.technologies}</p>
            </div>
            <div className={styles.summaryCard}>
              <h3>Ver Projeto</h3>
              {project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveButton}
                >
                  Visitar Site
                </a>
              ) : (
                <p className={styles.liveButton}>Acessar Site</p>
              )}
            </div>
          </section>

          {/* Seção: O Desafio */}
          <section className={styles.contentSection}>
            <h2>O Desafio</h2>
            <p>{project.challenge}</p>
          </section>

          {/* Seção: A Solução */}
          <section className={styles.contentSection}>
            <h2>A Solução</h2>
            <p>{project.solution}</p>
          </section>

          {/* Galeria de Imagens (se houver mais de uma imagem) */}
          {project.gallery && project.gallery.length > 0 && (
            <section className={styles.gallery}>
              <h2>Galeria do Projeto</h2>
              <div className={styles.galleryGrid}>
                {project.gallery.map((image, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <img
                      src={image}
                      alt={`${project.title} - Captura ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Navegação entre projetos */}
          <nav className={styles.projectNav}>
            <div className={styles.navItem}>
              {prevProject && (
                <Link
                  to={`/portfolio/${prevProject.id}`}
                  className={styles.navLink}
                >
                  <span className={styles.navLabel}>← Projeto Anterior</span>
                  <span className={styles.navTitle}>{prevProject.title}</span>
                </Link>
              )}
            </div>
            <div className={styles.navItem}>
              {nextProject && (
                <Link
                  to={`/portfolio/${nextProject.id}`}
                  className={styles.navLink}
                >
                  <span className={styles.navLabel}>Próximo Projeto →</span>
                  <span className={styles.navTitle}>{nextProject.title}</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
