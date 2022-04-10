import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HomeTemplate from '../Template/home';
import { Link } from 'react-router-dom';

const Register = () => {
	let history = useHistory();

	const [input, setInput] = useState({
		name: '',
		image_url: '',
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: value });
	};

	const handleRegister = (event) => {
		event.preventDefault();

		let { name, image_url, email, password } = input;

		axios.post(`https://dev-example.sanbercloud.com/api/register `, { name, image_url, email, password }).then(() => {
			history.push('/login');
			alert('Berhasil Daftar');
		});
	};

	return (
		<HomeTemplate>
			<div className="flex justify-center min-h-[550px]">
				<div className="w-3/5 my-8">
					<div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
						<div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
							Register New Account
						</div>
						<div className="mt-8">
							<form autoComplete="off" onSubmit={handleRegister}>
								<div className="flex flex-col mb-2">
									<div className="relative flex ">
										<span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
											<svg
												width={
													15
												}
												height={
													15
												}
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<svg
													class="svg-icon"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
												</svg>
											</svg>
										</span>
										<input
											onChange={
												handleChange
											}
											value={input.name}
											type="text"
											name="name"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Your Username"
										/>
									</div>
								</div>
								<div className="flex flex-col mb-2">
									<div className="relative flex ">
										<span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
											<svg
												width={
													15
												}
												height={
													15
												}
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
											</svg>
										</span>
										<input
											onChange={
												handleChange
											}
											value={input.email}
											type="text"
											name="email"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Your email"
										/>
									</div>
								</div>
								<div className="flex flex-col mb-2">
									<div className="relative flex ">
										<span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
											<svg
												width={
													15
												}
												height={
													15
												}
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
											</svg>
										</span>
										<input
											onChange={
												handleChange
											}
											value={
												input.password
											}
											type="password"
											name="password"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Your password"
										/>
									</div>
								</div>
								<div className="flex flex-col mb-6">
									<div className="relative flex ">
										<span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
											<svg
												width={
													15
												}
												height={
													15
												}
												fill="currentColor"
												viewBox="0 0 1792 1792"
												xmlns="http://www.w3.org/2000/svg"
											></svg>
										</span>
										<input
											onChange={
												handleChange
											}
											value={
												input.image_url
											}
											name="image_url"
											type="text"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Your Profile Picture URL"
										/>
									</div>
								</div>
								<div className="flex w-full">
									<button
										type="submit"
										className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
									>
										Register
									</button>
								</div>
							</form>
						</div>
						<div className="flex items-center justify-center mt-6">
							<Link
								to="/login"
								className="inline-flex items-center text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
							>
								<span className="ml-2">Click here if you have Account!</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</HomeTemplate>
	);
};

export default Register;
