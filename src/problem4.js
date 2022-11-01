/*
  기능 목록
  1. 알파벳 외의 문자는 변환하지 않으므로, 알파벳인지 확인한다.
  2. 알파벳이면, ascii코드로 변환해 대문자인지 소문자인지 확인후 변환을 진행한다.
  3. 변환은 청개구리 사전이 거꾸로 되어있으므로, ascii 코드의 합을 사용하여 이용한다.
  4. 대문자는 155, 소문자는 219를 사용한다.
  5. 변환된 문자열을 반환한다.
*/
function problem4(word) {
  var answer;
  return answer;
}

function isAlphabet(word) {
  // 입력값이 알파벳인지 검증하는 함수
  // 정규표현식을 통해 검증(ascii값으로 검증할 경우 코드에 없는 값이 들어올 수도 있음)
  var regExp = /^[a-zA-Z]+$/;
  return regExp.test(word);
}

module.exports = problem4;
