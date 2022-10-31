/**
 * 기능 목록
 * 1. 문자열을 입력 받는다.
 * 2. 문자열을 순회한다.
 *   2-1. 대문자는 대문자로 사전을 참고해 변환한다.
 *   2-2. 소문자는 소문자로 사전을 참고해 변환한다.
 *   2-3. 알파벳이 아닌 문자는 변환하지 않는다.
 * 3. 변환된 문자열을 return 한다.
 */

const alphabet = {
  MIN_LOWER: "a".charCodeAt(),
  MAX_LOWER: "z".charCodeAt(),
  MIN_UPPER: "A".charCodeAt(),
  MAX_UPPER: "Z".charCodeAt(),
  isLower(code) {
    return this.MIN_LOWER <= code && code <= this.MAX_LOWER;
  },
  isUpper(code) {
    return this.MIN_UPPER <= code && code <= this.MAX_UPPER;
  },
  toUpper(lowerCode) {
    return String.fromCharCode(this.MIN_LOWER + this.MAX_LOWER - lowerCode);
  },
  toLower(upperCode) {
    return String.fromCharCode(this.MIN_UPPER + this.MAX_UPPER - upperCode);
  },
};

/**
 * @param {string} char
 */
const changeAlphabet = (char) => {
  const code = char.charCodeAt();
  if (alphabet.isLower(code)) {
    return alphabet.toUpper(code);
  }
  if (alphabet.isUpper(code)) {
    return alphabet.toLower(code);
  }
  return char;
};

/**
 * @param {string} word
 */
function solution(word) {
  return word.split("").map(changeAlphabet).join("");
}

/**
 * @param {string} word
 */
function problem4(word) {
  const result = solution(word);
  return result;
}

module.exports = problem4;
