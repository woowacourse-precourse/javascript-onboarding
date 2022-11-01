function problem2(cryptogram) {
	let answer = '';

	// 한단계 해독 함수
	const decode = (str) => {
		let idx = 0;
		let result = '';
		let isChanged = false;

		do {
			// charAt 함수는 범위 벗어나는 값 입력하면 빈 문자열 리턴함
			// 현재 idx의 문자와 다음 idx의 문자가 같지 않으면 answer에 입력하고 idx 1 증가
			if (str.charAt(idx) !== str.charAt(idx + 1)) {
				result += str.charAt(idx);
				idx += 1;
			} else {
				// 문자가 같으면 idx 2 증가
				idx += 2;
			}
		} while (idx < str.length);

		isChanged = result === str ? false : true;

		return [result, isChanged];
	};

	for (let i = 0; i < cryptogram.length; i++) {
		let [newStr, isChanged] = decode(i == 0 ? cryptogram : answer);

		answer = newStr;
		if (isChanged == false) {
			break;
		}
	}

	return answer;
}

module.exports = problem2;
