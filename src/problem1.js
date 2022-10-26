/**
 * TODO LIST
 * [X] - 테스트 함수 만들고 실행하기
 * [X] - 올바르지 않은 Argument일 때 -1을 반환하기
 *   [X] - 배열의 길이는 2이다.
 *   [X] - 배열의 원소에는 숫자만 들어올 수 있다.
 *   [X] - 배열은 홀수, 짝수 순의 데이터를 저장한다. ex) [23, 24]
 *   [X] - 배열은 연속된 숫자의 데이터를 저장한다.
 *   [X] - 배열은 3~398 범위의 숫자 데이터를 저장한다.
 * [X] - 큰 수 구하는 기능
 *   [X] - 인자의 각 자리수를 1의 자리로 만들어, 배열로 반환하는 함수를 작성한다.
 *   [X] - 배열의 총합을 구하는 함수 만들기
 *   [X] - 배열의 총곱을 구하는 함수 만들기
 *   [X] - 네개의 숫자 중 더 큰 수를 구하는 함수 만들기
 * [X] - 포비와 크롱의 큰 수들을 비교하여 결과를 반환하는 함수 만들기
 *   [X] - 포비 승: 1
 *   [X] - 크롱 승: 2
 *   [X] - 무승부: 0
 */

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
	// 배열의 길이가 2가 아닐 때
	if (arr.length !== 2) {
		return false;
	}

	// 배열의 원소가 숫자가 아닐 때
	if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
		return false;
	}

	// 배열 홀, 짝수의 순이 아닐 때
	if (arr[0] % 2 === 0 || arr[1] % 2 === 1) {
		return false;
	}

	// 배열의 원소가 연속된 값이 아닐 때
	if (arr[0] !== arr[1] - 1) {
		return false;
	}

  // 유효한 페이지의 범위가 아닐 때
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
