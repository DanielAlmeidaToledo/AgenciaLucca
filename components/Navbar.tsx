import styles from "../styles/Navbar.module.css";

import { BsWhatsapp } from "react-icons/bs";
import { Link as Scroll } from "react-scroll";

import cx from "classnames";

import Logo from "../public/media/logo3.png";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="" className={cx(styles.navAgencia, styles.navContact)}>
        <Link legacyBehavior href="/">
          <Image src={Logo} alt="Logo" className={styles.navLogo} />
        </Link>
      </a>
      <ul className={styles.navRouter}>
        <li className={styles.navLi}>
          <Link legacyBehavior href="/">
            <Scroll
              to="Home"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              INÍCIO
            </Scroll>
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link legacyBehavior href="/">
            <Scroll
              to="Works"
              spy={true}
              smooth={true}
              offset={20}
              duration={1000}
            >
              TRABALHOS
            </Scroll>
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link legacyBehavior href="/">
            <Scroll
              to="Questions"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
            >
              DÚVIDAS
            </Scroll>
          </Link>
        </li>
        <li className={styles.navLi}>
          <Link legacyBehavior href="/">
            <Scroll
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
            >
              SOBRE
            </Scroll>
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
