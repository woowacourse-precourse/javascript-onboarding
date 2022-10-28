function problem3(number) {
	//1부터 number까지 루프를 돌리는 함수 -> clap
	//숫자에 3,6,9가 속해있는지 체크하는 함수 -> checkNum
	return clap(number);
}

function clap(number) {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		if (checkNum(i)) sum++;
	}

	return sum;
}

function checkNum(number) {}

module.exports = problem3;
