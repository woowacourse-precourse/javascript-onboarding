/*
기능 목록
1. 특정 숫자 손뼉 몇 번 산출 기능
2. 1~number까지 총 손뼉 횟수 합산 기능
*/

// number => int, 1~10'000
// return => 손뼉 총 횟수
function problem3(number) {
	var answer;
	return answer;
}

// 1. 특정 숫자 손뼉 몇 번 산출 기능
// return => number
function getClap(num) {
	var ans=0, curr;
	while(num > 0) {
        curr = num % 10;
		if(curr % 3 == 0 && curr != 0) ans++;
		num = parseInt(num / 10);
	}
	return ans;
}

module.exports = problem3;
