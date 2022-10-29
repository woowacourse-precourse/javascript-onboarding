/**
 * 돈의 단위를 큰 순서부터 나열한 배열
 * @type {number[]}
 */
const MONEY_UNITS = Object.freeze([
  50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1
]);

/**
 * 문제 5번에서, 입력으로 돈이 주어지면 이를 화폐로 바꾼다.
 * 바꾼 화폐가 각 몇개인지 배열로 저장하여 반환한다.
 * @param {number} money 화폐로 변환할 돈
 * @returns {number[]} 각 화폐의 갯수 배열
 */
function problem5(money) {
  return MONEY_UNITS.map(unit => {
    const count = Math.floor(money / unit);
    money %= unit;
    return count;
  });
}

module.exports = problem5;
