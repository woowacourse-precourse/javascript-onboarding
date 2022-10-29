function problem5(money) {
  const UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];
  let remainingMoney = money;
  
  UNITS.forEach((unit) => {
    result.push(Math.floor(remainingMoney / unit));
    remainingMoney %= unit;
  });

  return result;
}

module.exports = problem5;
