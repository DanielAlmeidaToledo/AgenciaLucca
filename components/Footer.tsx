import styles from "../styles/Footer.module.css";

import Image from "next/image";
import Link from "next/link";

import Logo from "../public/media/logo13.png";
import whats from "../public/redes/whats.png";
import insta from "../public/redes/insta.png";
import face from "../public/redes/face.png";
import email from "../public/redes/email.png";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footTop}>
        <Link legacyBehavior href="/">
          <Image className={styles.footImg} src={Logo} alt="" />
        </Link>
        <ul className={styles.footItems}>
          <li className={styles.footItem}>
            <Link legacyBehavior href="/termo">
              <a className={styles.linkRoute}>Termos de uso</a>
            </Link>
          </li>
          <li className={styles.footItem}>
            <Link
              className={styles.linkRoute}
              legacyBehavior
              href="/politica-privacidade"
            >
              <a className={styles.linkRoute}>Políticas de privacidade</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footBottom}>
        <span>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/danielalmeidadetoledo/"
            target={"_blank"}
            className={styles.linkLinkedin}
          >
            Daniel Toledo
          </a>
        </span>
        <div className={styles.redes}>
          <a
            className={styles.redesItem}
            target={"_blank"}
            href="https://wa.me/+5515997016729"
          >
            <Image className={styles.imgRedes} src={whats} alt="" />
          </a>
          <a
            className={styles.redesItem}
            target={"_blank"}
            href="https://www.instagram.com/agencia_lucca/"
          >
            <Image className={styles.imgRedes} src={insta} alt="" />
          </a>
          <a
            className={styles.redesItem}
            target={"_blank"}
            href="https://www.facebook.com/profile.php?id=100081047435931"
          >
            <Image className={styles.imgRedes} src={face} alt="" />
          </a>
          <a
            className={styles.redesItem}
            target={"_blank"}
            href="mailto:lucca@agencialucca.com"
          >
            <Image className={styles.imgRedes} src={email} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
