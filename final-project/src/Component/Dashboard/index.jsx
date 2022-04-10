import React, { useContext, useEffect } from 'react';
import AdminTemplate from '../Template/admin';
import axios from 'axios';
import { JobContext } from '../../Context/JobContext';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Content = () => {
	const history = useHistory();
	const { jobList, setJobList } = useContext(JobContext);
	const { setInputJob } = useContext(JobContext);
	const { setCurrentId } = useContext(JobContext);

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

	const handleEdit = (event) => {
		const id = parseInt(event.target.value);
		axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`).then((result) => {
			let data = result.data;
			setInputJob({
				id: data.id,
				title: data.title,
				job_description: data.job_description,
				job_qualification: data.job_qualification,
				job_type: data.job_type,
				job_tenure: data.job_tenure,
				job_status: data.job_status === true ? 1 : 0,
				company_name: data.company_name,
				company_image_url: data.company_image_url,
				company_city: data.company_city,
				salary_min: data.salary_min,
				salary_max: data.salary_max,
			});
			setCurrentId(data.id);
			history.push('/dashboard/list-job-vacancy/form/' + data.id);
		});
	};

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
				return `Rp. ${dump} JT`;
			} else {
				salary -= dump * 1000000;
				return `Rp. ${dump} JT ${salary} Ribu`;
			}
		} else if (salary >= 100000) {
			dump = salary / 100000;
			if (salary % 100000 === 0) {
				return `Rp. ${dump} Ratus Ribu`;
			} else {
				salary -= dump * 100000;
				return `Rp. ${dump} Ratus ${salary} Ribu`;
			}
		} else if (salary >= 1000) {
			dump = salary / 1000;
			if (salary % 1000 === 0) {
				return `Rp. ${dump} Ribu`;
			} else {
				salary -= dump * 1000;
				return `Rp. ${dump} Ratus ${salary} Perak`;
			}
		} else if (salary != null) {
			return `Rp. ${salary}`;
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

	const { inputSearch, setInputSearch } = useContext(JobContext);

	const handleSearch = (event) => {
		setInputSearch(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		history.push('/dashboard/list-job-vacancy/' + inputSearch);
		setInputSearch('');
	};

	return (
		<div className="min-h-screen">
			<div className="py-8">
				<div className="px-4 py-4 mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
					<p className="mb-2 text-5xl text-center">Job Vacancy List</p>
					<div class="relative">
						<form onSubmit={handleSearchSubmit}>
							<input
								onChange={handleSearch}
								type="text"
								class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/3 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
								placeholder="Search Job"
							/>
							<button
								type="submit"
								className="w-auto px-4 py-2 ml-3 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
							>
								Search
							</button>
						</form>
					</div>
					<Link
						to="/dashboard/list-job-vacancy/form"
						type="button"
						className="w-full px-4 py-2 my-3 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						Add New Job
					</Link>

					<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Job
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Job Type
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Company Name
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										Salary
									</th>
									<th
										scope="col"
										className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
									>
										status
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
								{jobList.map((item, index) => {
									return (
										<tr key={index}>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.title
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{
														item.job_type
													}
												</p>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
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
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												<p className="text-gray-900 whitespace-no-wrap">
													{salaryFormat(
														item.salary_min
													)}{' '}
													s/d{' '}
													{salaryFormat(
														item.salary_max
													)}
												</p>
											</td>
											<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
												{statusFormat(
													item.job_status
												)}
											</td>
											<td className="flex px-5 py-5 space-x-2 text-sm bg-white border-b border-gray-200">
												<button
													onClick={
														handleEdit
													}
													value={
														item.id
													}
													type="button"
													className="w-1/2 px-4 py-2 text-base font-semibold text-center text-yellow-900 transition duration-200 ease-in bg-yellow-200 rounded-lg shadow-md text-yellow hover:bg-yellow-400 focus:ring-yellow-500 focus:ring-offset-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
												>
													Edit
												</button>

												<button
													onClick={
														handleDelete
													}
													value={
														item.id
													}
													type="button"
													className="w-1/2 px-4 py-2 text-base font-semibold text-center text-red-900 transition duration-200 ease-in bg-red-200 rounded-lg shadow-md text-red hover:bg-red-400 focus:ring-red-500 focus:ring-offset-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 "
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
		</div>
	);
};

const Dashboard = () => {
	return (
		<>
			<AdminTemplate>
				<Content />
			</AdminTemplate>
		</>
	);
};

export default Dashboard;
