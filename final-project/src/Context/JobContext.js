import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = (props) => {
	const [jobList, setJobList] = useState([]);
	const [inputjob, setInputJob] = useState({
		id: '',
		title: '',
		job_description: '',
		job_qualification: '',
		job_type: '',
		job_tenure: '',
		job_status: 0,
		price: 0,
		company_name: '',
		company_image_url: '',
		company_city: '',
		salary_min: 0,
		salary_max: 0,
	});
	const [currentId, setCurrentId] = useState(null);
	const [actionMessage, setActionMessage] = useState({ type: '', title: '', message: '' });
	const [search, setSearch] = useState('');
	const [inputSearch, setInputSearch] = useState('');

	return (
		<JobContext.Provider
			value={{
				jobList,
				setJobList,
				inputjob,
				setInputJob,
				currentId,
				setCurrentId,
				actionMessage,
				setActionMessage,
				search,
				setSearch,
				inputSearch,
				setInputSearch,
			}}
		>
			{props.children}
		</JobContext.Provider>
	);
};
