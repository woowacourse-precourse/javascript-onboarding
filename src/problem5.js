function problem5(money) {
  const moneyData = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const resultMoney = new Array(moneyData.length).fill(0);

  moneyData.forEach((data, idx) => {
    if (Math.floor(money / data) != 0) {
      resultMoney[idx] = Math.floor(money / data);
      money %= data;
    }
  });

  return resultMoney;
}
module.exports = problem5;
