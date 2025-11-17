// src/components/Hero.jsx
import styles from "./Hero.module.css";
import Button from "./Button.jsx";
import ParticlesBackground from "./ParticlesBackground.jsx"; // 1. Importe o componente

function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* 2. Adicione o componente de partículas */}
      <div className={styles.particlesContainer}>
        <ParticlesBackground />
      </div>

      {/* 3. O conteúdo fica por cima */}
      <div className={styles.heroContent}>
        <h1>
          Design e código que{" "}
          <span className={styles.highlight}>apaixonam</span>.
        </h1>
        <p>
          Transformamos ideias em experiências digitais memoráveis. Vamos
          construir algo incrível juntos?
        </p>
        <Button to="/contato" variant="primary">
          Fale Conosco
        </Button>
      </div>
    </section>
  );
}

export default Hero;
