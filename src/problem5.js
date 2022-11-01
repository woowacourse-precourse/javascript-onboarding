function problem5(money) {
  const moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 9; i++) {
    answer[i] = parseInt(money / moneyUnit[i]);
    money = money % moneyUnit[i];
  }
  return answer;
}

module.exports = problem5;
