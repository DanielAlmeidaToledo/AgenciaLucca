import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import styles from "../styles/Questions.module.css";

export default function Questions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={
        <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />
      }
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(13, 13, 13, 1)"
        : "rgba(13, 13, 13, 1)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: "#fff",
  }));

  return (
    <div className={styles.Questions} id="Questions">
      <h3 className={styles.titleQuestions}>DÚVIDAS</h3>
      <div className={styles.accordion}>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Google - Meu negócio
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Plataforma da Google que ajuda seus clientes a te encontrarem ao
              pesquisar no Google.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Catálogo no Whatsapp
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Configuração do catálogo do Whatsapp para recepcionar seus
              clientes da melhor maneira possível
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Estratégia de Vendas
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Te ajudamos a implantar a estratégia de vendas para a loja.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Reuniões de Feedback
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Saiba para onde seu dinheiro está indo, e sobre os caminhos que
              estamos tomando para a sua campanha.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Consultoria de Criativos
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Conte com um suporte para desenvolver os melhores materiais para
              atrair seu público até a loja e bombar seu instagram.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.acordItem}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.acord}
            >
              Linktree Personalizado
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={styles.textAcord}>
            <Typography className={styles.textAcord}>
              Criação do linktree para captar seus clientes das redes sociais a
              partir do link do perfil.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
