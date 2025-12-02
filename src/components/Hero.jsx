// src/components/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Button from "./Button";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* 1. O VÍDEO DE BACKGROUND */}
      <div className={styles.videoWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline // Essencial para autoplay em dispositivos móveis
          className={styles.video}
          // O caminho para o vídeo na pasta 'public'
          src="/videos/hero-background.mp4"
        />
      </div>

      {/* 2. O CONTEÚDO DE TEXTO */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Design e código que{" "}
          <span className={styles.highlight}>apaixonam.</span>
        </h1>
        <p className={styles.subtitle}>
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
