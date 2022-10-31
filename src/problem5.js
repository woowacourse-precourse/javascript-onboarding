function problem5(money) {
  var answer = [];
  var kindCost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i = 0; i < kindCost.length; i++) {
    if (money / kindCost[i] >= 1) {
      answer.push(Math.floor(money / kindCost[i]));
      money = money % kindCost[i];
    } else answer.push(0);
  }
  return answer;
}

module.exports = problem5;
