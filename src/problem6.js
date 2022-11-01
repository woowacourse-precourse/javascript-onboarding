/*
기능 목록
1. 두 문자열 두 글자 이상 문자 연속 동일 여부 검사 기능
2. forms 배열 순회 중복자 이메일 result 배열 추가 기능
3. result 배열 중복 제거 기능
*/

// forms => [['email','name'], ... ]
// return => 닉네임 중복자 ['email', ...], 오름차순 정렬, 중복 제거
function problem6(forms) {
	var ans=[];
	for(var i=0; i<forms.length; i++) {
		for(var j=i+1; j<forms.length; j++){
			if(!isSim(forms[i][1], forms[j][1])) continue;
			ans.push(forms[i][0]); ans.push(forms[j][0]);
		}
	}

	return ans;
}

// 1. 두 문자열 두 글자 이상 문자 연속 동일 여부 검사 기능
// nick_1, nick_2 => 닉네임
// return => 2글자 이상 중복 부분 존재 : true, 존재X : false
function isSim(nick_l, nick_r) {
	var left=0, right=0;
	for(var left=0; left<nick_l.length-1; left++) {
		for(var right=0; right<nick_r.length-1; right++) {
            if(nick_l[left] != nick_r[right]) continue;
			if(nick_l[left+1] == nick_r[right+1]) return true;
		}
	}
	return false;
}

module.exports = problem6;
