/*
기능 목록
1. 특정 사용자 둘 친구 여부 검사 기능
2. 사용자명 추출 기능
3. 친구 점수 추출 기능
4. 방문 점수 추출 기능
5. 조건 안맞는 사용자 제거 기능
6. 정렬 기능
*/

// user     => 사용자, length : 1~ 30
// friends  => 친구 관계 배열, length : 1~ 10'000
// visitor	=> 사용자가 방문한 사용자 이름 배열
// return	=> 점수 내림차순, 동점 : 사전순
function problem7(user, friends, visitors) {
    var score = new Map();
    addUserNames();
    setFrdScore();
    setVstScore();
    delUser();
	console.log(score);
    let ret = Array.from(score.keys())
    ret.sort(compareScore);
	
	return ret;
	
	// 1. 특정 사용자 user 친구 여부 검사 기능
    function isFrd(tgt_1, tgt_2) {
        var flag = false;
        if (tgt_1 == tgt_2)
            return false;
        friends.forEach(function (f) {
            if ((f[0] == tgt_1 && f[1] == tgt_2) || (f[0] == tgt_2 && f[1] == tgt_1)) {
                flag = true;
            }
        });
        return flag;
    }

	// 2. 사용자명 추출 기능
    function addUserNames() {
        friends.forEach(function (frd) {
            score.set(frd[0], 0);
            score.set(frd[1], 0);
        });
        visitors.forEach(function (vst) {
            score.set(vst, 0);
            score.set(vst, 0);
        });
    }

	// 3. 친구 점수 추출 기능
    function setFrdScore() {
        for(let s1 of score) {
            if(s1[0] == user) continue;
            for(let s2 of score) {
                if(isFrd(s1[0], s2[0]) && isFrd(s2[0], user)){
                    score.set(s1[0], score.get(s1[0])+10);
                }
            }
        }
    }

	// 4. 방문 점수 추출 기능
    function setVstScore() {
        for(let v of visitors) {
            score.set(v, score.get(v) + 1);
        }
    }

	// 5. 조건 안맞는 사용자 제거 기능
    function delUser() {
        for (let s1 of score) {
            if(s1[0] == user) score.delete(s1[0]);
            if(isFrd(s1[0],user)) score.delete(s1[0]);
        }
    }

	// 6. 정렬 기능
	function compareScore(left, right) {
        if(score.get(left) > score.get(right)) return -1;
        if(score.get(left) < score.get(right)) return 1;
        if(score.get(left) == score.get(right)) {
            if(left > right) return 1;
            if(left < right) return -1;
            if(left == right) return 0;
        }
    }
}

module.exports = problem7;
