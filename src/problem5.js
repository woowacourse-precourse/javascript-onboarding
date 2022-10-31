function problem5(money) {
  var answer = [];
  var costs = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i = 0; i < costs.length; i++) {
    var count = parseInt(money / costs[i]);
    if (count != 0) {
      money = money - costs[i] * count;
      answer.push(count);
    } else {
      answer.push(count);
    }
  }
  return answer;
}

module.exports = problem5;
