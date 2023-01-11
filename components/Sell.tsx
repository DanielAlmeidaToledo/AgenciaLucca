import styles from "../styles/Sell.module.css";

import { useState } from "react";

import emailjs from "emailjs-com";

export default function Sell() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function sendEmail(e: React.ChangeEvent<any>) {
    e.preventDefault();
    console.log(name + " - " + message + " - " + email);

    if (name && message && email) {
      emailjs
        .sendForm(
          "gmailMessage",
          "template_ewyqt4u",
          e.target,
          "jPy-T5NudB8ThMkRk"
        )
        .then(
          (result) => {
            alert("Mensagem enviada com sucesso!");
          },
          (error) => {
            alert(error.message);
          }
        );
      e.target.reset();
    } else {
      alert("Erro");
    }
  }

  return (
    <div className={styles.Sell} id="Sell">
      <div className={styles.sellLeft}>
        Nossa equipe está esperando para te atender. Entre em contato conosco!
      </div>
      <div className={styles.sellRight}>
        <form onSubmit={sendEmail}>
          <div className={styles.sellDiv}>
            <input
              className={styles.sellInput}
              type="text"
              placeholder="Nome"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.sellDiv}>
            <input
              className={styles.sellInput}
              type="text"
              placeholder="Assunto"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={styles.sellDiv}>
            <input
              className={styles.sellInput}
              type="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.sellDiv}>
            <input
              type="submit"
              className={styles.btnSell}
              value="Enviar"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
