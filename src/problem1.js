function problem1(pobi, crong) {
	let answer;
	if (checkValid(pobi, crong)) {
		let pobiMax = getMaxValue(pobi);
		let crongMax = getMaxValue(crong);
		answer = returnAnswer(pobiMax, crongMax);
	} else {
		answer = -1;
	}

	function checkValid(arr1, arr2) {
		//예외 check
		let checkRange = (page) => page < 1 || page > 400;

		if (arr1.some(checkRange) || arr2.some(checkRange)) return 0;
		if (arr1[0] % 2 !== 1 || arr2[0] % 2 !== 1) return 0;
		if (arr1[1] - arr1[0] !== 1 || arr2[1] - arr2[0] !== 1) return 0;
		if (arr1[0] == 1 || arr1[0] == 399 || arr2[0] == 1 || arr1[1] == 399)
			return 0;

		return 1;
	}

	function getMaxValue(arr) {
		let leftDigitArray = arr[0]
			.toString()
			.split("")
			.map((str) => Number(str));
		let rightDigitArray = arr[1]
			.toString()
			.split("")
			.map((str) => Number(str));
		return compareInt(
			compareInt(calPlusArr(leftDigitArray), calMultipleArr(leftDigitArray)),
			compareInt(calPlusArr(rightDigitArray), calMultipleArr(rightDigitArray))
		);
	}
	function calMultipleArr(arr) {
		let multipleValue = 1;
		arr.forEach((el) => {
			multipleValue *= el;
		});
		return multipleValue;
	}
	function calPlusArr(arr) {
		let plusValue = 0;
		arr.forEach((el) => {
			plusValue += el;
		});
		return plusValue;
	}

	function compareInt(a, b) {
		if (a > b) return a;
		else return b;
	}

	function returnAnswer(pobi, crong) {
		if (pobi > crong) return 1;
		else if (pobi < crong) return 2;
		else return 0;
	}

	return answer;
}

module.exports = problem1;
