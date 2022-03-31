import React, { useContext } from 'react';
import { MahasiswaContext } from './MahasiswaContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MahasiswaForm = () => {
	const { mahasiswa, setMahasiswa } = useContext(MahasiswaContext);
	const { inputName, setInputName } = useContext(MahasiswaContext);
	const { inputMapel, setInputMapel } = useContext(MahasiswaContext);
	const { inputNilai, setInputNilai } = useContext(MahasiswaContext);
	const { currentId, setCurrentId } = useContext(MahasiswaContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (currentId === null) {
			// untuk create data baru
			axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, { name: inputName, course: inputMapel, score: inputNilai }).then((res) => {
				let data = res.data;
				setMahasiswa([...mahasiswa, { id: data.id, name: data.name, course: data.course, score: data.score }]);
			});
		} else {
			axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, { name: inputName, course: inputMapel, score: inputNilai }).then(() => {
				let singlePeserta = mahasiswa.find((el) => el.id === currentId);
				singlePeserta.name = inputName;
				singlePeserta.course = inputMapel;
				singlePeserta.score = inputNilai;
				setMahasiswa([...mahasiswa]);
			});
		}
		setInputName('');
		setInputMapel('');
		setInputNilai('');
		setCurrentId(null);
		history.push('/tugas14');
	};

	const handleChange = (event) => {
		let inputValue = event.target.value;
		if (event.target.className === 'name') {
			setInputName(inputValue);
		}
		if (event.target.className === 'mapel') {
			setInputMapel(inputValue);
		}
		if (event.target.className === 'nilai') {
			setInputNilai(inputValue);
		}
	};

	let history = useHistory();
	function handleClick() {
		history.push('/tugas14');
	}

	return (
		<div className="card">
			<h1>Form Nilai Mahasiswa</h1>
			<form onSubmit={handleSubmit}>
				<label>Masukkan Nama:</label>
				<input type="text" className="name" value={inputName} onChange={handleChange} />
				<label>Masukkan Mata Pelajaran:</label>
				<input type="text" className="mapel" value={inputMapel} onChange={handleChange} />
				<label>Masukkan Nilai:</label>
				<input type="text" className="nilai" value={inputNilai} onChange={handleChange} />
				<button>submit</button>
			</form>
			<button className="btn-form" onClick={handleClick}>
				Kembali ke tabel mahasiswa
			</button>
		</div>
	);
};

export default MahasiswaForm;
