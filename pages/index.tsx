import styles from "../styles/Home.module.css";

import btnWhats from "../public/icons/whats.png";

import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Works from "../components/Works";
import Questions from "../components/Questions";
import About from "../components/About";
import Sell from "../components/Sell";
import Footer from "../components/Footer";

import Image from "next/image";

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
      <Navbar />
      <Introduction />
      <Works />
      <Questions />
      <About />
      <Sell />
      <Footer />
    </div>
  );
}
