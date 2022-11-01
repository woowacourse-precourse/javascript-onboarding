function problem5(money) {
  var answer = [];
  var coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var i = 0; i < coins.length; i++) {
    quo = Math.floor(money / coins[i]);
    money -= quo * coins[i];
    answer.push(quo);
  }

  return answer;
}

module.exports = problem5;
