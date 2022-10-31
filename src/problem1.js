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

/**
 * 각 자릿수를 곱한 값과 더한 값 중 큰 수를 반환합니다.
 * @param {number} page 값을 구하고 싶은 페이지입니다.
 * @returns {number} 각 자릿수를 곱하거나 더해 큰 값만 반환합니다.
 */
function getMaxScore(page) {
  const hundred = parseInt(page / 100);
  const ten = parseInt(page / 10) % 10;
  const one = page % 10;

  return Math.max(
    (hundred || 1) * (ten || 1) * (one || 1),
    (hundred || 0) + (ten || 0) + (one || 0)
  );
}

/**
 * 페이지 번호 게임의 결과를 반환합니다.
 * @param {number[]} pobi pobi가 펼친 페이지 배열입니다.
 * @param {number[]} crong crong이 펼친 페이지 배열입니다.
 * @returns {number} pobi가 이겼다면 1, crong이 이겼다면 2, 무승부라면 0, 예외사항은 -1을 반환합니다.
 */
function problem1(pobi, crong) {
  if (isCorrectPages(pobi) && isCorrectPages(crong)) {
    let answer;

    return answer;
  } else return -1;
}

module.exports = problem1;
