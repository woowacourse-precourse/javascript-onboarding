function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var i = 0; i < 9; ++i) {
    answer[i] = parseInt(money / MONEY[i]);
    money %= MONEY[i];
  }

  return answer;
}

module.exports = problem5;
