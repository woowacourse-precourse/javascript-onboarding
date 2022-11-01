function problem4(word) {
	var answer = [];

	for (let i = 0; i < word.length; i++) {
		word[i] != ' '?answer.push(String.fromCharCode(convertWord(word[i]))):answer.push(' ')
	}
	return answer.join('');
}
function convertWord(word) {
	let result = 0;
	let pivot = 0;
	word === word.toLowerCase() ? (pivot = 109) : (pivot = 77);
	console.log(word.charCodeAt(0), word, pivot);
	word.charCodeAt(0) < pivot
		? (result = 2 * pivot - word.charCodeAt(0) + 1)
		: (result = -(word.charCodeAt(0) - (pivot + 1)) + pivot);

	return result;
}
module.exports = problem4;
