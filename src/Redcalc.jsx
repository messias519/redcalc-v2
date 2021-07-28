import React from "react";
import { View, ScrollView } from "react-native";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useAuth } from "./providers/auth.js";
import CalculadoraDeDoses from "./components/calculadoradedoses/calculadoradedoses.jsx";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		inputCard: {
			border: "1px solid #000",
			borderRadius: 10,
			backgroundImage:
				"linear-gradient(to right, #D31027 10%, #EA384D  51%, #D31027  100%)"
		},
		appbar: {
			backgroundColor: "black",
			color: "white",
			fontWeight: "100"
		},
		titulo: {
			fontSize: 25,
			marginTop: 0
		},

		subtituloPeso: {
			fontSize: 25,
			fontWeight: "bold"
		},
		subtituloMlh: {
			fontSize: 25,
			fontWeight: "bold"
		},

		inputGeral: {
			fontSize: 20,
			marginTop: 5,
			marginBottom: 5,
			marginLeft: "15%"
		},

		inputTexto: {
			textAlign: "right"
		},

		input: {
			fontSize: 25,
			fontWeight: "bold",
			width: 70,
			textAlign: "center"
		}
	})
);

export default function Redcalc() {
	const classes = useStyles();
	const { peso, setPeso } = useAuth();

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<View>
			<div className={classes.inputCard}>
				<span className={classes.titulo}>
					<center>Calculando para:</center>
				</span>
				<div className={classes.inputGeral}>
					<div className={classes.inputTexto}>
						<center>
							Peso
							<input
								type="number"
								className={classes.input}
								min={40}
								max={150}
								step={1}
								value={peso}
								maxLength={3}
								onChange={(e) => setPeso(e.target.value)}
							/>{" "}
							kg
						</center>
					</div>
				</div>
			</div>
			<ScrollView>
				<AppBar position="static">
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="auto"
						className={classes.appbar}
					>
						<Tab label="Calculadora de Doses" {...a11yProps(0)} />
						<Tab label="Outras calculadoras" {...a11yProps(1)} />
					</Tabs>
				</AppBar>
			</ScrollView>
			<TabPanel value={value} index={0}>
				<CalculadoraDeDoses />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
		</View>
	);
}
