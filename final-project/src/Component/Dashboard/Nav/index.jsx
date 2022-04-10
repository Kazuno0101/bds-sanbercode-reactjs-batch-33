import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Nav = () => {
	let history = useHistory();
	return (
		<div>
			<nav className="bg-white shadow dark:bg-blue-500 ">
				<div className="px-8 mx-auto max-w-7xl">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center justify-between w-full">
							<div className="hidden md:block">
								<div className="flex items-baseline ml-10 space-x-4">
									<Link
										to="/"
										className="px-3 py-2 text-3xl font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
									>
										Home
									</Link>
									<button
										className="px-3 py-2 text-3xl font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
										onClick={() => {
											Cookies.remove(
												'token'
											);
											history.push(
												'/login'
											);
										}}
									>
										Logout
									</button>
								</div>
							</div>
							<div className="flex">
								<p className="flex-shrink-0" href="/">
									<img
										className="w-12 h-12 rounded-lg"
										src={Cookies.get('image_url')}
										alt={Cookies.get('name')}
									/>
								</p>
								<div className="hidden md:block">
									<div className="flex items-baseline space-x-4">
										<p className="px-3 py-2 text-3xl font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white">
											Hello,{' '}
											<span className="font-extrabold">
												{Cookies.get(
													'name'
												)}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="block">
							<div className="flex items-center ml-4 md:ml-6"></div>
						</div>
						<div className="flex -mr-2 md:hidden">
							<button className="inline-flex items-center justify-center p-2 text-gray-800 rounded-md dark:text-white hover:text-gray-300 focus:outline-none">
								<svg
									width={20}
									height={20}
									fill="currentColor"
									className="w-8 h-8"
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<p
							className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-gray-800 dark:hover:text-white"
							href="/#"
						>
							{Cookies.get('name')}
						</p>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
