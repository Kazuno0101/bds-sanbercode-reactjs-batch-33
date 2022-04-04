import React, { useContext } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './navContext';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Nav = () => {
	const { darkMode } = useContext(DarkModeContext);
	let history = useHistory();

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
			{!Cookies.get('token') && (
				<>
					<Link className="linkNav" to="/register">
						Register
					</Link>
					<Link className="linkNav" to="/login">
						Login
					</Link>
				</>
			)}

			{Cookies.get('token') && (
				<span
					className="font-bold text-white"
					onClick={() => {
						Cookies.remove('token');
						history.push('/login');
					}}
				>
					Logout
				</span>
			)}
		</nav>
	);
};

export default Nav;
