/**
 * TODO LIST
 * [X] - 테스트 함수 만들고 실행하기
 * [X] - 올바르지 않은 Argument일 때 -1을 반환하기
 *   [X] - 배열의 길이는 2이다.
 *   [X] - 배열의 원소에는 숫자만 들어올 수 있다.
 *   [X] - 배열은 홀수, 짝수 순의 데이터를 저장한다. ex) [23, 24]
 *   [X] - 배열은 연속된 숫자의 데이터를 저장한다.
 *   [X] - 배열은 3~398 범위의 숫자 데이터를 저장한다.
 * [ ] - 인자의 각 자리수를 1의 자리로 만들어, 배열로 반환하는 함수를 작성한다.
 * [ ] - 배열의 총합을 구하는 함수 만들기
 * [ ] - 배열의 총곱을 구하는 함수 만들기
 * [ ] - 포비의 큰 수를 구하는 함수 만들기
 * [ ] - 크롱의 큰 수를 구하는 함수 만들기
 * [ ] - 포비와 크롱의 큰 수들을 비교하여 결과를 반환하는 함수 만들기
 *   [ ] - 포비 승: 1
 *   [ ] - 크롱 승: 2
 *   [ ] - 무승부: 0
 */

/**
 * 
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
	var answer;

	// 배열 예외처리하기
	if (!isValidArgument(pobi) || !isValidArgument(crong)) {
		return -1;
	}

	return answer;
}

module.exports = problem1;

function Test() {
	const pobi = [399, 400];
	const crong = [3, 4];
	problem1(pobi, crong);
}

Test();
