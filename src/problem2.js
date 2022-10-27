function problem2(cryptogram) {
	cryptogram = [...cryptogram];
	var i = 0;
	while (cryptogram.length != 0) {
		if (cryptogram[i] === cryptogram[i + 1]) {
			cryptogram.splice(i, 2);
			i = 0;
			continue;
		}
		i++;

		if (i === cryptogram.length) {
			break;
		}
	}
	cryptogram = cryptogram.join('');
	return cryptogram;
}
module.exports = problem2;
