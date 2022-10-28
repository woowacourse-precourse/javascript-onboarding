function problem1(pobi, crong) {
	if (!pobi || !crong || !validationCheck(pobi) || !validationCheck(crong)) return -1;

	pobi = getResults(pobi);
	crong = getResults(crong);
	return pobi > crong ? 1 : pobi < crong ? 2 : 0;
}

function validationCheck(info) {
	if (info.length !== 2) return false;
	if (info[1] - info[0] !== 1) return false;
	if (info[0] <= 1 || info[1] >= 400) return false;

	return true;
}

function getResults([left, right]) {
	let arr = [];
	arr.push(addDigit(left));
	arr.push(mulDigit(left));
	arr.push(addDigit(right));
	arr.push(mulDigit(right));

	return Math.max(...arr);
}

function addDigit(num) {
	let result = 0;
	while (num !== 0) {
		result += num % 10;
		num = Math.floor(num / 10);
	}
	return result;
}

function mulDigit(num) {
	let result = 1;
	while (num !== 0) {
		result *= num % 10;
		num = Math.floor(num / 10);
	}
	return result;
}

module.exports = problem1;
