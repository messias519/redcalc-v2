import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { View, ScrollView } from "react-native";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { useAuth } from "../../providers/auth.js";
import Propofol from "./drogas/sedacao/Propofol";
import Midazolan from "./drogas/sedacao/Midazolan";
import Fentanil from "./drogas/sedacao/Fentanil";
import Cetamina from "./drogas/sedacao/Cetamina";
import Cisatracurio from "./drogas/bnm/Cisatracurio";
import Rocuronio from "./drogas/bnm/Rocuronio";
import Atracurio from "./drogas/bnm/Atracurio";
import Pancuronio from "./drogas/bnm/Pancuronio";
import Adrenalina from "./drogas/dva/Adrenalina";
import Dobutamina from "./drogas/dva/Dobutamina";
import Nitroglicerina from "./drogas/dva/Nitroglicerina";
import Nitroprussiato from "./drogas/dva/Nitroprussiato";
import Noradrenalina from "./drogas/dva/Noradrenalina";
import Vasopressina from "./drogas/dva/Vasopressina";
import Precedex from "./drogas/sedacao/Precedex";

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

export default function CalculadoraDeDoses() {
	const classes = useStyles();
	const { mlhAtual, setmlhAtual } = useAuth();

	return (
		<View>
			<div>
				<div className={classes.root}>
					<span className={classes.titulo}>Drogas</span> <br />
					<div>
						<span className={classes.selecionepeso}>
							Selecione a velocidade:
							<input
								type="number"
								className={classes.input}
								min={1}
								max={200}
								step={1}
								value={mlhAtual}
								maxLength={3}
								onChange={(e) => setmlhAtual(e.target.value)}
							/>{" "}
							ml/h
						</span>
					</div>
					<br />
					<ScrollView>
						<Accordion>
							<AccordionSummary className={classes.subtitulo}>
								<span>Sedação</span> <br />
							</AccordionSummary>
							<br />
							<AccordionDetails>
								<Cetamina /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Fentanil /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Midazolan /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Precedex /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Propofol /> <br />
							</AccordionDetails>
						</Accordion>
						<br />
						<Accordion>
							<AccordionSummary className={classes.subtitulo}>
								<span>BNM</span> <br />
							</AccordionSummary>
							<br />
							<AccordionDetails>
								<Atracurio /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Cisatracurio /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Pancuronio /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Rocuronio /> <br />
							</AccordionDetails>
						</Accordion>
						<br />
						<Accordion>
							<AccordionSummary className={classes.subtitulo}>
								<span>DVA</span> <br />
							</AccordionSummary>
							<br />
							<AccordionDetails>
								<Adrenalina /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Dobutamina /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Nitroglicerina /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Nitroprussiato /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Noradrenalina /> <br />
							</AccordionDetails>
							<AccordionDetails>
								<Vasopressina /> <br />
							</AccordionDetails>
						</Accordion>
					</ScrollView>
				</div>
			</div>
		</View>
	);
}
