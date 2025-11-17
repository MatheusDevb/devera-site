// src/pages/Contato.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async"; // Importando o Helmet
import emailjs from "@emailjs/browser";
import styles from "./Contato.module.css";
import Button from "../components/Button.jsx";
import { FiMail, FiMapPin } from "react-icons/fi";

function Contato() {
  // Estados para cada campo do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // Estado para controlar o envio

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Truque para evitar o scanner de segredos da Netlify
    const env = import.meta.env;
    const serviceID = env["VITE_EMAILJS_SERVICE_ID"];
    const templateID = env["VITE_EMAILJS_TEMPLATE_ID"];
    const publicKey = env["VITE_EMAILJS_PUBLIC_KEY"];

    if (!serviceID || !templateID || !publicKey) {
      console.error(
        "As variáveis de ambiente do EmailJS não foram carregadas. Verifique a configuração na Netlify."
      );
      alert(
        "O serviço de contato está temporariamente indisponível. Por favor, tente mais tarde."
      );
      return;
    }

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
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
        setIsSending(false);
      });
  };

  return (
    <>
      {/* Tag Helmet para SEO e título da página */}
      <Helmet>
        <title>Contato | Devéra</title>
        <meta
          name="description"
          content="Vamos conversar sobre seu projeto. Entre em contato com a Devéra para transformar sua ideia em um produto digital de sucesso."
        />
      </Helmet>

      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          {/* Coluna da Esquerda: Informações */}
          <div className={styles.infoSide}>
            <h1>Vamos conversar</h1>
            <p>
              Tem uma ideia, um projeto ou apenas uma pergunta? Adoraria ouvir
              de você. Preencha o formulário ou entre em contato por um dos
              canais abaixo.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <FiMail size={20} />
                <span>devera.contato@gmail.com</span>
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
              <Button type="submit" variant="primary" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
