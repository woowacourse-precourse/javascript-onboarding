function problem3(number) {
	//1부터 number까지 루프를 돌리고 결과를 반환하는 함수 -> solution
	//숫자에 3,6,9가 속해있는지 체크하여 박수의 횟수를 반환하는 함수 -> countClap
	return solution(number);
}

function solution(number) {
	let sum = 0;

	for (let i = 1; i <= number; i++) {
		sum += countClap(i);
	}

	return sum;
}

function countClap(number) {
	let count = 0;

	number
		.toString()
		.split('')
		.forEach((digit) => {
			count += [3, 6, 9].includes(Number(digit)) ? 1 : 0;
		});

	return count;
}

module.exports = problem3;
