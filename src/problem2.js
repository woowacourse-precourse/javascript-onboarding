/**
 * 기능 목록
 * 1. 문자열을 입력 받는다
 * 2. isRemoved를 false로 변경하고 문자열을 removedIndex부터 (문자열의 길이 - 1) 만큼 순회한다.
 *   2-1. i번째 글자와 (i + 1)번째 글자가 같은지 확인한다.
 *   2-2. 같으면 다른 글자가 나올 때까지 찾는다.
 *     2-2-1. 다른 글자가 나오면 같은 문자를 모두 제거한다.
 *     2-2-2. 다른 글자가 나오지 않으면 i번째부터 마지막 글자까지 제거한다.
 *     2-2-3. i-- 후 removedIndex를 i로, isRemoved를 true로 변경한다.
 * 3-1. isRemoved가 true이면 2번으로
 * 3-2. isRemoved가 false이면 문자열 결과를 return한다 (종료)
 *
 * @param {string} cryptogram
 * @returns {string} result
 */
function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;
