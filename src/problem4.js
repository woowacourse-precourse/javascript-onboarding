/**
 * param으로 들어온 문자가 알파벳인지 확인한다.
 * @param {string} char - 변환해야할 문자
 * @return {boolean}
 */
const isAlphabet = (char) => {
  return /^[A-Z]$/i.test(char);
};

/**
 * 아스키코드로부터 변환한 문자를 반환한다.
 * @param {number} charCode - 아스키코드
 * @return {string}
 */
const getCharFromAsciiCode = (charCode) => {
  return String.fromCharCode(charCode);
};

function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;
