function problem5(money) {
  const answer = countMoneyType(money);
  return answer;
}

function countMoneyType(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let currentMoney = money;
  let countMoney = [];

  for (let i = 0; i < moneyType.length; i++) {
    countMoney[i] = Math.floor(currentMoney / moneyType[i]);
    currentMoney %= moneyType[i];
  }
  return countMoney;
}

module.exports = problem5;
