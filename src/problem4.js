function problem4(word) {
	//알파벳인지 판별하고 결과를 반환하는 함수 -> solution
	//대문자, 소문자를 구별하는 함수 -> alphabetFilter
	//대문자, 소문자 별로 알파벳을 반전하는 함수 -> reverseUpper, reverseLower
	return solution(word);
}

function solution(word) {
	let reverseWord = '';

	for (let i = 0; i < word.length; i++) {
		reverseWord += /[A-z]/g.test(word.charAt(i)) ? alphabetFilter(word.charAt(i)) : word.charAt(i);
	}

	return reverseWord;
}

function alphabetFilter(alphabet) {
	return /[a-z]/g.test(alphabet) ? reverseLower(alphabet.charCodeAt(0)) : reverseUpper(alphabet.charCodeAt(0));
}

function reverseUpper(alphabetCode) {
	return String.fromCharCode(alphabetCode > 77 ? 65 + (90 - alphabetCode) : 90 + (65 - alphabetCode));
}

function reverseLower(alphabetCode) {
	return String.fromCharCode(alphabetCode > 109 ? 97 + (122 - alphabetCode) : 122 + (97 - alphabetCode));
}

module.exports = problem4;
