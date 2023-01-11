import styles from "../styles/Home.module.css";

import btnWhats from "../public/icons/whats.png";

import Introduction from "../components/Introduction";
import Works from "../components/Works";
import Questions from "../components/Questions";
import About from "../components/About";
import Sell from "../components/Sell";

import Image from "next/image";
import { Montserrat } from "@next/font/google";

export default function Home() {
  return (
    <div className={styles.App}>
      <a
        className={styles.whatsAll}
        href="https://wa.me/+5515997016729"
        target={"_blank"}
      >
        <Image src={btnWhats} alt="Whatsapp" />
      </a>
      <Introduction />
      <Works />
      <Questions />
      <About />
      <Sell />
    </div>
  );
}