import React, { useState, createContext } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {
	const [darkMode, setDarkMode] = useState(true);
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</DarkModeContext.Provider>;
}

export { DarkModeProvider, DarkModeContext };
