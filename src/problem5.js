function problem5(money) {
  let copyMoney = money;
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  return moneyUnit.map((unit) => {
    const count = Math.floor(copyMoney / unit);
    copyMoney %= unit;
    return count;
  });
}

module.exports = problem5;
