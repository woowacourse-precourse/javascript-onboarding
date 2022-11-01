function problem1(pobi, crong) {
	let answer;

	// 규칙 검사 함수
	const checkRule = (arr) => {
		if (arr.length !== 2) {
			// 주어진 숫자가 두 개가 아니면
			return false;
		} else if (arr[0] + 1 !== arr[1]) {
			// 왼쪽, 오른쪽 번호가 순서대로 들어있지 않다면
			return false;
		} else if (arr[0] < 1 || arr[1] > 400) {
			// 쪽수 범위에서 벗어난다면
			return false;
		} else {
			return true;
		}
	};

	// 합과 곱중 큰 결과를 반환하는 함수
	const calculate = (num) => {
		const numArr = num
			.toString()
			.split('')
			.map((a) => parseInt(a));

		const sum = numArr.reduce((acc, cur) => {
			return (acc += cur);
		}, 0);

		const firstNumIdx = numArr.findIndex((item) => {
			return item !== 0;
		});

		const product = numArr.reduce((acc, cur, idx) => {
			if (idx >= firstNumIdx) {
				return (acc *= cur);
			} else {
				return 1;
			}
		}, 1);

		return sum >= product ? sum : product;
	};

	// arr의 0 인덱스, 1인덱스의 두 숫자를 비교해서 큰 수를 반환하는 함수
	const compare = (arr) => {
		return arr[0] >= arr[1] ? arr[0] : arr[1];
	};

	// 주어진 행렬이 규칙을 통과하는지 검사
	if (checkRule(pobi) == false || checkRule(crong) == false) {
		// 하나라도 규칙 통과 못하면 -1 반환
		return -1;
	}

	// 각자 점수 계산
	const pobiResult = compare(pobi.map((item) => calculate(item)));
	const crongResult = compare(crong.map((item) => calculate(item)));

	if (pobiResult > crongResult) {
		answer = 1;
	} else if (pobiResult < crongResult) {
		answer = 2;
	} else {
		answer = 0;
	}

	return answer;
}

module.exports = problem1;
