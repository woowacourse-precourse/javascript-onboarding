function problem5(money) {
  var answer;
  let wallet = Array.from({ length: 9 }, () => 0);
  let moneyList = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i = 0; i < 9; i++) {
    wallet[i] = parseInt(money / moneyList[i]);
    money %= moneyList[i];
  }
  answer = wallet;
  return answer;
}

module.exports = problem5;
