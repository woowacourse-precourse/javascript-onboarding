function problem4(word) {
	let answer;

	// 영어 대문자의 아스키코드 범위는 A(65)부터 Z(90)까지이며, 소문자의 아스키코드 범위는 a(97)부터 z(122)까지
	// charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환
	const checkChar = (charCode) => {
		if (65 <= charCode && charCode <= 90) {
			// 대문자면
			return 1;
		} else if (97 <= charCode && charCode <= 122) {
			// 소문자면
			return 2;
		} else {
			return -1;
		}
	};

	const convert = (char) => {
		let result = '';
		const charCode = char.charCodeAt(0);
		const charType = checkChar(charCode);

		if (charType === 1) {
			result = String.fromCodePoint(155 - charCode);
		} else if (charType === 2) {
			result = String.fromCodePoint(219 - charCode);
		} else {
			result = char;
		}

		return result;
	};

	answer = Array.from(word)
		.map((char) => convert(char))
		.join('');

	return answer;
}

module.exports = problem4;
