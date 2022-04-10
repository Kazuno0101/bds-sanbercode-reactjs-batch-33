import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { JobContext } from '../../Context/JobContext';
import HomeTemplate from '../Template/home';
import { Link, useHistory } from 'react-router-dom';

const Hero = () => {
	const { inputSearch, setInputSearch } = useContext(JobContext);
	let history = useHistory();

	const handleSearch = (event) => {
		setInputSearch(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		history.push('/search/' + inputSearch);
		setInputSearch('');
	};

	return (
		<div className="bg-white dark:bg-gray-800 ">
			<div className="z-20 w-full px-4 py-12 mx-auto text-center sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
					<span className="block">Job Vacancy Website</span>
					<span className="block mt-6 text-sm text-blue-500">Support by</span>
					<span className="block text-xl text-white">Sanbercode & Rumah Amal Salman</span>
				</h2>
				<form onSubmit={handleSearchSubmit}>
					<div className="flex justify-center mt-16">
						<div className="relative w-1/2 ">
							<input
								value={inputSearch}
								onChange={handleSearch}
								type="text"
								id="simple-email"
								className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
								placeholder="Search Job"
							/>
						</div>
						<button type="submit" className="w-1/6 px-2 ml-2 text-white bg-blue-500 rounded-md">
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const Content = () => {
	const { jobList, setJobList } = useContext(JobContext);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`);
			setJobList(
				res.data.data.map((item) => {
					return {
						id: item.id,
						title: item.title,
						job_description: item.job_description,
						job_qualification: item.job_qualification,
						job_type: item.job_type,
						job_tenure: item.job_tenure,
						job_status: item.job_status,
						price: item.price,
						company_name: item.company_name,
						company_image_url: item.company_image_url,
						company_city: item.company_city,
						salary_min: item.salary_min,
						salary_max: item.salary_max,
					};
				})
			);
			console.log(res.data);
		};

		fetchData();
	}, [setJobList]);

	return (
		<div className="min-h-[200px] px-40 py-20">
			<h1 className="mb-6 text-5xl text-center">Job Vacancy</h1>
			<div className="grid grid-cols-3 gap-6">
				{jobList.map((data, index) => {
					return (
						<div className="w-full p-2 m-auto text-center bg-gray-800 shadow-lg mx rounded-2xl" key={index}>
							<div className="pt-2 ">
								<p className="text-xl font-bold text-white ">{data.company_name}</p>
								<p className="text-xs text-gray-50">{data.company_city}</p>
							</div>
							<img src={data.company_image_url} alt={data.title} className="p-4 m-auto h-36" />
							<div className="p-4 m-3 bg-white rounded-lg">
								<p className="text-xl font-bold text-gray-800 ">{data.title}</p>
								<p className="text-xs text-gray-500">
									{data.job_tenure} - {data.job_type}
								</p>
								<p className="mt-2 text-gray-800">
									{data.salary_min} s/d {data.salary_max}
								</p>
							</div>
							<Link to={`/job-vacancy/${data.id}`}>
								<button className="w-full h-10 text-base font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700">
									Detail
								</button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<>
			<HomeTemplate>
				<Hero />
				<Content />
			</HomeTemplate>
		</>
	);
};

export default Body;
