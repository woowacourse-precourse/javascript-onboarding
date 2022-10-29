const billCoinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = billCoinList.map((billCoin) => {
    const result = countMoney(money, billCoin);
    money = result[0];
    return result[1];
  });
  return answer;
}

const countMoney = (money, billCoin) => {
  return money >= billCoin
    ? [
        money - Math.floor(money / billCoin) * billCoin,
        Math.floor(money / billCoin),
      ]
    : [money, 0];
};

module.exports = problem5;
