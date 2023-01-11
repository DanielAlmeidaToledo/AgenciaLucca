import Head from "next/head";

import style from "../styles/TermoPolitica.module.css";

export default function Policita() {
  return (
    <>
      <Head>
        <title>Políticas de Privacidade</title>
        <link rel="shortcut icon" href="/media/logo3.png" type="image/x-icon" />
      </Head>
      <div className={style.screen}>
        <h2>POLÍTICAS DE PRIVACIDADE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati
          minus mollitia sint, odit laborum, corporis nulla voluptatum corrupti
          ducimus sunt ipsum. Sint enim quos perspiciatis assumenda praesentium.
          Sit, repellendus! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>
          Sint veritatis deserunt nostrum autem neque adipisci sed amet quae ea
          numquam libero, enim atque possimus, ipsum dignissimos odit earum sit
          porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          mollitia dignissimos velit tempore, ab ullam ducimus eligendi eaque
          quis obcaecati minima! Debitis eos exercitationem delectus magni fuga!
          Nemo, suscipit harum.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          qui possimus nulla quibusdam, eos sit alias quisquam quidem libero
          similique magni cupiditate inventore dicta omnis repellendus
          distinctio rerum eligendi adipisci?
        </p>
      </div>
    </>
  );
}
