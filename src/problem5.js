const problem5 = (money) => {
  const result = [];
  const moneyUnits = [50000, 10000, 5000, 1000, 5000, 100, 50, 10, 1];
  moneyUnits.forEach((unit) => {
    let cnt = 0;
    if (money >= unit) {
      cnt += Math.floor(money / unit);
      money = money % unit;
    }
    result.push(cnt);
  })
  return result;
}

module.exports = problem5;
