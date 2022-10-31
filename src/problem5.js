function problem5(money) {
  let userMoney = money;
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const conversion = new Array(moneyType.length).fill(0);
  for (let i = 0; i < moneyType.length; i++) {
    conversion[i] = Math.floor(userMoney / moneyType[i]);
    userMoney -= conversion[i] * moneyType[i];
  }
  return conversion;
}

module.exports = problem5;
