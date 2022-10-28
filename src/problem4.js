/*
 * 기능 분석
 * [x] 알파벳을 확인하고 선택하는 정규표현식 작성
 * [x] 알파벳을 청개구리 사전에 맞게 변경하는 기능
 * [] 청개구리사전식으로 변경된 문자열로 반환하는 기능
 */

const ALPHABETICAL_REG_EXP = /([A-Z])|([a-z])/g;

// 알파벳을 청개구리 사전에 맞게 변경하는 함수
function frogTranslation(word) {

  /*
   * 각 문자에 대해 입력을 받게되면 문자에 대한 아스키코드를 변환하여 계산한다.
   * 대문자와 소문자에 대한 아스키 코드 계산하다. (a:97 ~ z:122) (A:65 ~ Z:90)
   * 대문자와 소문자에 대한 계산은 따로한다.
   * 반환힐 때는 아스키코드를 글자로 변환한다.
   */
  word = word.charCodeAt(0);
  if (word <= 90) {
    word = 65 + (90 - word);
  } else {
    word = 97 + (122 - word);
  }

  return String.fromCharCode(word);
}

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
