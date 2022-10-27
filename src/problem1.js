function problem1(pobi, crong) {
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
