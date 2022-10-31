const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money = 0) {
  const result = [];
  MONEY_UNIT.forEach((unit) => {
    result.push(Math.trunc(money / unit));
    money = money % unit;
  });
  return result;
}

module.exports = problem5;
