const getMoney = (money) => {
  const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const countMoney = new Array(MONEY.length).fill(0);

  for (let i = 0; i < MONEY.length; i++) {
    if (money === 0) return countMoney;

    countMoney[i] = Math.floor(money / MONEY[i]);
    money -= countMoney[i] * MONEY[i];
  }

  return countMoney;
};

function problem5(money) {
  return getMoney(money);
}
module.exports = problem5;
