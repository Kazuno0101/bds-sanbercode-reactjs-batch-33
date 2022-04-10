import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

const Nav = () => {
	let history = useHistory();

	return (
		<nav className="flex flex-wrap items-center justify-between p-4 px-40 bg-white">
			<div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
				<Link className="text-xl font-semibold text-gray-800 font-heading" to="/">
					Kazuno Webs
				</Link>
			</div>
			<div className="block lg:hidden">
				<button className="flex items-center px-3 py-2 text-blue-500 border border-blue-500 rounded navbar-burger">
					<svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
				<Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600" to="/">
					Home
				</Link>
				<Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600" to="/about">
					About
				</Link>
				{Cookies.get('token') && (
					<Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600" to="/dashboard">
						Dashboard
					</Link>
				)}
			</div>
			<div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
				{!Cookies.get('token') && (
					<>
						<Link className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600" to="/register">
							Register
						</Link>
						<Link className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600" to="/login">
							Login
						</Link>
					</>
				)}

				{Cookies.get('token') && (
					<button
						className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-blue-600"
						onClick={() => {
							Cookies.remove('token');
							history.push('/login');
						}}
					>
						Logout
					</button>
				)}
			</div>
		</nav>
	);
};

export default Nav;
