import styles from "../styles/Introduction.module.css";

import LF from "../public/media/lfRemove.png";
import cx from "classnames";

import Image from "next/image";

import { Link } from "react-scroll";

export default function Introduction() {
  return (
    <div className={styles.Introduction} id="Home">
      <div className={styles.agenciaHome}>
        <h1 className={styles.h1Home}>AGENCIA</h1>
        <h1 className={cx(styles.h1Home, styles.h1Home2)}>LUCCA</h1>
      </div>
      <div className={styles.divDown}>
        <Image
          src={LF}
          priority={true}
          quality={100}
          className={styles.photoHome}
          alt="Lucas Fernando"
        />
        <div className={styles.orcamentoHome}>
          <Link
            to="Sell"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className={styles.btnOrcamento}
          >
            Realizar um orçamento
          </Link>
        </div>
      </div>
    </div>
  );
}
