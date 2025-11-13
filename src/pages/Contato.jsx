// src/pages/Contato.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser"; // 1. Importe o EmailJS
import styles from "./Contato.module.css";
import Button from "../components/Button.jsx";
import { FiMail, FiMapPin } from "react-icons/fi";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // Estado para controlar o envio

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSending(true); // Desabilita o botão enquanto envia

    // 2. Crie o objeto de parâmetros para o template
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // 3. Use a função emailjs.send
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        alert(`Obrigado pelo seu contato, ${name}! Responderei em breve.`);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("ERRO AO ENVIAR O EMAIL:", err);
        alert(
          "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde."
        );
      })
      .finally(() => {
        setIsSending(false); // Reabilita o botão
      });
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* ... (a parte do infoSide continua a mesma) ... */}
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

        <div className={styles.formSide}>
          <form onSubmit={handleSubmit}>
            {/* ... (os formGroups continuam os mesmos) ... */}
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

            {/* 4. Modifique o botão para usar o estado isSending */}
            <Button type="submit" variant="primary" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
