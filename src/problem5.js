function problem5(money) {
  const result = Array.from({ length: 9 }, () => 0);
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < 9; i++) {
    result[i] = parseInt(money / moneyArr[i]);
    money %= moneyArr[i];
  }
  return result;
}

module.exports = problem5;
