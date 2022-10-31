function classfication(moneyUnit, money) {
  moneyUnit = moneyUnit.map((item) => {
    const result = parseInt(money / item);
    money %= item;
    return result;
  });
  return moneyUnit;
}
function moneyUnit() {
  return [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
}
function problem5(money) {
  return classfication(moneyUnit(), money);
}

module.exports = problem5;
