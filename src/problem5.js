function problem5(money) {
  var answer = [];

  var coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  coins.forEach((coin) => {
    var quotient = parseInt(money / coin);
    answer.push(quotient);
    money -= quotient * coin;
  });

  return answer;
}

module.exports = problem5;
