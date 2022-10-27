function problem5(money) {
  if (money < 1 || money > 1000000) {
    throw new Error('money는 1이상 1,000,000이하여야 합니다.');
  }

  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = moneyList.map((moneyType) => {
    const count = Math.floor(money / moneyType);
    money = money % moneyType;
    return count;
  });
  return result;
}

module.exports = problem5;
