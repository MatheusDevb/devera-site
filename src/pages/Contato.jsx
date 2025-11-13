// src/pages/Contato.jsx
import { useState } from "react";
import styles from "./Contato.module.css";
import Button from "../components/Button.jsx";
import { FiMail, FiMapPin } from "react-icons/fi"; // Ícones para email e localização

function Contato() {
  // Estados para cada campo do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Validação simples
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Aqui é onde a mágica aconteceria no futuro:
    // - Enviar os dados para um serviço de email (EmailJS, Formspree)
    // - Ou para uma API backend que você construiria
    console.log("Formulário enviado:", { name, email, message });
    alert(`Obrigado pelo seu contato, ${name}! Responderei em breve.`);

    // Limpa o formulário após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* Coluna da Esquerda: Informações */}
        <div className={styles.infoSide}>
          <h1>Vamos conversar</h1>
          <p>
            Tem uma ideia, um projeto ou apenas uma pergunta? Adoraria ouvir de
            você. Preencha o formulário ou entre em contato por um dos canais
            abaixo.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <FiMail size={20} />
              <span>seu.email@devera.com</span>
            </div>
            <div className={styles.detailItem}>
              <FiMapPin size={20} />
              <span>São Paulo, Brasil (Atendimento Remoto)</span>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className={styles.formSide}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Seu nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Seu e-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Sua mensagem</label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
