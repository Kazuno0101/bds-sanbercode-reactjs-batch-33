import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Peserta = () => {
	const [pesertaLomba, setPesertaLomba] = useState([]);
	const [inputName, setInputName] = useState('');
	const [inputMapel, setInputMapel] = useState('');
	const [inputNilai, setInputNilai] = useState('');
	const [currentId, setCurrentId] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`);

			setPesertaLomba(
				result.data.map((x) => {
					return { id: x.id, name: x.name, course: x.course, score: x.score };
				})
			);
		};

		fetchData();
	}, []);

	const handleEdit = (event) => {
		let idPeserta = event.target.value;
		axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`).then((res) => {
			let data = res.data;
			setInputName(data.name);
			setInputMapel(data.course);
			setInputNilai(data.score);
			setCurrentId(data.id);
		});
	};

	const handleDelete = (event) => {
		let idPeserta = parseInt(event.target.value);
		axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idPeserta}`).then(() => {
			let newPesertaLomba = pesertaLomba.filter((el) => {
				return el.id !== idPeserta;
			});
			setPesertaLomba(newPesertaLomba);
		});
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

	const handleSubmit = (event) => {
		event.preventDefault();

		if (currentId === null) {
			// untuk create data baru
			axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, { name: inputName, course: inputMapel, score: inputNilai }).then((res) => {
				let data = res.data;
				setPesertaLomba([...pesertaLomba, { id: data.id, name: data.name, course: data.course, score: data.score }]);
			});
		} else {
			axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, { name: inputName, course: inputMapel, score: inputNilai }).then(() => {
				let singlePeserta = pesertaLomba.find((el) => el.id === currentId);
				singlePeserta.name = inputName;
				singlePeserta.course = inputMapel;
				singlePeserta.score = inputNilai;
				setPesertaLomba([...pesertaLomba]);
			});
		}
		setInputName('');
		setInputMapel('');
		setInputNilai('');
		setCurrentId(null);
	};

	function indeksNIlai(nilai) {
		if (nilai >= 80 && nilai <= 100) {
			return 'A';
		} else if (nilai >= 70 && nilai < 80) {
			return 'B';
		} else if (nilai >= 60 && nilai < 70) {
			return 'C';
		} else if (nilai >= 50 && nilai < 60) {
			return 'D';
		} else if (nilai < 50) {
			return 'E';
		} else {
			return 'Nilai Error';
		}
	}

	return (
		<>
			{pesertaLomba !== null && (
				<div className="card">
					<h1>Daftar Peserta Lomba</h1>
					<table className="peserta-lomba">
						<thead>
							<tr>
								<th>No</th>
								<th>Nama</th>
								<th>Mata Kuliah</th>
								<th>Nilai</th>
								<th>Indeks Nilai</th>
								<th>Aksi</th>
							</tr>
						</thead>
						<tbody>
							{pesertaLomba.map((item, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{item.name}</td>
										<td>{item.course}</td>
										<td>{item.score}</td>
										<td>{indeksNIlai(item.score)}</td>
										<td>
											<button
												onClick={
													handleEdit
												}
												value={
													item.id
												}
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
											>
												Delete
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					{/* Form */}
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
				</div>
			)}
		</>
	);
};

export default Peserta;
