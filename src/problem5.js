function problem5(money) {
  var answer = [];
  var coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var i = 0; i < coin.length; i++) {
    answer.push(Math.floor(money / coin[i]));
    money %= coin[i];
  }

  return answer;
}

module.exports = problem5;
