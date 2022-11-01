function problem5(money) {
  if (money < 1 || money > 1000000 || Number.isInteger(money) !== true) {
    return -1;
  }

  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  const countArr = moneyArr.map((element) => {
    const count = Math.floor(money / element);
    const leftMoney = money % element;
    money = leftMoney;
    return count;
  });

  return countArr;
}

module.exports = problem5;
