function problem4(word) {
	//알파벳인지 판별하는 함수 -> charFilter
	//대문자, 소문자를 구별하는 함수 -> alphabetFilter
	//대문자, 소문자 별로 알파벳을 반전하는 함수 -> reverseSmall, reverseBig

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
	return /[a-z]/g.test(alphabet) ? reverseLower(alphabet) : reverseUpper(alphabet);
}

function reverseLower() {}

function reverseUpper() {}

module.exports = problem4;
