function problem3(num) {
	let count = 0;
	let i = 1;

	while (i <= num) {
		if (i < 10) {
			isCrapNumber(i) ? count++ : '';
		} else {
			arr = splitNumber(i);
			arr.map((i) => {
				isCrapNumber(i) ? count++ : '';
			});
		}
		i++;
	}
	return count;
}
function isCrapNumber(num) {
	if (num === 3 || num === 6 || num === 9) {
		return true;
	}
	return false;
}
function splitNumber(num) {
	let arr = [];
	while (num > 1) {
		num < 10 ? arr.push(Math.trunc(num)) : arr.push(Math.trunc(num % 10));
		num = num / 10;
	}
	return arr;
}
module.exports = problem3;
