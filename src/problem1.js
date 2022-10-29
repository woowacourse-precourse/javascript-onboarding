/**
 * 주어진 책 페이지 배열 입력이 올바른지 검증합니다.
 * @param {number[]} pages 책 페이지 배열
 *
 * @throws {Error} 검증에 실패할 시 던질 예외
 */
function verifyPages(pages) {
  if (pages.length !== 2) throw Error('pages 배열 길이는 2여야 합니다.');

  if (pages[0] % 2 !== 1 || pages[1] % 2 !== 0) throw Error('왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수여야 합니다.');

  if (pages[0] + 1 !== pages[1]) throw Error('두 페이지는 연속적인 값이어야 합니다.');

  if (pages[0] < 1 || 400 < pages[1]) throw Error('페이지는 1부터 400 사이의 수여야 합니다.');
}

/**
 * 책 페이지 배열 pages와 점수 계산 전략 strategies
 * @param {[number, number]} pages 책 페이지 숫자 2개가 담긴 배열
 * @param {function(number)[]} strategies 책 페이지에서 점수를 계산할 전략 (addStrategy, multiplyStrategy)
 * @returns {number} 주어진 전략에서 가장 높게 획득한 점수
 */
function getScore(pages, strategies = [addStrategy, multiplyStrategy]) {
  const candidates = pages.map(page => strategies.map(strategy => strategy(page))).flat();
  return Math.max(...candidates);
}

/**
 * 책 페이지의 각 자리 숫자를 더하여 점수를 계산합니다.
 * @param {number} page 책 페이지 숫자
 * @returns 계산된 점수
 */
function addStrategy(page) {
  return String(page).split('').reduce((a, b) => +a + +b);
}

/**
 * 책 페이지의 각 자리 숫자를 곱하여 점수를 계산합니다.
 * @param {number} page 책 페이지 숫자
 * @returns 계산된 점수
 */
function multiplyStrategy(page) {
  return String(page).split('').reduce((a, b) => +a * +b);
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
