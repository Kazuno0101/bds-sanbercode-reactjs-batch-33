import React, { useContext, useEffect, useState } from 'react';
import { MobileContext } from './MobileContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MobileFormContent = () => {
	const { mobile, setMobile, currentId, setCurrentId } = useContext(MobileContext);
	let history = useHistory();

	const [input, setInput] = useState({
		name: '',
		description: '',
		category: '',
		release_year: 2007,
		size: 0,
		price: 0,
		rating: 0,
		image_url: '',
		is_android_app: true,
		is_ios_app: true,
	});

	useEffect(() => {
		if (currentId != null) {
			axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`).then((res) => {
				let data = res.data;
				setInput([
					{
						name: data.name,
						description: data.description,
						category: data.category,
						release_year: data.release_year,
						size: data.size,
						price: data.price,
						rating: data.rating,
						image_url: data.image_url,
						is_android_app: data.is_android_app,
						is_ios_app: data.is_ios_app,
					},
				]);
			});
		}
	});

	const handleChange = (event) => {
		let value = event.target.value;
		let name = event.target.name;

		setInput({ ...input, [name]: value });
	};

	const handleEdit = (event) => {};

	const handleSubmit = (event) => {
		event.preventDefault();

		let { name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app } = input;
		if (currentId === null) {
			axios.post(`https://backendexample.sanbercloud.com/api/mobile-apps`, {
				category,
				description,
				image_url,
				is_android_app,
				is_ios_app,
				name,
				price,
				rating,
				release_year,
				size,
			}).then((res) => {
				let data = res.data;
				setMobile([
					...mobile,
					{
						id: data.id,
						name: data.name,
						description: data.description,
						category: data.category,
						release_year: data.release_year,
						size: data.size,
						price: data.price,
						rating: data.rating,
						image_url: data.image_url,
						is_android_app: data.is_android_app,
						is_ios_app: data.is_ios_app,
					},
				]);
				history.push('/mobile-list');
			});
		}
	};
	return (
		<div className="py-8">
			<h1 className="text-3xl text-center">Mobile Apps Form</h1>
			<form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Name
					</label>
					<input
						value={input.name}
						onChange={handleChange}
						type="text"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="name"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Description
					</label>
					<textarea
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						id="description"
						name="description"
						rows="5"
						cols="40"
						value={input.description}
						onChange={handleChange}
					></textarea>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Category
					</label>
					<input
						value={input.category}
						onChange={handleChange}
						type="text"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="category"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Release Year
					</label>
					<input
						value={input.release_year}
						onChange={handleChange}
						type="number"
						min="2007"
						max="2021"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="release_year"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Size <small className="text-red-500">*satuan mb</small>
					</label>
					<input
						value={input.size}
						onChange={handleChange}
						type="number"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="size"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Price
					</label>
					<input
						value={input.price}
						onChange={handleChange}
						type="number"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="price"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Rating
					</label>
					<input
						value={input.rating}
						onChange={handleChange}
						type="number"
						min="0"
						max="5"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="rating"
					/>
				</div>
				<div className="relative ">
					<label htmlFor="name-with-label" className="text-gray-700">
						Image URL
					</label>
					<input
						value={input.image_url}
						onChange={handleChange}
						type="text"
						id="name-with-label"
						className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
						name="image_url"
					/>
				</div>
				<div className="relative">
					<div className="form-check">
						<input
							value={input.is_android_app}
							onChange={handleChange}
							className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
							type="checkbox"
							defaultValue
							id="andro"
							name="is_android_app"
						/>
						<label className="inline-block text-gray-800 form-check-label" htmlFor="andro">
							Android
						</label>
					</div>
					<div className="form-check">
						<input
							value={input.is_ios_app}
							onChange={handleChange}
							className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
							type="checkbox"
							defaultValue
							id="ios"
							name="is_ios_app"
						/>
						<label className="inline-block text-gray-800 form-check-label" htmlFor="ios">
							IOS
						</label>
					</div>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 my-2 mt-16 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
				>
					Tambah Data
				</button>
			</form>
		</div>
	);
};

export default MobileFormContent;
