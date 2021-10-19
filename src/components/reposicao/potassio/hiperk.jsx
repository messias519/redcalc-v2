import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10
  },

  paper: {
    border: "2px solid",
    textAlign: "center",
    color: "white",
    fontSize: "0.9em",
    backgroundColor: "black",
    width: 250
  },

  droga: {
    color: "white",
    fontSize: "1.5em"
  },

  bloco: {
    textAlign: "center"
  },

  tabela: {
    textAlign: "center",
    fontWeight: "bold"
  }
}));

export default function HiperK() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <span className={classes.droga}>Hipercalemia</span> <br />
      <div>
        <table className={classes.tabela} width="100%" border="2px">
          <tr>
            <th width="10%">K</th>
            <th width="5%">Classificação</th>
            <th width="40%">Conduta</th>
          </tr>
          <tr>
            <td>> 7</td>
            <td>Grave</td>
            <td>Hemodiálise</td>
          </tr>
          <tr>
            <td>6,1 - 7</td>
            <td>Moderada</td>
            <td>
              Bicarbonato de Sódio 8,4% 1mEq(1ml)/kg lento 4/4h <br /> Insulina
              R 10u + GH50% 100ml até 4/4h
            </td>
          </tr>
          <tr>
            <td>5-6</td>
            <td>Leve</td>
            <td>
              Furosemida 1mg/kg <br /> Fenoterol 10gts 4/4h <br />
              Sorcal 10-30g VR 4/4h
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
