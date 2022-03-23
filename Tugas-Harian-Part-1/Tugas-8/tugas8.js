// Nama: Nuno Alwi A

// Soal 1
console.log('================================= Soal 1 =================================');

/*
    Tulis code function di sini
*/
const luasPersegiPanjang = (panjang, lebar) => {
	return panjang * lebar;
};
const kelilingPersegiPanjang = (panjang, lebar) => {
	return 2 * (panjang + lebar);
};
const volumeBalok = (panjang, lebar, tinggi) => {
	return (panjang * lebar) & tinggi;
};

let panjang = 12;
let lebar = 4;
let tinggi = 8;

let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(HasilluasPersegiPanjang);
console.log(HasilkelilingPersegiPanjang);
console.log(HasilvolumeBalok);

console.log('=============================== End Soal 1 ===============================');
// End Soal 1

// Soal 2
console.log('================================= Soal 2 =================================');

/* 
    Tulis kode function di sini
*/
const introduce = (...rest) => {
	let [name, age, sex, job] = rest;
	if (sex == 'Laki-Laki') {
		return `Pak ${name} adalah seorang ${job} yang berusia ${age} tahun`;
	}
	if (sex == 'Perempuan') {
		return `Buk ${name} adalah seorang ${job} yang berusia ${age} tahun`;
	} else {
		return 'Data yang anda masukan tidak valid';
	}
};

//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce('John', '30', 'Laki-Laki', 'penulis');
console.log(perkenalan); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

console.log('=============================== End Soal 2 ===============================');
// End Soal 2

// Soal 3
console.log('================================= Soal 3 =================================');

let arrayDaftarPeserta = ['John Doe', 'laki-laki', 'baca buku', 1992];
let objDaftarPeserta = {};

objDaftarPeserta['nama'] = arrayDaftarPeserta[0];
objDaftarPeserta['jenis kelamin'] = arrayDaftarPeserta[1];
objDaftarPeserta['hobi'] = arrayDaftarPeserta[2];
objDaftarPeserta['tahun lahir'] = arrayDaftarPeserta[3];
console.log(objDaftarPeserta);

console.log('=============================== End Soal 3 ===============================');
// End Soal 3

// Soal 4
console.log('================================= Soal 4 =================================');

var buah = [
	{ nama: 'Nanas', warna: 'Kuning', biji: false, harga: 9000 },
	{ nama: 'Jeruk', warna: 'Oranye', biji: true, harga: 8000 },
	{ nama: 'Semangka', warna: 'Hijau & Merah', biji: true, harga: 10000 },
	{ nama: 'Pisang', warna: 'Kuning', biji: false, harga: 5000 },
];

var buahFilter = buah.filter((item) => {
	return item.biji == false;
});
console.log(buahFilter);

console.log('=============================== End Soal 4 ===============================');
// End Soal 4

// Soal 5
console.log('================================= Soal 5 =================================');

let phone = {
	name: 'Galaxy Note 20',
	brand: 'Samsung',
	year: 2020,
	colors: ['Mystic Bronze', 'Mystic White', 'Mystic Black'],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */
const phoneName = phone.name;
const phoneBrand = phone.brand;
const year = phone.year;
const colorBlack = phone.colors[2];
const colorBronze = phone.colors[0];
// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

console.log('=============================== End Soal 5 ===============================');
// End Soal 5

// Soal 6
console.log('================================= Soal 6 =================================');

let warna = ['biru', 'merah', 'kuning', 'hijau'];

let dataBukuTambahan = {
	penulis: 'john doe',
	tahunTerbit: 2020,
};

let buku = {
	nama: 'pemograman dasar',
	jumlahHalaman: 172,
	warnaSampul: ['hitam'],
};
// kode diatas ini jangan di rubah atau di hapus sama sekali
/* Tulis kode jawabannya di sini */
buku.warnaSampul = [buku.warnaSampul[0], ...warna];
let hasil = { ...buku, ...dataBukuTambahan };
console.log(hasil);

console.log('=============================== End Soal 6 ===============================');
// End Soal 6

// Soal 7
console.log('================================= Soal 7 =================================');

/* 
    Tulis kode function di sini 
*/
var tambahDataFilm = (...item) => {
	data = {
		nama: item[0],
		durasi: item[1],
		genre: item[2],
		tahun: item[3],
	};

	dataFilm.push(data);
};

let dataFilm = [];

tambahDataFilm('LOTR', '2 jam', 'action', '1999');
tambahDataFilm('avenger', '2 jam', 'action', '2019');
tambahDataFilm('spiderman', '2 jam', 'action', '2004');
tambahDataFilm('juon', '2 jam', 'horror', '2004');
console.log(dataFilm);

console.log('=============================== End Soal 7 ===============================');
// End Soal 7
