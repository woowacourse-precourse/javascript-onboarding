function problem5(money) {
  return sortMoney(money);
}

function sortMoney(money) {
  const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const wallet = [];
  let _money = money;

  for (let i = 0; i < MONETARY_UNIT.length; i++) {
    wallet.push(countMoney(_money, MONETARY_UNIT[i]));
    _money = divideMoney(_money, MONETARY_UNIT[i]);
  }

  return wallet;
}

function divideMoney(money, currentMonetaryUnit) {
  return money % currentMonetaryUnit;
}

function countMoney(money, currentMonetaryUnit) {
  return Math.floor(money / currentMonetaryUnit);
}

module.exports = problem5;
