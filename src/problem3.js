function problem3(number) {
	let answer = 0;
	let numArr = Array.from({ length: number }, (_, index) => index + 1);
	numArr.forEach((element) => {
		element
			.toString()
			.split("")
			.forEach((digit) => {
				if (digit == 3 || digit == 6 || digit == 9) answer++;
			});
	});
	return answer;
}

module.exports = problem3;
