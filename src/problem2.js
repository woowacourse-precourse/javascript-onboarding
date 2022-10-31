/*
기능 목록
1. 전달받은 cryptogram 길이 검사 기능
2. 연속 중복 문자가 존재 검사 기능
3. 연속 중복 문자 삭제 기능
*/

// cryptogram => string, length : 1~1000
// return => string, length : 0~1000
function problem2(cryptogram) {
  var answer;
  return answer;
}

// 1. 전달받은 cryptogram 길이 검사 기능
// return => valid : true, not valid : false
function isValid(str) {
  if(str.lenth < 1 || str.lenth > 1000) return false;
  return true;
}

module.exports = problem2;
