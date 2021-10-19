import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { View, ScrollView } from "react-native";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useAuth } from "../../providers/auth.js";
import HipoK from "./potassio/hipok.jsx";
import HiperK from "./potassio/hiperk.jsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "95%",
      marginTop: 5,
      marginLeft: "2.5%",
      textAlign: "center",
      backgroundColor: "black"
    },

    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },

    titulo: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold"
    },
    selecionepeso: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold"
    },
    subtitulo: {
      color: "Black",
      fontSize: 25,
      fontWeight: "bold"
    },
    input: {
      fontSize: 25,
      fontWeight: "bold",
      width: 70,
      textAlign: "center"
    }
  })
);

export default function Reposicao() {
  const classes = useStyles();

  return (
    <View>
      <div>
        <div className={classes.root}>
          <div className={classes.titulo}>Reposições</div> <br />
          <br />
          <ScrollView>
            <Accordion>
              <AccordionSummary className={classes.subtitulo}>
                <span>Potássio</span> <br />
              </AccordionSummary>
              <br />
              <AccordionDetails>
                <HipoK />
              </AccordionDetails>
              <AccordionDetails>
                <HiperK />
              </AccordionDetails>
            </Accordion>
            <br />
          </ScrollView>
        </div>
      </div>
    </View>
  );
}
