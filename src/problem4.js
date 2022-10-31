/**
 * 기능 정의
 *
 * - [x] 알파벳인지 판별하는 기능
 * - [x] 대소문자를 구분하는 기능
 * - [ ] 알파벳 기준 반대의 알파벳을 반환하는 기능
 */

/**
 * word가 주어졌을 때, 각 문자를 알파벳 기준으로 반대로 변환해주는 함수.
 * 알파벳 외의 문자는 변환하지 않으며, 알파벳 대문자는 대문자로, 소문자는 소문자로 변환
 *
 * @param {string} word 길이가 1 이상 1,000 이하인 문자열
 * @returns {string} 조건에 맞게 변경된 문자열
 */
function problem4(word) {
  var answer;
  return answer;
}

/**
 * 정규식을 통해 알파벳인지 판별하는 함수
 *
 * @param {string} char 알파벳인지 확인할 문자열
 * @returns {boolean} 알파벳이라면 true, 아니면 false
 */
function isAlphabet(char) {
  const regExp = /^[a-zA-Z]*$/;

  return regExp.test(char);
}

/**
 * 입력받은 UTF-16코드가 대소문자 혹은 다른 문자열인지 확인하는 함수
 *
 * @param {number} charCode UTF-16 코드를 나타내는 0부터 65535 사이의 정수
 * @returns {number} 대문자면 1, 소문자면 2, 둘다 아닌 경우 0 반환
 */
function checkCase(charCode) {
  if (isUpperCase(charCode)) {
    return 1;
  }

  if (isLowerCase(charCode)) {
    return 2;
  }

  return 0;
}

/**
 * 입력받은 UTF-16코드가 대문자인지 확인하는 함수
 *
 * @param {number} charCode UTF-16 코드를 나타내는 0부터 65535 사이의 정수
 * @returns {boolean} 대문자라면 true 아니면 false반환
 */
function isUpperCase(charCode) {
  return 65 <= charCode && charCode <= 90;
}

/**
 * 입력받은 UTF-16코드가 소문자인지 확인하는 함수
 *
 * @param {number} charCode UTF-16 코드를 나타내는 0부터 65535 사이의 정수
 * @returns {boolean} 소문자라면 true 아니면 false반환
 */
function isLowerCase(charCode) {
  return 97 <= charCode && charCode <= 122;
}

module.exports = problem4;
