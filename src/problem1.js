/**
 * 두 수를 비교해 결과를 반환한다.
 * @param {Array} pobi 비교할 배열1
 * @param {Array} crong 비교할 배열2
 * @returns 비교 결과
 */
function compareScore(pobiScore, crongScore) {
	if (pobiScore === crongScore) {
		return 0;
	}

	const winner = Math.max(pobiScore, crongScore);
	switch (winner) {
		case pobiScore:
			return 1;
		case crongScore:
			return 2;
		default:
			return -1;
	}
}

/**
 * 배열 원소들의 합을 반환한다.
 * @param {Array} numArr 숫자로 이뤄진 배열
 * @returns 배열 원소들의 합
 */
function getAddtionScore(numArr) {
	return numArr.reduce((acc, cur) => acc += cur, 0);
}

/**
 * 배열 원소들의 곱을 반환한다.
 * @param {Array} numArr
 * @returns 배열 원소들의 곱
 */
function getMultiplicationScore(numArr) {
	return numArr.reduce((acc, cur) => {
		if (cur === 0) {
			cur = 1;
		}
		return acc *= cur
	}, 1);
}

/**
 * 인자의 각 자리수를 1의 자리로 만들어, 배열로 반환한다.
 * @param {*} num 스플릿할 숫자
 * @returns 스플릿된 숫자를 가진 배열 반환
 */
 function splitNum(num) {
	return Array.from(String(num), Number);;
}

/**
 * 두 개의 원소에서 나올 수 있는 가장 큰 수를 구하고 반환한다.
 * @param {Array} arr 큰 수를 만들 배열
 * @returns 네가지 숫자 중 가장 큰 숫자
 */
function getScore(arr) {
	const scoreArr = [];

	scoreArr.push(getAddtionScore(splitNum(arr[0])));
	scoreArr.push(getAddtionScore(splitNum(arr[1])));
	scoreArr.push(getMultiplicationScore(splitNum(arr[0])));
	scoreArr.push(getMultiplicationScore(splitNum(arr[1])));

	return Math.max(...scoreArr);
}

/**
 * 전달인자 예외처리
 * @param {Array} arr 검사하려는 배열
 * @returns 올바른 인자라면 true, 아니라면 false
 */
function isValidArgument(arr) {
	if (arr.length !== 2) {
		return false;
	}

	if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
		return false;
	}

	if (arr[0] % 2 === 0 || arr[1] % 2 === 1) {
		return false;
	}

	if (arr[0] !== arr[1] - 1) {
		return false;
	}

  if (arr[0] <= 2 || arr[1] >= 398) {
		return false;
	}


	return true;
}

/**
 * @param {Array} pobi 홀수와 짝수의 페이지를 갖고 있는 배열
 * @param {Array} crong 홀수와 짝수의 페이지를 갖고 있는 배열
 * @returns 게임의 결과를 반환한다.
 */
function problem1(pobi, crong) {
	if (!isValidArgument(pobi) || !isValidArgument(crong)) {
		return -1;
	}

	const pobiScore = getScore(pobi);
	const crongScore = getScore(crong);
	return compareScore(pobiScore, crongScore);
}

module.exports = problem1;

function Test() {
	const pobi = [3, 4];
	const crong = [3, 4];
	console.log(problem1(pobi, crong));
}

Test();
