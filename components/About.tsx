import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.About}>
      <h3 className={styles.aboutTitle}>SOBRE</h3>
      <div className={styles.aboutDiv}>
        <span className={styles.aboutText}>
          Somos uma empresa especializada em anúncios online para negócios
          locais, com ampla experiência em docerias, sendo um de nosso
          principais clientes a famosa franquia Sodiê Doces.
          <br />
          <br />
          Meu nome é Lucca Camargo, sou CEO da Agência Lucca e iniciei ao final
          de 2019 o meu primeiro trabalho com a Sodiê Doces(Sodiê Alphaville) e
          atualmente gerencio 7 lojas da franquia, além de outras empresas em
          diferentes áreas.
          <br />
          <br />
          Apesar de estar nos bastidores, venho crescendo entre as lojas através
          de indicações de um franqueado para o outro.
          <br />
          <br />
          Foi com responsabilidade, carinho e dedicação com cada loja que me
          desenvolvi ao ponto de trabalhar com os anúncios online e implantar em
          algumas lojas o que aprendi.
        </span>
      </div>
    </div>
  );
}
