// src/components/CTASection.jsx
import styles from "./CTASection.module.css";
import Button from "./Button.jsx";
import useFadeIn from "../hooks/useFadeIn.js"; // 1. Importe o hook

function CTASection() {
  // 2. Use o hook para obter a ref e o estado de visibilidade
  const [sectionRef, isVisible] = useFadeIn();

  return (
    // 3. Adicione a ref e as classes de animação ao elemento <section>
    <section
      ref={sectionRef}
      className={`${styles.cta} fade-in ${isVisible ? "visible" : ""}`}
    >
      <div className={styles.ctaContent}>
        <h2 className={styles.title}>Vamos construir algo incrível juntos?</h2>
        <p className={styles.subtitle}>
          Veja os projetos que já transformaram negócios ou entre em contato
          para iniciarmos o seu.
        </p>
        <div className={styles.buttonGroup}>
          <Button to="/portfolio" variant="secondary">
            Ver Portfólio
          </Button>
          <Button to="/contato" variant="secondary">
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
