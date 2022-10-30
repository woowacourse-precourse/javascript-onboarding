const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

const isValidMoney = (money) => money >= 1 && money <= 1000000;

const changeUnit = (money) =>
  moneyUnit.map((unit) => {
    const count = parseInt(money / unit);
    money -= count * unit;
    return count;
  });

function problem5(money) {
  if (!isValidMoney(money)) return;

  return changeUnit(money);
}

module.exports = problem5;
