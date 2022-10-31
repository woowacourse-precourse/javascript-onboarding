/*
기능 목록
1. 전달받은 pobi, crong 내부 값 범위 검사 (각 1~400)
2. 페이지 값에 따른 더하기 점수 계산
3. 페이지 값에 따른 곱하기 점수 계산
4. pobi, crong의 점수 결정
5. pobi, crong의 승패 판정
*/


// pobi, crong => length : 2, type : int
// return => pobi win : 1, crong win : 2, draw : 0, excep : -1
function problem1(pobi, crong) {
	if(!isValid(pobi) || !isValid(crong)) return -1;
	
	var p_score = Math.max(getSumScore(pobi), getMulScore(pobi));
	var c_score = Math.max(getSumScore(crong), getMulScore(crong));

	if(p_score > c_score) return 1;
	if(p_score < c_score) return 2;
	if(p_score == c_score) return 0;
	return -1;
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

// 2. 페이지 값에 따른 더하기 점수 계산
function getSumScore(book) {
	var left, right, l_score = 0, r_score = 0;
	left = book[0]; right = book[1];
	while(left > 0) {
		l_score += left % 10;
		left = parseInt(left / 10);
	}
	while(right > 0) {
		r_score += right % 10;
		right = parseInt(right / 10);
	}
	return Math.max(l_score, r_score);
}

// 3. 페이지 값에 따른 곱하기 점수 계산
function getMulScore(book) {
	var left, right, l_score = 1, r_score = 1;
	left = book[0]; right = book[1];
	while(left > 0) {
		l_score *= left % 10;
		left = parseInt(left / 10);
	}
	while(right > 0) {
		r_score *= right % 10;
		right = parseInt(right / 10);
	}
    console.log(l_score, r_score);
	return Math.max(l_score, r_score);
}

module.exports = problem1;
