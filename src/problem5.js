//@ts-check

/**
 * Returns the changed money
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
} //money 부수효과 없애야 함

module.exports = problem5;
