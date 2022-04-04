import React, { useContext } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './navContext';

const Nav = () => {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<nav className={darkMode ? 'nav-light' : 'nav-dark'}>
			<Link className="linkNav" to="/">
				Tugas 10
			</Link>
			<Link className="linkNav" to="/tugas11">
				Tugas 11
			</Link>
			<Link className="linkNav" to="/tugas12">
				Tugas 12
			</Link>
			<Link className="linkNav" to="/tugas13">
				Tugas 13
			</Link>
			<Link className="linkNav" to="/tugas14">
				Tugas 14
			</Link>
			<Link className="linkNav" to="/tugas15">
				Tugas 15
			</Link>
		</nav>
	);
};

export default Nav;
