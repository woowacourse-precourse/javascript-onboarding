/*
기능 목록
1. 특정 금액 최대 변환 개수 산출 기능
2. 금액 별 순회 변환 개수 산출 기능
*/

// money => int, 1~1'000'000
// return => array, [50'000, 10'000, 5'000, 1'000, 500, 100, 50, 10, 1]
function problem5(money) {
	var answer;
	return answer;
}

// 1. 특정 금액 최대 변환 개수 산출 기능
// money : 돈, div : 나눌 금액
// return => 나눈 몫, 뺄 금액
function getDiv(money, div) {
	ans = parseInt(money / div);
	return [ans, money-div*ans];
}

module.exports = problem5;
