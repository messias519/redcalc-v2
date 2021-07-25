import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./providers/auth.js";
import Redcalc from "./Redcalc.jsx";

ReactDOM.render(
	<div>
		<AuthProvider>
			<Redcalc />
		</AuthProvider>
	</div>,
	document.getElementById("root")
);
