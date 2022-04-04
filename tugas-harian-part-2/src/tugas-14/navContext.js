import React, { useState, createContext } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {
	const [darkMode, setDarkMode] = useState(true);
	const [title, setTitle] = useState('Dark Mode');
	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		if (title === 'Dark Mode') {
			setTitle('Light Mode');
		} else {
			setTitle('Dark Mode');
		}
	};

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, title }}>{props.children}</DarkModeContext.Provider>;
}

export { DarkModeProvider, DarkModeContext };
