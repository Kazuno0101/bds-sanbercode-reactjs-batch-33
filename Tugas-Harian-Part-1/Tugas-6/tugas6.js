// Nama: Nuno Alwi A

// Soal 1
console.log('================================= Soal 1 =================================');
var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80) console.log('A');
else if (nilaiJohn >= 70 && nilaiJohn < 80) console.log('B');
else if (nilaiJohn >= 60 && nilaiJohn < 70) console.log('C');
else if (nilaiJohn >= 50 && nilaiJohn < 60) console.log('D');
else if (nilaiJohn < 50) console.log('E');
else console.log('Error');

if (nilaiDoe >= 80) console.log('A');
else if (nilaiDoe >= 70 && nilaiDoe < 80) console.log('B');
else if (nilaiDoe >= 60 && nilaiDoe < 70) console.log('C');
else if (nilaiDoe >= 50 && nilaiDoe < 60) console.log('D');
else if (nilaiDoe < 50) console.log('E');
else console.log('Error');
console.log('=============================== End Soal 1 ===============================');
// End Soal 1

// Soal 2
console.log('================================= Soal 2 =================================');
var hari = 8;
var bulan = 5;
var tahun = 2001;

switch (bulan) {
	case 1:
		console.log(hari + ' Januari ' + tahun);
		break;
	case 2:
		console.log(hari + ' Februari ' + tahun);
		break;
	case 3:
		console.log(hari + ' Maret ' + tahun);
		break;
	case 4:
		console.log(hari + ' April ' + tahun);
		break;
	case 5:
		console.log(hari + ' Mei ' + tahun);
		break;
	case 6:
		console.log(hari + ' Juni ' + tahun);
		break;
	case 7:
		console.log(hari + ' Juli ' + tahun);
		break;
	case 8:
		console.log(hari + ' Agustus ' + tahun);
		break;
	case 9:
		console.log(hari + ' September ' + tahun);
		break;
	case 10:
		console.log(hari + ' Oktober ' + tahun);
		break;
	case 11:
		console.log(hari + ' November ' + tahun);
		break;
	case 12:
		console.log(hari + ' Desember ' + tahun);
		break;

	default:
		console.log('Error, masukan tidak valid');
		break;
}
console.log('=============================== End Soal 2 ===============================');
// End Soal 2

// Soal 3
console.log('================================= Soal 3 =================================');
console.log('LOOPING PERTAMA');
for (let i = 2; i < 20; i += 2) {
	console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (let i = 20; i > 0; i -= 2) {
	console.log(i + ' - I will become a mobile developer');
}
console.log('=============================== End Soal 3 ===============================');
// End Soal 3

// Soal 4
console.log('================================= Soal 4 =================================');
for (let i = 1; i <= 20; i++) {
	if (i % 2 === 1 && i % 3 === 0) {
		console.log(i + ' - I Love Coding');
	} else if (i % 2 === 1) {
		console.log(i + ' - Santai');
	} else if (i % 2 === 0) {
		console.log(i + ' - Berkualitas');
	}
}
console.log('=============================== End Soal 4 ===============================');
// End Soal 4

// Soal 5
console.log('================================= Soal 5 =================================');
var temp = '';
for (let i = 0; i <= 7; i++) {
	for (let j = 0; j < i; j++) {
		temp += '#';
	}
	temp += '\n';
}
console.log(temp);
console.log('=============================== End Soal 5 ===============================');
// End Soal 5
