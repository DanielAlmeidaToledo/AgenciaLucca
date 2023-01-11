import styles from "../styles/Home.module.css";

import btnWhats from "../public/icons/whats.png";

import Introduction from "../components/Introduction";
import Works from "../components/Works";
import Questions from "../components/Questions";
import About from "../components/About";
import Sell from "../components/Sell";

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agência Lucca</title>
        <link rel="shortcut icon" href="/media/logo3.png" type="image/x-icon" />
        <meta
          name="keyworkds"
          content="marketing, marketing digital, agência marketing, Agencia Lucca"
        ></meta>
        <meta name="description" content="Agência de marketing digital"></meta>
      </Head>
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
    </>
  );
}