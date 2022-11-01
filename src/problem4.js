/*
기능 목록
1. 특정 알파벳 규칙 맞게 변환 기능
2. 알파벳 여부 검사 기능
3. 문자열 특정 인덱스 문자 변경 기능
*/


// word => string, length : 1~1'000
// return => 변환 문자
function problem4(word) {
	var idx=0;
	while(idx < word.length) {
        if(!isAlpa(word[idx])){
            idx++; continue;
        }
		word = transAt(word, idx, getTrans(word[idx])); idx++;
	}
	return word;
}

// 1. 특정 알파벳 규칙 맞게 변환 기능
// return => char
function getTrans(ch) {
	var asc = ch.charCodeAt(0);
	if(97 <= asc && asc <= 122) {   // 소문자
		return String.fromCharCode(122 - (asc - 97));
	}

	// 대문자
	return String.fromCharCode(90 - (asc - 65));
}
// 2. 알파벳 여부 검사 기능
// return => 알파벳 : true, 알파벳X : false
function isAlpa(ch) {
	var asc = ch.charCodeAt(0);
	if(65 <= asc && asc <= 90 || 97 <= asc && asc <= 122) return true;
	return false;
}

// 3. 문자열 특정 인덱스 문자 변경 기능
// return => string
function transAt(str, trg, ch) {
	return str.slice(0, trg) + ch + str.slice(trg+1, str.lenth);

}

module.exports = problem4;
