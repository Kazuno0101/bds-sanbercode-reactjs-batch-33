import React, { useContext } from 'react';
import axios from 'axios';
import { MobileContext } from './MobileContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const MobileListContent = () => {
	const { mobile, setMobile, currentId, setCurrentId } = useContext(MobileContext);
	let history = useHistory();

	const handleEdit = (event) => {
		let idMobile = parseInt(event.target.value);
		setCurrentId(idMobile);
		history.push(`/mobile-form/${idMobile}`);
	};

	const handleDelete = (event) => {
		let idMobile = parseInt(event.target.value);
		axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idMobile}`).then(() => {
			let newMobile = mobile.filter((el) => {
				return el.id !== idMobile;
			});
			setMobile(newMobile);
		});
	};

	const platformList = (andro, ios) => {
		if (andro === 1 && ios === 1) {
			return 'Android & IOS';
		} else if (andro === 1) {
			return 'Android';
		} else if (ios === 1) {
			return 'IOS';
		}
	};

	const isFree = (harga) => {
		if (harga === 0) {
			return 'Free';
		} else {
			return harga;
		}
	};

	const convertSize = (size) => {
		let dump;
		if (size >= 1000) {
			dump = size / 1000;
			if (size % 1000 === 0) {
				return `${dump}GB`;
			} else {
				size -= dump * 1000;
				return `${dump}GB ${size}MB`;
			}
		} else if (size != null) {
			return `${size}MB`;
		} else {
			return 'Error Data';
		}
	};
	return (
		<div className="py-8">
			<Link
				to="/mobile-form"
				className="w-full px-4 py-2 my-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
			>
				Tambah Data
			</Link>
			<h1 className="text-3xl text-center">Mobile Apps List</h1>
			<div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
				<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									No
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Name
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Category
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Description
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Release Year
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Size
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Price
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Rating
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Platform
								</th>
								<th
									scope="col"
									className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
								>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{mobile.map((item, index) => {
								return (
									<tr key={index}>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{index +
													1}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{
													item.name
												}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{
													item.category
												}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{
													item.description
												}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{
													item.release_year
												}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{convertSize(
													item.size
												)}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{isFree(
													item.price
												)}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{
													item.rating
												}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<p className="text-gray-900 whitespace-no-wrap">
												{platformList(
													item.is_android_app,
													item.is_ios_app
												)}
											</p>
										</td>
										<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
											<button
												type="button"
												className="w-full px-4 py-2 my-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
												onClick={
													handleEdit
												}
												value={
													item.id
												}
											>
												Edit
											</button>
											<button
												type="button"
												className="w-full px-4 py-2 my-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
												onClick={
													handleDelete
												}
												value={
													item.id
												}
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MobileListContent;
