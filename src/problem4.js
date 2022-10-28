/**
 * 기능 목록
 * 1. 문자열을 입력 받는다.
 * 2. 문자열을 순회한다.
 *   2-1. 대문자는 대문자로 사전을 참고해 변환한다.
 *   2-2. 소문자는 소문자로 사전을 참고해 변환한다.
 *   2-3. 알파벳이 아닌 문자는 변환하지 않는다.
 * 3. 변환된 문자열을 return 한다.
 *
 * @param {string} word
 * @returns {string} result
 */

const ALPHABET_CODE = {
  MIN_LOWER: "a".charCodeAt(),
  MAX_LOWER: "z".charCodeAt(),
  MIN_UPPER: "A".charCodeAt(),
  MAX_UPPER: "Z".charCodeAt(),
};

/**
 * @param {string} char
 */
function changeAlphabet(char) {
  const code = char.charCodeAt();
  if (ALPHABET_CODE.MIN_LOWER <= code && code <= ALPHABET_CODE.MAX_LOWER) {
    return changeLowerToUpper(code);
  }
  if (ALPHABET_CODE.MIN_UPPER <= code && code <= ALPHABET_CODE.MAX_UPPER) {
    return changeUpperToLower(code);
  }
  return char;
}

function changeLowerToUpper(code) {}
function changeUpperToLower(code) {}
function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
