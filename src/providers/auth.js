import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
	const [peso, setPeso] = useState(70); // peso inicial
	const [mlhAtual, setmlhAtual] = useState(10); // ml/h inicial

	return (
		<AuthContext.Provider value={{ peso, setPeso, mlhAtual, setmlhAtual }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
