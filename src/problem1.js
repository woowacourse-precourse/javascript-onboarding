function problem1(pobi, crong) {
	const getTopNum = (arr) => {
		const array = arr.map((a) => String(a));
		const firstNum = array[1];
		const [fir, sec, thi] = firstNum;
		const [first, second, third] = [+fir, +sec, +thi];

		if (array[1] - array[0] !== 1) return -1;
		if (!second) return firstNum;

		const multiple = third ? first * second * third : first * second;
		const plus = third ? first + second + third : first + second;

		return multiple < plus ? plus : multiple;
	};

	const pobiNum = getTopNum(pobi);
	const crongNum = getTopNum(crong);

	return pobiNum === -1 || crongNum === -1
		? -1
		: pobiNum > crongNum
		? 1
		: pobiNum < crongNum
		? 2
		: pobiNum === crongNum
		? 0
		: undefined;
}

module.exports = problem1;
