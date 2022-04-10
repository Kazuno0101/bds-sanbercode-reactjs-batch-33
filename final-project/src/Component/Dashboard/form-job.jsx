import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { JobContext } from '../../Context/JobContext';
import AdminTemplate from '../Template/admin';
import Cookies from 'js-cookie';

const Content = () => {
	let history = useHistory();
	const { id } = useParams();
	const { jobList, setJobList } = useContext(JobContext);
	const { inputjob, setInputJob } = useContext(JobContext);
	const { currentId, setCurrentId } = useContext(JobContext);

	useEffect(() => {
		if (id !== null) {
			axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`).then((result) => {
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
			});
		}
	}, [setInputJob, id, setCurrentId]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (currentId === null) {
			axios.post(
				`https://dev-example.sanbercloud.com/api/job-vacancy`,
				{
					id: inputjob.id,
					title: inputjob.title,
					job_description: inputjob.job_description,
					job_qualification: inputjob.job_qualification,
					job_type: inputjob.job_type,
					job_tenure: inputjob.job_tenure,
					job_status: inputjob.job_status === true ? 1 : 0,
					company_name: inputjob.company_name,
					company_image_url: inputjob.company_image_url,
					company_city: inputjob.company_city,
					salary_min: inputjob.salary_min,
					salary_max: inputjob.salary_max,
				},
				{ headers: { Authorization: 'Bearer ' + Cookies.get('token') } }
			).then((res) => {
				let data = res.data;
				setJobList([
					...jobList,
					{
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
					},
				]);
				setCurrentId(null);
				history.push('/dashboard');
			});
		} else {
			axios.put(
				`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
				{
					id: inputjob.id,
					title: inputjob.title,
					job_description: inputjob.job_description,
					job_qualification: inputjob.job_qualification,
					job_type: inputjob.job_type,
					job_tenure: inputjob.job_tenure,
					job_status: inputjob.job_status === true ? 1 : 0,
					company_name: inputjob.company_name,
					company_image_url: inputjob.company_image_url,
					company_city: inputjob.company_city,
					salary_min: inputjob.salary_min,
					salary_max: inputjob.salary_max,
				},
				{ headers: { Authorization: 'Bearer ' + Cookies.get('token') } }
			).then(() => {
				alert('jalan ges');
				setCurrentId(null);
				history.push('/dashboard');
			});
		}
	};

	const handleChange = (event) => {
		const value = event.target.value;
		setInputJob({
			...inputjob,
			[event.target.name]: value,
		});
	};

	const handleCheckbox = (event) => {
		setInputJob({
			...inputjob,
			[event.target.name]: !inputjob[event.target.name],
		});
	};

	return (
		<div className="w-full min-h-screen">
			<form class="mx-auto shadow-md md:w-full" onSubmit={handleSubmit}>
				<div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
					<div class="max-w-sm mx-auto md:w-full md:mx-0">
						<div class="inline-flex items-center space-x-4">
							<a href="#" class="block relative">
								<img
									alt="profil"
									src={Cookies.get('image_url')}
									class="mx-auto object-cover rounded-full h-16 w-16 "
								/>
							</a>
							<h1 class="text-white text-2xl">{Cookies.get('name')}</h1>
						</div>
					</div>
				</div>
				<div class="space-y-6 bg-white">
					<div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
						<h2 class="max-w-sm text-5xl font-extrabold mx-auto md:w-1/3">Job info</h2>
						<div class="max-w-sm mx-auto space-y-5 md:w-2/3">
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.title}
										type="text"
										id="user-info-name"
										name="title"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Title"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<textarea
										onChange={handleChange}
										value={inputjob.job_description}
										name="job_description"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Job description"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.job_qualification}
										type="text"
										name="job_qualification"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Job Qualification"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.job_type}
										type="text"
										name="job_type"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Job Type"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.job_tenure}
										type="text"
										name="job_tenure"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Job Tenure"
									/>
								</div>
							</div>
							<div>
								<div class="relative flex justify-between">
									<input
										onChange={handleChange}
										value={inputjob.salary_min}
										type="number"
										name="salary_min"
										class=" rounded-lg border-transparent w-5/12 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Min Salary"
									/>
									<p className="flex flex-col justify-center"> - </p>
									<input
										onChange={handleChange}
										value={inputjob.salary_max}
										type="number"
										name="salary_max"
										class=" rounded-lg border-transparent w-5/12 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Max Salary"
									/>
								</div>
							</div>
							<div>
								<div className="relative">
									<div className="flex">
										<input
											onChange={
												handleChange
											}
											type="checkbox"
											name="job_status"
											onChange={
												handleCheckbox
											}
											checked={
												inputjob.job_status ===
												true
													? true
													: false
											}
											className="w-6 h-6 bg-white border border-gray-300 rounded-md appearance-none form-tick bg-check checked:bg-blue-500 checked:border-transparent focus:outline-none"
										/>
										<span className="ml-3 text-gray-700">
											Open Job
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
						<h2 class="max-w-sm text-5xl font-extrabold mx-auto md:w-1/3">Company info</h2>
						<div class="max-w-sm mx-auto space-y-5 md:w-2/3">
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.company_name}
										type="text"
										id="user-info-name"
										name="company_name"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Company Name"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.company_image_url}
										type="text"
										name="company_image_url"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Company Image Url"
									/>
								</div>
							</div>
							<div>
								<div class="relative">
									<input
										onChange={handleChange}
										value={inputjob.company_city}
										type="text"
										name="company_city"
										class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="Company City"
									/>
								</div>
							</div>
						</div>
					</div>
					<hr />

					<div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
						<button
							type="submit"
							class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

const JobForm = () => {
	return (
		<>
			<AdminTemplate>
				<Content />
			</AdminTemplate>
		</>
	);
};
export default JobForm;
