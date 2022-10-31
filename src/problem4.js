function problem4(word) {
	const map = createMap();

	return word
		.split('')
		.map(ch => (map[ch] ? map[ch] : ch))
		.join('');
}

function createMap() {
	let result = {};

	for (let i = 0; i < 26; i++) {
		result[String.fromCharCode(97 + i)] = String.fromCharCode(122 - i);
		result[String.fromCharCode(65 + i)] = String.fromCharCode(90 - i);
	}

	return result;
}
module.exports = problem4;
