import Image from "next/image";
import styles from "../styles/CardsWorks.module.css";

type Props = {
  name: string;
  img: HTMLImageElement;
};

export default function CardsWork({ name, img }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Image src={img} className={styles.cardImg} alt="" />
        <h3 className={styles.cardTitle}>{name}</h3>
      </div>
    </div>
  );
}
