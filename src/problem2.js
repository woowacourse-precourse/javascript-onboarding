/**
 * Problem 2
 * 1. 중복 문자에 해당하는 정규표현식 작성
 * 2. 중복 문자가 존재할 경우 제거하고 제거한 암호문 다시 재귀
 * 3. 중복 문자가 존재하지 않을 경우 해당 문자열 반환
 * @param {string} cryptogram 1 이상 1000 이하
 * @returns {string}
 */
function problem2(cryptogram) {
  const duplicatePairRegExp = /(\w)\1{1}/g;
  var answer;
  return answer;
}

module.exports = problem2;
