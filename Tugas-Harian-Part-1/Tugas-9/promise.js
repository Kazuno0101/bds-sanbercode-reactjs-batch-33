// di file promise.js
function readBooksPromise(time, book) {
	console.log('saya mulai membaca ' + book.name);
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let sisaWaktu = time - book.timeSpent;
			if (sisaWaktu >= 0) {
				console.log('saya sudah selesai membaca ' + book.name + ', sisa waktu saya ' + sisaWaktu);
				resolve(sisaWaktu);
			} else {
				console.log('saya sudah tidak punya waktu untuk baca ' + book.name);
				reject(sisaWaktu);
			}
		}, book.timeSpent);
	});
}

var books = [
	{ name: 'LOTR', timeSpent: 3000 },
	{ name: 'Fidas', timeSpent: 2000 },
	{ name: 'Kalkulus', timeSpent: 4000 },
];

let waktu = 10000;

const execute = (waktu, i, booksPanjang) => {
	readBooksPromise(waktu, books[i]).then((sisaWaktuRead) => {
		booksPanjang -= 1;
		if (booksPanjang > 0) {
			execute(sisaWaktuRead, i + 1, booksPanjang);
		}
	});
};

execute(waktu, 0, books.length);
