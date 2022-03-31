import React, { useContext } from 'react';
import { MahasiswaContext } from './MahasiswaContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { DarkModeContext } from './navContext';

const MahasiswaList = () => {
	const { mahasiswa, setMahasiswa, setInputName, setInputMapel, setInputNilai, setCurrentId } = useContext(MahasiswaContext);
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

	const handleDarkMode = () => {
		toggleDarkMode();
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

	const handleEdit = (event) => {
		let idMahasiswa = event.target.value;
		axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`).then((res) => {
			let data = res.data;
			setInputName(data.name);
			setInputMapel(data.course);
			setInputNilai(data.score);
			setCurrentId(data.id);
		});
	};

	const handleDelete = (event) => {
		let idMahasiswa = parseInt(event.target.value);
		axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`).then(() => {
			let newPesertaLomba = mahasiswa.filter((el) => {
				return el.id !== idMahasiswa;
			});
			setMahasiswa(newPesertaLomba);
		});
	};

	let history = useHistory();
	function handleClick() {
		history.push('/tugas14/create');
	}

	return (
		<>
			{mahasiswa !== null && (
				<div className="card">
					<button className={darkMode} onClick={handleDarkMode}>
						Dark Mode
					</button>
					<h1>Daftar Peserta Lomba</h1>
					<button className="btn-list" onClick={handleClick}>
						Tambah Data Mahasiswa
					</button>
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
							{mahasiswa.map((item, index) => {
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
				</div>
			)}
		</>
	);
};

export default MahasiswaList;
