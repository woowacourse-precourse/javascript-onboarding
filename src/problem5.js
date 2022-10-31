function problem5(money) {
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < result.length; i++) {
    money = moneyBack(money, moneyUnit[i], i, result);
  }
  return result;
}
function moneyBack(money, unit, index, result) {
  while (money >= unit) {
    money -= unit;
    result[index] += 1;
  }
  return money;
}
module.exports = problem5;
