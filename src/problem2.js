/*
 * 기능 분석
 * [x] 입력된 문장에 대한 2번 이상 중복되는 알파벳 소문자를 선택하는 정규표현식 작성
 * [] 2번 이상 중복된 알파벳 소문자를 제거한 문자열 반환 기능
 * [] 2번 이상 중복된 문자열이 없을 때까지 반복하는 기능
 */

// 문장 복호화 정규표현식 작성
// 정규식 해설: 문자열에서의 알파벳소문자가 2개 이상인 집합을 찾는다. 
const DECRYPTION_REG_EXPR = /([a-z])\1+/g;

function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
