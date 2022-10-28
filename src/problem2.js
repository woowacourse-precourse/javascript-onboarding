/*
 * 기능 분석
 * [x] 입력된 문장에 대한 2번 이상 중복되는 알파벳 소문자를 선택하는 정규표현식 작성
 * [x] 2번 이상 중복된 알파벳 소문자를 제거한 문자열 반환 기능
 * [x] 2번 이상 중복된 알파벳 소문자가 없을 때까지 반복하는 기능
 */

// 문장 복호화 정규표현식 작성
// 정규식 해설: 문자열에서의 알파벳소문자가 2개 이상인 집합을 찾는다. 
const DECRYPTION_REG_EXPR = /([a-z])\1+/g;

// cryptogram 복호화 기능 함수
function decryptionCryptogram(cryptogram) {
  
  /*
   * 정규표현식에서의 test메서드를 활용하여 내가 생각한 패턴이 문자열이 존재하는지를 확인하고,
   * test에서 존재할 경우에는 true, 아닐 경우에는 false를 반환한다.
   * 존재하는 경우 replace를 통해 2번 이상 반복된 알파벳 소문자를 공백으로 만든다. 
   * 추가로 제거 이후 2번 이상 반복된 알파벳이 없을 때까지 해당 검사를 반복한다. 
   */
  while (DECRYPTION_REG_EXPR.test(cryptogram)) {
    cryptogram = cryptogram.replace(DECRYPTION_REG_EXPR, '');
  }

  return cryptogram;
}

function problem2(cryptogram) {
  var answer;

  answer = decryptionCryptogram(cryptogram);

  return answer;
}

module.exports = problem2;
