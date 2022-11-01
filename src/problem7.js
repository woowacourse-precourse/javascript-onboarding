/*
기능 목록
1. 특정 사용자 user 친구 여부 검사 기능
2. friends 배열 순회하며 1번 점수 계산 기능
3. visitor 배열 순회하며 2번 점수 계산 기능
4. 정답 배열 정렬 기능
*/

// user     => 사용자, length : 1~ 30
// friends  => 친구 관계 배열, length : 1~ 10'000
// visitor	=> 사용자가 방문한 사용자 이름 배열
// return	=> 점수 내림차순, 동점 : 사전순
function problem7(user, friends, visitors) {

	
	// 1. 특정 사용자 user 친구 여부 검사 기능
	function isFrd(tgt) {
        var flag = false;
        if (tgt == user)
            return false;
        friends.forEach(function (f) {
            if ((f[0] == user && f[1] == tgt) || (f[0] == tgt && f[1] == user)) {
                flag = true;
            }
        });
        return flag;
    }
	return answer;
}

module.exports = problem7;
