// src/components/Hero.jsx
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Criamos experiências digitais que{" "}
          <span className={styles.highlight}>apaixonam</span>.
        </h1>
        <p className={styles.subtitle}>
          Transformamos ideias em websites e aplicações web modernas,
          interativas e de alta performance com foco em design e resultados.
        </p>
        <a href="/contato" className={styles.ctaButton}>
          Vamos conversar sobre seu projeto
        </a>
      </div>
    </section>
  );
}

export default Hero;
