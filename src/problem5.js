function problem5(money) {
  var answer = [];
  var change = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (var i in change) {
    var now_change = parseInt(money / change[i]);
    if (now_change) {
      answer.push(now_change);
      money = money - answer.at(-1) * change[i];
    } else {
      answer.push(0);
    }
  }
  return answer;
}

module.exports = problem5;
