function problem4(word) {
	return charFilter(word);
}

function charFilter(word) {
	let reverseWord = '';

	for (let i = 0; i < word.length; i++) {
		reverseWord += /[A-z]/g.test(word.charAt(i)) ? alphabetFilter(word.charAt(i)) : word.charAt(i);
	}

	return reverseWord;
}

function alphabetFilter(alphabet) {
	return /[a-z]/g.test(alphabet) ? reverseLower(alphabet.charCodeAt(0)) : reverseUpper(alphabet.charCodeAt(0));
}

function reverseLower(alphabetCode) {
	return String.fromCharCode(alphabetCode > 109 ? 97 + (122 - alphabetCode) : 122 + (97 - alphabetCode));
}

function reverseUpper(alphabetCode) {
	return String.fromCharCode(alphabetCode > 77 ? 65 + (90 - alphabetCode) : 90 + (65 - alphabetCode));
}

module.exports = problem4;
