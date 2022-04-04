import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
	const [mahasiswa, setMahasiswa] = useState([]);
	const [inputName, setInputName] = useState('');
	const [inputMapel, setInputMapel] = useState('');
	const [inputNilai, setInputNilai] = useState('');
	const [currentId, setCurrentId] = useState(null);
	const [success, setSuccess] = useState(false);
	const [hapus, setHapus] = useState(false);

	const toggleDelete = () => {
		setHapus(!hapus);
	};

	const toggleSuccess = () => {
		setSuccess(!success);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`);

			setMahasiswa(
				result.data.map((x) => {
					return { id: x.id, name: x.name, course: x.course, score: x.score };
				})
			);
		};

		fetchData();
	}, []);

	return (
		<MahasiswaContext.Provider
			value={{
				mahasiswa,
				setMahasiswa,
				inputName,
				setInputName,
				inputMapel,
				setInputMapel,
				inputNilai,
				setInputNilai,
				currentId,
				setCurrentId,
				success,
				hapus,
				toggleSuccess,
				toggleDelete,
			}}
		>
			{props.children}
		</MahasiswaContext.Provider>
	);
};
