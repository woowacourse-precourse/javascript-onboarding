const MONEY_UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var countUnitsArr = [];

  for (var unit of MONEY_UNITS) {
    countUnitsArr.push(parseInt(money / unit));
    money %= unit;
  }

  return countUnitsArr;
}

module.exports = problem5;
