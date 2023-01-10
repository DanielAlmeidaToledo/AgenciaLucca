import styles from "../styles/Works.module.css";

import CardsWork from "./CardsWork";
import Call from "./Call";

import icon1 from "../public/icons/iconAnuncio.png";
import icon2 from "../public/icons/iconGoogle.png";
import icon3 from "../public/icons/iconWhats.png";
import icon4 from "../public/icons/iconCreative.png";
import icon5 from "../public/icons/iconVendas.png";
import icon6 from "../public/icons/iconFeedback.png";
import icon7 from "../public/icons/iconLink.png";
import icon8 from "../public/icons/iconCampanha.png";

export default function Works() {
  const icons = [
    { name: "Criação e gestão de anúncios", img: icon1 },
    { name: "Configuração do Google meu negócio", img: icon2 },
    { name: "Catálogo do Whatsapp", img: icon3 },
    { name: "Consultoria de Criativos", img: icon4 },
    { name: "Estratégia de vendas", img: icon5 },
    { name: "Reuniões de feedback", img: icon6 },
    { name: "Linktree personalizado", img: icon7 },
    { name: "Campanhas voltadas para vendas", img: icon8 },
  ];
  return (
    <div className={styles.Works} id="Works">
      <h3 className={styles.titleWorks}>TRABALHOS</h3>
      <div className={styles.cards}>
        {icons.map((item) => {
          const { name, img } = item;
          return <CardsWork name={name} img={img} key={name} />;
        })}
      </div>
      <Call />
    </div>
  );
}
