function problem5(money) {
  var unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var unitNum = [];

  unit.forEach((item) => {
    unitNum.push(parseInt(money / item));
    money = money % item;
  });

  return unitNum;
}

module.exports = problem5;
