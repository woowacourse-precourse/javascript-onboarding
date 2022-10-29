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
