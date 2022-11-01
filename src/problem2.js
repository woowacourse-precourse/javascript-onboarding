function problem2(cryptogram) {
	var count = 0;
	var remove = [];
	while (count < cryptogram.length){
		for (var i = 0; i < cryptogram.length - 1; i++){
			if (cryptogram[i] === cryptogram[i + 1]){
				remove = cryptogram.splice(i, 2);
				i -= 2;
			}
		}
		count++;
	}
	return cryptogram;
}

module.exports = problem2;
