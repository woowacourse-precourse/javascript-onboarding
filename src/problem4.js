/**
 * Problem 4
 * 1. a~z, A~Z까지의 청개구리 사전 작성
 * 2. word를 배열로 변환
 * 3. 사전을 참고하여 문자열 반환
 * @param {string} word 1 이상 1,000 이하
 * @returns {string}
 */
function problem4(word) {
  const A = 65;
  const Z = 90;
  const a = 97;
  const z = 122;
  const dictionary = [...Array(26)].reduce((dict, _, i) => {
    dict.set(String.fromCharCode(A + i), String.fromCharCode(Z - i));
    dict.set(String.fromCharCode(a + i), String.fromCharCode(z - i));
    return dict;
  }, new Map());
  const wordArray = word.split("");
  var answer;
  return answer;
}

module.exports = problem4;
