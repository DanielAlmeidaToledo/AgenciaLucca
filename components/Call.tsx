import styles from "../styles/Call.module.css";

import AgenciaLucca from "../public/media/logo1.png";

import { MdAddBox } from "react-icons/md";
import Image from "next/image";

export default function Call() {
  return (
    <div className={styles.Call}>
      <div className={styles.callLeft}>
        <Image
          src={AgenciaLucca}
          className={styles.callImg}
          alt="Agência Lucca"
        />
      </div>
      <div className={styles.callRight}>
        <p className={styles.callMsg1}>
          Quer alcançar novos clientes, aumentar seu faturamento e melhorar a
          presença local da sua loja?
        </p>
        <p className={styles.callMsg2}>
          Nós não vendemos um simples serviço, vendemos:
        </p>
        <div className={styles.callItems}>
          <div className={styles.callValue}>
            <MdAddBox size={35} color={"#FFDA48"} />
            <p className={styles.callItem}>Faturamento</p>
          </div>
          <div className={styles.callValue}>
            <MdAddBox size={35} color={"#FFDA48"} />
            <p className={styles.callItem}>Vendas e Pedidos</p>
          </div>
          <div className={styles.callValue}>
            <MdAddBox size={35} color={"#FFDA48"} />
            <p className={styles.callItem}>Dinheiro no seu bolso</p>
          </div>
        </div>
      </div>
    </div>
  );
}
