import React, { useState } from "react";
import { useAuth } from "../../../../providers/auth";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";

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

	diluicao: {
		color: "black",
		fontSize: "0.7em"
	},

	doseatual: {
		color: "white"
	},

	dosemax: {
		color: "white"
	},

	dosemin: {
		color: "white"
	},

	botao: {
		fontSize: "0.7em"
	},

	input: {
		fontSize: "0.9em",
		width: 40,
		textAlign: "center"
	}
}));

export default function Midazolan() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	/* variaveis */

	const { peso } = useAuth();
	const { mlhAtual } = useAuth();

	const [VolumeDeDroga, setVolumeDeDroga] = useState(40);
	const [VolumeTotal, setVolumeTotal] = useState(100);
	const [ConcentracaoAmpola, setConcentracaoAmpola] = useState(5);
	const [DoseMin] = useState(20);
	const [DoseMax] = useState(600);

	const ConcentracaoFinal = (ConcentracaoAmpola * VolumeDeDroga) / VolumeTotal;
	const DoseAtual = ((mlhAtual * ConcentracaoFinal) / peso) * 1000;

	const mlhMax = (DoseMax * peso) / (ConcentracaoFinal * 1000);
	const mlhMin = (DoseMin * peso) / (ConcentracaoFinal * 1000);

	const VolumeSoro = VolumeTotal - VolumeDeDroga;

	return (
		<div className={classes.root}>
			<span className={classes.droga}>Midazolan</span> <br />
			<span className={classes.diluicao}>
				{" "}
				Diluição de {VolumeDeDroga} ml de droga em {VolumeSoro} ml de soro.{" "}
			</span>{" "}
			<br />
			<span className={classes.doseatual}>
				{" "}
				A dose atual é de {DoseAtual.toFixed(2)} mcg/kg/min{" "}
			</span>{" "}
			<br />
			<span className={classes.dosemax}>
				{" "}
				Dose máxima é de {mlhMax.toFixed(0)} ml/h{" "}
			</span>{" "}
			<br />
			<span className={classes.dosemin}>
				{" "}
				Dose mínima é de {mlhMin.toFixed(0)} ml/h{" "}
			</span>{" "}
			<br />
			<button className={classes.botao} type="button" onClick={handleClick}>
				Mudar Diluição
			</button>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<div className={classes.paper}>
					<span>Qual a concentração por ml da ampola?</span> <br />
					<input
						type="number"
						className={classes.input}
						value={ConcentracaoAmpola}
						onChange={(e) => setConcentracaoAmpola(e.target.value)}
					/>
					<br />
					<span>Quantos ml de medicação?</span> <br />
					<input
						type="number"
						className={classes.input}
						value={VolumeDeDroga}
						onChange={(e) => setVolumeDeDroga(e.target.value)}
					/>
					<br />
					<span>Volume total da solução?</span> <br />
					<input
						type="number"
						className={classes.input}
						value={VolumeTotal}
						onChange={(e) => setVolumeTotal(e.target.value)}
					/>
					<br />
				</div>
			</Popper>
		</div>
	);
}
