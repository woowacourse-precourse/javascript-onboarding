function problem2(cryptogram) {
	cryptogram = cryptogram.split('');
	const done = eraseDupLetters(cryptogram);
	if (done) return cryptogram.join('');
	else return problem2(cryptogram.join(''));
}

function eraseDupLetters(cryptogram) {
	let prev = cryptogram[0];
	let done = true;
	for (let i = 1; i < cryptogram.length; i++) {
		if (prev === cryptogram[i]) {
			cryptogram[i] = '';
			cryptogram[i - 1] = '';
			done = false;
		} else {
			prev = cryptogram[i];
		}
	}
	return done;
}

module.exports = problem2;
