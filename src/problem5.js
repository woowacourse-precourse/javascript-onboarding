const billCoinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = billCoinList.map((billCoin) => {
    const result = countMoney(money, billCoin);
    money = result[0];
    return result[1];
  });
  return answer;
}

/**
 * 돈이 지폐나 동전으로 바꿀 수 있다면 바꾼다
 * @param {number} money - 돈
 * @param {number} billCoin - 지폐 또는 동전
 * @returns {[number, number]} [남은 돈, 바뀐 지폐 또는 동전 개수]
 */
const countMoney = (money, billCoin) => {
  return money >= billCoin
    ? [
        money - Math.floor(money / billCoin) * billCoin,
        Math.floor(money / billCoin),
      ]
    : [money, 0];
};

module.exports = problem5;
