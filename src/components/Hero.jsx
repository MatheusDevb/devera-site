// src/components/Hero.jsx
import styles from "./Hero.module.css";
import Button from "./Button.jsx"; // 1. Importe o componente Button

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

        {/* 2. Substitua o <a> antigo pelo componente Button */}
        <Button to="/contato" variant="primary">
          Vamos conversar sobre seu projeto
        </Button>
      </div>
    </section>
  );
}

export default Hero;
