import React, { useContext } from 'react';
import { MahasiswaContext } from './MahasiswaContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { DarkModeContext } from '../tugas-14/navContext';

const MahasiswaList = () => {
	const { mahasiswa, setMahasiswa, setInputName, setInputMapel, setInputNilai, setCurrentId, success, hapus, toggleDelete, toggleSuccess } = useContext(MahasiswaContext);
	const { darkMode, title, toggleDarkMode } = useContext(DarkModeContext);

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
		toggleDelete();
	};

	let history = useHistory();
	function handleClick() {
		history.push('/tugas15/create');
	}

	return (
		<>
			{mahasiswa !== null && (
				<div className="relative">
					<div className="card">
						<button className={darkMode ? 'btn-darkMode btn-light' : 'btn-darkMode btn-dark'} onClick={handleDarkMode}>
							{title}
						</button>
						<h1>Daftar Peserta Lomba</h1>
						<button className="btn-list" onClick={handleClick}>
							Tambah Data Mahasiswa
						</button>
						<table className="table p-4 bg-white rounded-lg shadow">
							<thead>
								<tr>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										No
									</th>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										Nama
									</th>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										Mata Kuliah
									</th>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										Nilai
									</th>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										Indeks Nilai
									</th>
									<th className="p-4 font-normal text-gray-900 border dark:border-dark-5 whitespace-nowrap">
										Aksi
									</th>
								</tr>
							</thead>
							<tbody>
								{mahasiswa.map((item, index) => {
									return (
										<tr
											key={index}
											className="text-gray-700"
										>
											<td className="p-4 border dark:border-dark-5">
												{index +
													1}
											</td>
											<td className="p-4 border dark:border-dark-5">
												{
													item.name
												}
											</td>
											<td className="p-4 border dark:border-dark-5">
												{
													item.course
												}
											</td>
											<td className="p-4 border dark:border-dark-5">
												{
													item.score
												}
											</td>
											<td className="p-4 border dark:border-dark-5">
												{indeksNIlai(
													item.score
												)}
											</td>
											<td className="flex p-4 border justify-evenly dark:border-dark-5">
												<button
													type="button"
													className="w-auto px-4 py-2 text-base font-semibold text-center text-black transition duration-200 ease-in rounded-lg shadow-md bg-white-600 hover:bg-white focus:ring-white focus:ring-offset focus:outline-none focus:ring-2 focus:ring-offset-2 "
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
													type="button"
													className="w-auto px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
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
					{success === true && (
						<div
							className="absolute p-4 text-green-600 bg-green-200 border-l-4 border-green-600 bottom-24 left-8 w-52"
							role="alert"
						>
							<p className="font-bold">Success</p>
							<p>Data has been created</p>
						</div>
					)}
					{hapus === true && (
						<div className="absolute p-4 text-red-600 bg-red-200 border-l-4 border-red-600 bottom-24 left-8 w-52" role="alert">
							<p className="font-bold">Success</p>
							<p>Data has been deleted.</p>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default MahasiswaList;
