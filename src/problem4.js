function problem4(word) {
	const CODE = {
		A_CODE: "A".charCodeAt(0),
		Z_CODE: "Z".charCodeAt(0),
		M_CODE: "M".charCodeAt(0),
		a_CODE: "a".charCodeAt(0),
		z_CODE: "z".charCodeAt(0),
		m_CODE: "m".charCodeAt(0),
	};
	let answer = [];

	Array.from(word).map((char) => {
		if (isAlphabet(char))
			return answer.push(String.fromCharCode(reverseChar(char)));
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
		let targetCode = char.charCodeAt(0);
		if (targetCode <= CODE.Z_CODE) {
			//대문자
			if (targetCode <= CODE.M_CODE) {
				//M이하
				return targetCode + ((CODE.A_CODE - targetCode) * 2 + 25);
			} else {
				return targetCode + ((CODE.Z_CODE - targetCode) * 2 - 25);
			}
		}
		if (targetCode >= CODE.a_CODE) {
			//소문자
			if (targetCode <= CODE.m_CODE) {
				//m이하
				return targetCode + ((CODE.a_CODE - targetCode) * 2 + 25);
			} else {
				return targetCode + ((CODE.z_CODE - targetCode) * 2 - 25);
			}
		}
	}

	return answer.join("");
}

module.exports = problem4;
