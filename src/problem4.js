function problem4(word) {
	var answer = "";
	// a : 97  b : 98 --- z : 122
	// A : 65  B : 66 --- Z : 90
	//  space : 32

	for (let i = 0; i < word.length; i++) {
		let unicode = word[i].charCodeAt(word[i]);
		let cal = "";
		let diff;

		const start = unicode >= 97 ? 97 : unicode >= 65 ? 65 : 32;
		if (start !== 32) {
			diff = unicode - start;
			cal = String.fromCharCode(start + 25 - diff);
		} else {
			cal = String.fromCharCode(32);
		}
		answer += cal;
	}

	return answer;
}

module.exports = problem4;
