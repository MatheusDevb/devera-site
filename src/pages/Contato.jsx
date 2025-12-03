// src/pages/Contato.jsx
import { useState, useRef } from "react"; // 1. Adicione o 'useRef'
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import styles from "./Contato.module.css";
import Button from "../components/Button.jsx";
import { FiMail, FiMapPin } from "react-icons/fi";
function Contato() {
  const form = useRef(); // 2. Crie a referência para o formulário
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // Para feedback ao usuário
  const [text, setText] = useState("");
  const characterLimit = 4000;
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("Enviando...");

    const env = import.meta.env;
    const serviceID = env["VITE_EMAILJS_SERVICE_ID"];
    const templateID = env["VITE_EMAILJS_TEMPLATE_ID"];
    const publicKey = env["VITE_EMAILJS_PUBLIC_KEY"];

    if (!serviceID || !templateID || !publicKey) {
      console.error("Variáveis de ambiente do EmailJS não carregadas.");
      setStatusMessage("Serviço indisponível. Tente mais tarde.");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current, // Enviando a referência do formulário
        publicKey
      )
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setStatusMessage(`Obrigado pelo seu contato! Responderei em breve.`);
        form.current.reset(); // Limpa os campos do formulário
      })
      .catch((err) => {
        console.error("ERRO AO ENVIAR O EMAIL:", err);
        setStatusMessage("Ocorreu um erro ao enviar. Tente novamente.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contato | Devéra</title>
        <meta
          name="description"
          content="Vamos conversar sobre seu projeto. Entre em contato com a Devéra para transformar sua ideia em um produto digital de sucesso."
        />
      </Helmet>

      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
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

          <div className={styles.formSide}>
            {/* 3. Associa a referência 'form' ao elemento form */}
            <form ref={form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Seu nome</label>
                {/* 4. Adiciona o atributo 'name' para o EmailJS identificar o campo */}
                <input type="text" id="name" name="from_name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Seu e-mail</label>
                <input type="email" id="email" name="from_email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={text}
                  required
                  onChange={handleChange}
                  maxlength={characterLimit}
                ></textarea>
                <p>
                  {text.length}/{characterLimit} characters
                </p>
              </div>
              <Button type="submit" variant="primary" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
              {/* Exibe a mensagem de status (sucesso ou erro) */}
              {statusMessage && (
                <p className={styles.statusMessage}>{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contato;
