import Cookies from 'js-cookie';
import React from 'react';
import AdminTemplate from '../Template/admin';
import { Link } from 'react-router-dom';

const Content = () => {
	return (
		<div className="min-h-screen">
			<div className="flex bg-white rounded-lg shadow dark:bg-gray-800">
				<div className="relative flex-none w-24 md:w-48">
					<img src={Cookies.get('image_url')} alt="shopping image" className="absolute inset-0 object-cover w-full h-full rounded-lg" />
				</div>
				<form className="flex-auto p-6">
					<div className="flex flex-wrap">
						<h1 className="flex-auto text-xl font-semibold dark:text-gray-50">{Cookies.get('name')}</h1>
						<div className="flex-none w-full my-2 text-sm font-medium text-gray-500 dark:text-gray-300">{Cookies.get('email')}</div>
					</div>

					<div className="flex mb-4 text-sm font-medium">
						<Link
							to="/change-password"
							className="w-auto px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
						>
							Change Passowrd
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

const Profile = () => {
	return (
		<>
			<AdminTemplate>
				<Content />
			</AdminTemplate>
		</>
	);
};

export default Profile;
