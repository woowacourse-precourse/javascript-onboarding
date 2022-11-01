function problem5(money) {
  const UNIT_OF_MONEYS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  for (let i = 0; i < 9; i++) {
    result.push(parseInt(money / UNIT_OF_MONEYS[i]));

    money = money % UNIT_OF_MONEYS[i];
  }

  return result;
}

module.exports = problem5;
