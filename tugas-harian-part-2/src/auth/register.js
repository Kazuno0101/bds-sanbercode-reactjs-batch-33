import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
	let history = useHistory();

	const [input, setInput] = useState({
		name: '',
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

		let { name, email, password } = input;

		axios.post(`https://backendexample.sanbersy.com/api/register`, { name, email, password }).then(() => {
			history.push('/login');
			alert('Berhasil Daftar');
		});
	};

	return (
		<div className="card">
			<form onSubmit={handleRegister}>
				<label htmlFor="required-email" className="text-gray-700">
					Name
					<span className="text-red-500 required-dot">*</span>
				</label>
				<br />
				<input
					type="text"
					className="flex-1 w-1/2 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					placeholder="Your Name"
					onChange={handleChange}
					value={input.nama}
					type={'text'}
					name="name"
				/>

				<label htmlFor="required-email" className="text-gray-700">
					Email
					<span className="text-red-500 required-dot">*</span>
				</label>
				<br />
				<input
					type="text"
					className="flex-1 w-1/2 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					placeholder="Your Email"
					onChange={handleChange}
					value={input.email}
					type={'text'}
					name="email"
				/>

				<label htmlFor="required-email" className="text-gray-700">
					Password
					<span className="text-red-500 required-dot">*</span>
				</label>
				<br />
				<input
					type="text"
					className="flex-1 w-1/2 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
					placeholder="Your Password"
					onChange={handleChange}
					value={input.password}
					type={'password'}
					name="password"
				/>

				<button
					type={'submit'}
					className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register;
