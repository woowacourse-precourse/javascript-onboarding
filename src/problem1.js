/*
기능 목록
1. 전달받은 pobi, crong 내부 값 범위 검사 (각 1~400)
2. 페이지 값에 따른 점수 계산
3. pobi, crong의 승패 판정
*/


// pobi, crong => length : 2, type : int
// return => pobi win : 1, crong win : 2, draw : 0, excep : -1
function problem1(pobi, crong) {
	var answer;
	return answer;
}

// 1. 전달받은 pobi, crong 내부 값 범위 검사 (각 1~400)
// return => valid : true, not valid : false
function isValid(book) {
	var left, right;
	left = book[0]; right = book[1];
	if((right - left) != 1) return false;				// 한 페이지 차이인지 검사
	if(left % 2 != 1 || right % 2 != 0) return false;	// 왼쪽이 홀수, 오른쪽이 짝수인지 검사

	return true;
}

module.exports = problem1;
