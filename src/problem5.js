const getUnitRestCount = (MONEY_UNITS, money) => {
  let restMoney = money;

  return MONEY_UNITS.map((unit) => {
    const value = ~~(restMoney / unit);
    restMoney %= unit;
    return value;
  });
};

function problem5(money) {
  const MONEY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return getUnitRestCount(MONEY_UNITS, money);
}

module.exports = problem5;
