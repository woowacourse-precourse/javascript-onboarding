function problem4(word) {
	const upperCase = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]
	const lowerCase = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	]

	const dictionary = {}
	for (let i = 0; i < upperCase.length; i++) {
		dictionary[upperCase[i]] = [...upperCase].reverse()[i]
		dictionary[lowerCase[i]] = [...lowerCase].reverse()[i]
	}

	let result = ''

	for (let char of word) {
		result += dictionary[char] || char
	}

	return result
}
module.exports = problem4
