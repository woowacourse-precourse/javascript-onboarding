function problem2(cryptogram) {
	//문자열에 중복이 있는지 체크하는 함수 -> checkDuplicate
	//중복된 문자를 제거하여 반환하는 함수 -> deDuplicate
	//위 사항들을 반복하여 체크하고 결과를 반환하는 함수 -> solution
	return solution(cryptogram);
}

function solution(crypto) {
	let tempStr = crypto;

	while (checkDuplicate(tempStr)) {
		tempStr = deDuplicate(tempStr);
	}

	return tempStr;
}

function checkDuplicate(crypto) {
	let countDuplicate = 0;

	for (let i = 0; i < crypto.length; i++) {
		countDuplicate += crypto.charAt(i) === crypto.charAt(i + 1) ? 1 : 0;
	}

	return countDuplicate > 0 ? 1 : 0;
}

function deDuplicate(crypto) {
	let tempStr = '';

	for (let i = 0; i < crypto.length; i++) {
		if (crypto.charAt(i) === crypto.charAt(i - 1) || crypto.charAt(i) === crypto.charAt(i + 1)) continue;
		tempStr += crypto.charAt(i);
	}

	return tempStr;
}

module.exports = problem2;
