function problem2(cryptogram) {
	return decrypt(cryptogram);
}

function decrypt(crypto) {
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
