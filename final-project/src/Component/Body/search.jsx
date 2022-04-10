import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { JobContext } from '../../Context/JobContext';
import HomeTemplate from '../Template/home';
import { Link, useParams } from 'react-router-dom';

const Content = () => {
	const { s } = useParams();
	const { jobList, setJobList } = useContext(JobContext);
	const { search, setSearch } = useContext(JobContext);

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
		};

		if (s !== undefined) {
			setSearch(s);
		}

		fetchData();
	}, [s, setSearch, setJobList]);

	return (
		<div className="min-h-screen px-40 py-20">
			<h1 className="mb-6 text-5xl text-center">Search : {search}</h1>
			<div className="grid grid-cols-3 gap-6">
				{jobList
					.filter((el) => {
						return el.title.toLowerCase().includes(search.toLowerCase());
					})
					.map((data, index) => {
						return (
							<div className="w-full p-2 m-auto text-center bg-gray-800 shadow-lg mx rounded-2xl" key={index}>
								<div className="pt-2 ">
									<p className="text-xl font-bold text-white ">
										{data.company_name}
									</p>
									<p className="text-xs text-gray-50">{data.company_city}</p>
								</div>
								<img
									src={data.company_image_url}
									alt={data.title}
									className="p-4 m-auto h-36"
								/>
								<div className="p-4 m-3 bg-white rounded-lg">
									<p className="text-xl font-bold text-gray-800 ">
										{data.title}
									</p>
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

const Search = () => {
	return (
		<>
			<HomeTemplate>
				<Content />
			</HomeTemplate>
		</>
	);
};

export default Search;
