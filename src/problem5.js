// @ts-chek

/**
 * @param {number} money
 * @returns {number[]}
 */
function problem5(money) {
  // 단위별로 연산 후 총 금액에서 빼주기
  return [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1].map((unit) => {
    const val = Math.floor(money / unit);
    money -= val * unit;
    return val;
  });
}

console.log(problem5(50237)); // [1, 0, 0, 0, 0, 2, 0, 3, 7]
console.log(problem5(15000)); // [0, 1, 1, 0, 0, 0, 0, 0, 0]

module.exports = problem5;
