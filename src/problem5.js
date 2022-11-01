const BILL_LIST = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

/**
 * @param {number} money
 * @returns {number[]}
 */
function problem5(money) {
  const answer = [];

  BILL_LIST.reduce((leftMoney, bill) => {
    const count = parseInt(leftMoney / bill, 10);
    answer.push(count);

    return leftMoney % bill;
  }, money);

  return answer;
}

module.exports = problem5;
