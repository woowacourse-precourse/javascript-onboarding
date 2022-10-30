function problem5(money) {
  const moneyUnits = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let restMoney = money;

  return moneyUnits.map((unit) => {
    const value = Math.floor(restMoney / unit);
    restMoney %= unit;

    return value;
  });
}

module.exports = problem5;
