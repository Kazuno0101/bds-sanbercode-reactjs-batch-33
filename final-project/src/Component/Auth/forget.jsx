import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminTemplate from '../Template/admin';
import Cookies from 'js-cookie';

const Forget = () => {
	let history = useHistory();

	const clearForm = () => {
		setInput({
			current_password: '',
			new_password: '',
			new_confirm_password: '',
		});
	};

	const [input, setInput] = useState({
		current_password: '',
		new_password: '',
		new_confirm_password: '',
	});

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: value });
	};

	const handleChangePassword = (event) => {
		event.preventDefault();

		let { current_password, new_password, new_confirm_password } = input;

		axios.post(`https://dev-example.sanbercloud.com/api/change-password `, { current_password, new_password, new_confirm_password }, { headers: { Authorization: 'Bearer ' + Cookies.get('token') } }).then(
			() => {
				clearForm();
				alert('Berhasil Diubah');
			}
		);
	};

	return (
		<AdminTemplate>
			<div className="flex justify-center min-h-[550px]">
				<div className="w-3/5 my-8">
					<div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
						<div className="mt-8">
							<form autoComplete="off" onSubmit={handleChangePassword}>
								<div className="flex flex-col mb-2">
									<div className="relative flex">
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
												input.current_password
											}
											type="password"
											name="current_password"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Your password"
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
												input.new_password
											}
											type="password"
											name="new_password"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="New Password"
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
												input.new_confirm_password
											}
											type="password"
											name="new_confirm_password"
											className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-r-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
											placeholder="Retype New Password"
										/>
									</div>
								</div>
								<div className="flex w-full">
									<button
										type="submit"
										className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
									>
										Change
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</AdminTemplate>
	);
};

export default Forget;
