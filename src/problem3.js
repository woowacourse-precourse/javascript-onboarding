function problem3(number) {
	var answer = 0;
	for (let i = 1; i <= number; i++) {
		answer += countClaps(i);
	}
	return answer;
}

function countClaps(num) {
	return num
		.toString()
		.split('')
		.reduce((acc, cur) => {
			if (cur === '3' || cur === '6' || cur === '9') return acc + 1;
			else return acc;
		}, 0);
}

module.exports = problem3;
