function problem2(cryptogram) {
	//문자열에 중복이 있는지 체크하는 함수 -> checkDuplicate
	//중복된 문자를 제거하여 반환하는 함수 -> deDuplicate
	//위 사항들을 반복하여 체크하는 함수 -> decrypt
	return decrypt(cryptogram);
}

function decrypt(crypto) {
	let tempStr = crypto;

	while (checkDuplicate(tempStr)) {
		tempStr = deDuplicate(tempStr);
	}

	return tempStr;
}

function checkDuplicate(crypto) {}

function deDuplicate(crypto) {}

module.exports = problem2;
