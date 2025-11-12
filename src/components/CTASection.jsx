// src/components/CTASection.jsx
import styles from "./CTASection.module.css";
import Button from "./Button.jsx"; // Vamos reutilizar nosso componente de botão!

function CTASection() {
  return (
    <section className={styles.cta}>
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
