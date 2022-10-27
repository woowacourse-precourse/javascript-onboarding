function problem5(money) {
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = moneyList.map((moneyType) => {
    const count = Math.floor(money / moneyType);
    money = money % moneyType;
    return count;
  });

  return result;
}

problem5(15000); //?

module.exports = problem5;
