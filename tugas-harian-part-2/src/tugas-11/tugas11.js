import React, { useState } from 'react';

const List = () => {
	const [daftarBuah, setDaftarBuah] = useState([
		{ nama: 'Nanas', hargaTotal: 100000, beratTotal: 4000 },
		{ nama: 'Manggis', hargaTotal: 350000, beratTotal: 10000 },
		{ nama: 'Nangka', hargaTotal: 90000, beratTotal: 2000 },
		{ nama: 'Durian', hargaTotal: 400000, beratTotal: 5000 },
		{ nama: 'Strawberry', hargaTotal: 120000, beratTotal: 6000 },
	]);
	const [inputName, setInputName] = useState('');
	const [inputHarga, setInputHarga] = useState('');
	const [inputBerat, setInputBerat] = useState('');
	const [currentIndex, setCurrentIndex] = useState(-1);

	const handleChangeName = (event) => {
		setInputName(event.target.value);
	};

	const handleChangeHarga = (event) => {
		setInputHarga(event.target.value);
	};

	const handleChangeBerat = (event) => {
		setInputBerat(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let newData = daftarBuah;

		if (currentIndex === -1) {
			newData = [...daftarBuah, { nama: inputName, hargaTotal: inputHarga, beratTotal: inputBerat }];
		} else {
			newData[currentIndex] = { nama: inputName, hargaTotal: inputHarga, beratTotal: inputBerat };
		}

		setDaftarBuah(newData);
		setInputName('');
		setInputHarga('');
		setInputBerat('');
		setCurrentIndex(-1);
	};

	const handleDelete = (event) => {
		let index = parseInt(event.target.value);
		let deletedItem = daftarBuah[index];
		let newData = daftarBuah.filter((e) => {
			return e !== deletedItem;
		});

		setDaftarBuah(newData);
	};

	const handleEdit = (event) => {
		let index = parseInt(event.target.value);
		let editValue = daftarBuah[index];
		setInputName(editValue.nama);
		setInputHarga(editValue.hargaTotal);
		setInputBerat(editValue.beratTotal);

		setCurrentIndex(event.target.value);
	};
	return (
		<div className="card">
			<h1>Daftar Harga Buah</h1>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>Nama</th>
						<th>Harga Total</th>
						<th>Berat Total</th>
						<th>Harga per kg</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{daftarBuah.map((val, index) => {
						return (
							<tr>
								<td>{index + 1}</td>
								<td>{val.nama}</td>
								<td>{val.hargaTotal} </td>
								<td>{val.beratTotal / 1000} kg</td>
								<td>{val.hargaTotal / (val.beratTotal / 1000)}</td>
								<td>
									<button onClick={handleEdit} value={index}>
										Edit
									</button>
									<button onClick={handleDelete} value={index}>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{/* Form */}
			<h1>Form Daftar Harga Buah</h1>
			<form onSubmit={handleSubmit}>
				<label>Nama:</label>
				<input required type="text" value={inputName} onChange={handleChangeName} />
				<br />
				<label>Harga Total:</label>
				<input required type="number" value={inputHarga} onChange={handleChangeHarga} />
				<br />
				<label>Berat Total(dalam gram):</label>
				<input required type="number" value={inputBerat} onChange={handleChangeBerat} min="2000" />
				<br />
				<button>submit</button>
			</form>
		</div>
	);
};

export default List;
