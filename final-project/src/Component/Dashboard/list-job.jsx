import React, { useContext, useEffect } from 'react';
import AdminTemplate from '../Template/admin';
import axios from 'axios';
import { JobContext } from '../../Context/JobContext';
import Cookies from 'js-cookie';

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
		};

		fetchData();
	}, [setJobList]);

	const handleDelete = (event) => {
		const id = parseInt(event.target.value);
		axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, { headers: { Authorization: 'Bearer ' + Cookies.get('token') } }).then((res) => {
			let newJobList = jobList.filter((e) => e.id !== id);
			setJobList(newJobList);
		});
	};

	const salaryFormat = (salary) => {
		let dump;
		if (salary >= 1000000) {
			dump = salary / 1000000;
			if (salary % 1000000 === 0) {
				return `${dump} JT`;
			} else {
				salary -= dump * 1000000;
				return ` ${dump} JT ${salary} Ribu`;
			}
		} else if (salary >= 100000) {
			dump = salary / 100000;
			if (salary % 100000 === 0) {
				return `${dump} Ratus Ribu`;
			} else {
				salary -= dump * 100000;
				return `${dump} Ratus ${salary} Ribu`;
			}
		} else if (salary >= 1000) {
			dump = salary / 1000;
			if (salary % 1000 === 0) {
				return `${dump} Ribu`;
			} else {
				salary -= dump * 1000;
				return `${dump} Ratus ${salary} Perak`;
			}
		} else if (salary != null) {
			return `${salary} Ribu`;
		} else {
			return 'Error Data';
		}
	};

	const statusFormat = (status) => {
		if (status === 1) {
			return (
				<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
					<span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50"></span>
					<span className="relative">Dibuka</span>
				</span>
			);
		} else if (status === 0) {
			return (
				<span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
					<span aria-hidden="true" className="absolute inset-0 bg-red-200 rounded-full opacity-50"></span>
					<span className="relative">Ditutup</span>
				</span>
			);
		}
	};

	return (
		<div className="min-h-screen">
			<div className="py-8">
				<div className="px-4 py-4 mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
					<p className="mb-3 text-5xl text-center">Job Vacancy List</p>

					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Job
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Type
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Description
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Qualification
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Company
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Salary
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										status
									</th>
								</tr>
							</thead>
							<tbody>
								{jobList.map((item, index) => {
									return (
										<tr key={index}>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.title
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.job_type
													}{' '}
													-{' '}
													{
														item.job_tenure
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.job_description
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.job_qualification
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<img
													src={
														item.company_image_url
													}
													alt={
														item.company_name
													}
													className="w-16 mx-auto"
												/>
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.company_name
													}{' '}
													-{' '}
													{
														item.company_city
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{salaryFormat(
														item.salary_min
													)}{' '}
													until{' '}
													{salaryFormat(
														item.salary_max
													)}
												</p>
											</td>
											<td className="px-5 py-5 text-sm text-center bg-white border-b border-gray-200">
												{statusFormat(
													item.job_status
												)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

const JobList = () => {
	return (
		<>
			<AdminTemplate>
				<Content />
			</AdminTemplate>
		</>
	);
};

export default JobList;
