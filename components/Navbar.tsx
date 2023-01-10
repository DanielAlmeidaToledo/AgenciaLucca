import styles from "../styles/Navbar.module.css";

import { BsWhatsapp } from "react-icons/bs";

import { Link } from "react-scroll";
import cx from "classnames";

import Logo from "../public/media/logo3.png";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="" className={cx(styles.navAgencia, styles.navContact)}>
        <Image src={Logo} alt="Logo" className={styles.navLogo} />
      </a>
      <ul className={styles.navRouter}>
        <li className={styles.navLi}>
          <Link to="Home" spy={true} smooth={true} offset={-10} duration={500}>
            INÍCIO
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link to="Works" spy={true} smooth={true} offset={20} duration={1000}>
            TRABALHOS
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link
            to="Questions"
            spy={true}
            smooth={true}
            offset={50}
            duration={1500}
          >
            DÚVIDAS
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link to="About" spy={true} smooth={true} offset={50} duration={2000}>
            SOBRE
          </Link>
        </li>
      </ul>
      <a
        href="https://wa.me/351913469032"
        target={"_blank"}
        className={styles.navContact}
      >
        Contato
        <BsWhatsapp className={styles.navWhats} size={23} />
      </a>
    </div>
  );
}
