//@ts-check

/**
 * Returns the decrypt string
 * @param {number} money
 * @returns {Array<number>}
 */
function problem5(money) {
  return [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]
      .map((m) => {
        const count = Math.floor(money / m);
        money -= count * m;
        return count;
      })
} //leftMoney 부수효과 없애야함

module.exports = problem5;
