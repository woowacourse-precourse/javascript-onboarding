function problem5(money) {
  let result = [];
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // 변환 금액

  for (let unit = 0; unit < units.length; unit++) {
    let exchangedMoney = parseInt(money / units[unit]);
    money -= exchangedMoney * units[unit];
    result.push(exchangedMoney);
  }

  return result;
}

module.exports = problem5;
