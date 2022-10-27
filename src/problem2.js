function problem2(cryptogram) {
	let result = [cryptogram[0]];
	for (i = 1; i < cryptogram.length; i++) {
		if (result.length === 0) result.push(cryptogram[i]);
		if (result[result.length - 1] === cryptogram[i]) {
			result.pop();
		} else {
			result.push(cryptogram[i]);
		}
	}
	return result;
}
module.exports = problem2;
