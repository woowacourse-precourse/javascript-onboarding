function problem5(money) {
  var answer = [];
  var units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var unit of units) {
    var quotient = parseInt(money / unit);
    answer.push(quotient);
    money = money % unit;
  }
  return answer;
}

module.exports = problem5;
