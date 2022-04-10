import React from 'react';
import { Link } from 'react-router-dom';

const Side = (props) => {
	return (
		<div className="relative bg-white dark:bg-gray-800">
			<div className="flex flex-col sm:flex-row sm:justify-around">
				<div className="w-72">
					<nav className="px-6 mt-10 ">
						<Link
							className="flex items-center p-2 my-6 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
							to="/dashboard"
						>
							<span className="mx-4 text-lg font-normal">Dashboard</span>
							<span className="flex-grow text-right"></span>
						</Link>

						<Link
							className="flex items-center p-2 my-6 text-gray-800 transition-colors duration-200 bg-gray-100 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-100 dark:bg-gray-600"
							to="/dashboard/list-job-vacancy"
						>
							<span className="mx-4 text-lg font-normal">Job List</span>
							<span className="flex-grow text-right"></span>
						</Link>
						<Link
							className="flex items-center p-2 my-6 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
							to="/dashboard/list-job-vacancy/form"
						>
							<span className="mx-4 text-lg font-normal">Job Form</span>
							<span className="flex-grow text-right"></span>
						</Link>
						<Link
							className="flex items-center p-2 my-6 text-gray-600 transition-colors duration-200 rounded-lg hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600 dark:text-gray-400 "
							to="/profile"
						>
							<span className="mx-4 text-lg font-normal">Profile</span>
							<span className="flex-grow text-right"></span>
						</Link>
					</nav>
				</div>
				<div className="flex-1 p-8 text-white">{props.content}</div>
			</div>
		</div>
	);
};

export default Side;
