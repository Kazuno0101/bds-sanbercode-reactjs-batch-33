import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { JobContext } from '../../Context/JobContext';
import HomeTemplate from '../Template/home';
import { Link, useParams } from 'react-router-dom';

const Content = () => {
	const { jobList, setJobList } = useContext(JobContext);
	let params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${params.id}`);
			let item = res.data;
			setJobList({
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
			});
		};

		fetchData();
	}, [setJobList, params.id]);

	return (
		<div className="min-h-[200px] px-40 py-20">
			<div className="w-full p-2 m-auto text-center bg-gray-800 shadow-lg mx rounded-2xl">
				<div className="pt-2 ">
					<p className="text-xl font-bold text-white ">{jobList.company_name}</p>
					<p className="text-xs text-gray-50">{jobList.company_city}</p>
				</div>
				<img src={jobList.company_image_url} alt={jobList.title} className="p-4 m-auto h-36" />
				<div className="p-4 m-3 bg-white rounded-lg">
					<p className="text-xl font-bold text-gray-800 ">{jobList.title}</p>
					<p className="text-xs text-gray-500">
						{jobList.job_tenure} - {jobList.job_type}
					</p>
					<div className="flex my-6">
						<p className="w-1/2 px-8 text-center">{jobList.job_description}</p>
						<p className="w-1/2 px-8 text-center">{jobList.job_qualification}</p>
					</div>
					<p className="mt-2 text-gray-800">
						{jobList.salary_min} s/d {jobList.salary_max}
					</p>
					<p className="mt-2 text-gray-800">Status : {jobList.job_status}</p>
				</div>
			</div>
			<Link to={`/`}>
				<button className="w-full h-10 mt-8 text-base font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700">Back</button>
			</Link>
		</div>
	);
};

const Detail = () => {
	return (
		<>
			<HomeTemplate>
				<Content />
			</HomeTemplate>
		</>
	);
};

export default Detail;
