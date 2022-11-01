function problem4(word) {
	const CODE = {
		A_CODE: "A".charCodeAt(0),
		Z_CODE: "Z".charCodeAt(0),
		a_CODE: "a".charCodeAt(0),
		z_CODE: "z".charCodeAt(0),
	};
	let answer = [];

	Array.from(word).map((char) => {
		if (isAlphabet(char)) return answer.push(reverseChar(char));
		else return answer.push(char);
	});

	function isAlphabet(char) {
		if (
			(char.charCodeAt(0) >= CODE.a_CODE &&
				char.charCodeAt(0) <= CODE.z_CODE) ||
			(char.charCodeAt(0) >= CODE.A_CODE && char.charCodeAt(0) <= CODE.Z_CODE)
		) {
			return 1;
		} else return 0;
	}

	function reverseChar(char) {
		return char;
	}

	return answer.join("");
}

module.exports = problem4;
