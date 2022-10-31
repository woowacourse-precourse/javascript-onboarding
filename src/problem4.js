function problem4(word) {
	let answer = [];
	let lowerAlphabet = [];
	let upperAlphabet = [];

	for (let i = 97; i <= 122; i++) {
		lowerAlphabet.push(String.fromCharCode(i));
	}
	for (let i = 65; i <= 90; i++) {
		upperAlphabet.push(String.fromCharCode(i));
	}

	for (let i = 0; i < word.length; i++) {
		if (word[i] === " ") {
			answer.push(" ");
		}

		if (lowerAlphabet.includes(word[i])) {
			answer.push(
				lowerAlphabet[lowerAlphabet.length - lowerAlphabet.indexOf(word[i]) - 1]
			);
		}

		if (upperAlphabet.includes(word[i])) {
			answer.push(
				upperAlphabet[upperAlphabet.length - upperAlphabet.indexOf(word[i]) - 1]
			);
		}
	}
	return answer.join("");
}

module.exports = problem4;
