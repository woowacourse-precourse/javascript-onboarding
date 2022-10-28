function problem4(word) {
	//알파벳인지 판별하는 함수 -> charFilter
	//대문자, 소문자를 구별하는 함수 -> alphabetFilter
	//대문자, 소문자 별로 알파벳을 반전하는 함수 -> reverseAlphabet

	return charFilter(word);
}

function charFilter(word) {
	let reverseWord = '';

	for (let i = 0; i < word.length; i++) {
		reverseWord += /[a-z][A-z]/g.test(word.charAt(i)) ? alphabetFilter(word.charAt(i)) : word.charAt(i);
	}

	return reverseWord;
}

function alphabetFilter() {}

function reverseAlphabet() {}

module.exports = problem4;
