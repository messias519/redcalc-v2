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

export default function HipoK() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div className={classes.root}>
      <span className={classes.droga}>Hipocalemia</span> <br />
      <div>
        <table className={classes.tabela} width="100%" border="2px">
          <tr>
            <th width="10%">K</th>
            <th width="5%">Classificação</th>
            <th width="40%">Conduta</th>
          </tr>
          <tr>
            <td>3,5 - 3</td>
            <td>Leve</td>
            <td>
              Reposição oral: <br /> KCl Xarope 6% 10-20ml 8/8h <br />
              (15ml = 12mEq)
            </td>
          </tr>
          <tr>
            <td> &lt; 3 </td>
            <td>Grave</td>
            <td>
              Reposição venosa:
              <br />
              AVP: SF0,9% 250ml + KCl 19,1% 5ml em 2h - 12,5mEq - Vel. 5-10mEq/h
              Conc. 50 mEq/L
              <br /> CVC: SF0,9% 250ml + KCl 19,1% 10ml em 1h - 25mEq - Vel.
              20-30mEq/h Conc. 100 mEq/L
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
