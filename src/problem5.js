const MONEY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  const result = [];

  for (let i = 0; i < MONEY_UNIT.length; i++) {
    const currUnit = MONEY_UNIT[i];
    const unitCnt = Math.floor(money / currUnit);

    result.push(unitCnt);
    money -= currUnit * unitCnt;
  }

  return result;
}

module.exports = problem5;
