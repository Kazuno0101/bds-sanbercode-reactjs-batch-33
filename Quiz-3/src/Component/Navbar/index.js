import React from 'react';
import Logo from '../../Assets/img/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav class="topnav">
			{/* tidak bisa jalan */}
			{/* <Link to="/">
				<img src={Logo} width="70" alt="logo" />
			</Link>
			<Link to="/">Home</Link>
			<Link to="/mobile-list">Movie List</Link>
			<Link to="/about">About</Link> */}
			<a href="/">
				<img src={Logo} width="70" alt="logo" />
			</a>
			<a href="/">Home</a>
			<a href="/mobile-list">Movie List</a>
			<a href="/about">About</a>
			<form>
				<input type="text" />
				<input type="submit" value="Cari" />
			</form>
		</nav>
	);
};

export default Nav;
