function problem5(money) {
  let answer;
  let wallet = Array.from({ length: 9 }, () => 0);
  const moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < moneyList.length; i++) {
    wallet[i] = parseInt(money / moneyList[i]);
    money = money % moneyList[i];
  }
  return wallet;
}

module.exports = problem5;
