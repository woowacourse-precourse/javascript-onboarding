function problem1(pobi, crong) {
	//누가 이겼는지 결과 값을 구하고 반환할 함수 -> solution
	//각 점수들 중 가장 큰 수를 구할 함수 -> getMax
	//덧셈 결과를 반환할 함수 -> resultAdd
	//곱셈 결과를 반환할 함수 -> resultMul
	return solution(pobi, crong);
}

function solution(pobi, crong) {
	let pobiMax, crongMax;

	try {
		pobiMax = getMax(pobi);
		crongMax = getMax(crong);

		return pobiMax > crongMax ? 1 : pobiMax < crongMax ? 2 : 0;
	} catch (error) {
		// console.error(error);
		return -1;
	}
}

function getMax(arr) {
	const left = arr[0];
	const right = arr[1];
	let leftMax = 0,
		rightMax = 0;

	if (left + 1 !== right) throw new Error('연속된 수가 아닙니다.');

	leftMax = resultAdd(left) >= resultMul(left) ? resultAdd(left) : resultMul(left);
	rightMax = resultAdd(right) >= resultMul(right) ? resultAdd(right) : resultMul(right);

	return leftMax >= rightMax ? leftMax : rightMax;
}

function resultAdd(num) {
	return num
		.toString()
		.split('')
		.reduce((acc, cur) => (acc += Number(cur)), 0);
}

function resultMul(num) {
	return num
		.toString()
		.split('')
		.reduce((acc, cur) => (acc *= Number(cur)), 1);
}

module.exports = problem1;
