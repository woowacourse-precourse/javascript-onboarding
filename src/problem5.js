// @ts-check

const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

/**
 *
 * @param {number} money
 * @returns {number[]}
 */

function problem5(money) {
  /** @type {number[]} */
  const wallet = new Array(MONETARY_UNIT.length).fill(0);

  MONETARY_UNIT.forEach((unit, index) => {
    wallet[index] = Math.floor(money / unit);
    money = money % unit;
  });

  return wallet;
}

module.exports = problem5;
