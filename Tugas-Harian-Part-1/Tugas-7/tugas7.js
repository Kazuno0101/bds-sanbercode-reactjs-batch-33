// Nama: Nuno Alwi A

// Soal 1
console.log('================================= Soal 1 =================================');
let dataPeserta = ['john', 'laki-laki', 'programmer', '30'];

const [name, sex, job, age] = dataPeserta;
let output = `Halo, nama saya ${name}. saya ${sex} berumur ${age} bekerja sebagai seorang ${job}}`;

console.log(output);
console.log('=============================== End Soal 1 ===============================');
// End Soal 1

// Soal 2
console.log('================================= Soal 2 =================================');
let array1 = ['selamat', 'anda', 'melakukan', 'perulangan', 'array', 'dengan', 'for'];

for (var i = 0; i < array1.length; i++) {
	console.log(array1[i]);
}
console.log('=============================== End Soal 2 ===============================');
// End Soal 2

// Soal 3
console.log('================================= Soal 3 =================================');
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array2.length; i++) {
	if (array2[i] > 0 && array2[i] % 2 == 0) {
		console.log(array2[i]);
	}
}
console.log('=============================== End Soal 3 ===============================');
// End Soal 3

// Soal 4
console.log('================================= Soal 4 =================================');
let kalimat = ['aku', 'saya', 'sangat', 'sangat', 'senang', 'belajar', 'javascript'];
kalimat.shift();
kalimat.splice(1, 1);
var temp = kalimat.join(' ');
console.log(temp);
console.log('=============================== End Soal 4 ===============================');
// End Soal 4

// Soal 5
console.log('================================= Soal 5 =================================');
var sayuran = [];
sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge');
sayuran.sort();

for (var i = 0; i < sayuran.length; i++) {
	console.log(`${i + 1}. ${sayuran[i]}`);
}
console.log('=============================== End Soal 5 ===============================');
// End Soal 5
