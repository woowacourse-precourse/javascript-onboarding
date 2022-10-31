/**
 * 조건에 맞는 페이지인지 true 또는 false로 반환합니다.
 * - [조건 목록]
 *   - 페이지의 범위(1 ~ 400)가 올바른가 ?
 *   - 왼쪽 페이지가 홀수인가 ?
 *   - 오른쪽 페이지가 짝수인가 ?
 *   - 왼쪽과 오른쪽 페이지의 차이는 1인가 ?
 * @param {number[]} pages 검사할 페이지 배열입니다.
 * @returns {boolean} 조건에 맞다면 true, 아니라면 false를 반환합니다.
 */
function isCorrectPages(pages) {
  if (
    pages[0] % 2 === 1 &&
    pages[1] - pages[0] === 1 &&
    Math.max(pages[0], pages[1]) <= 400 &&
    Math.min(pages[0], pages[1]) >= 1
  ) {
    return true;
  } else return false;
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
