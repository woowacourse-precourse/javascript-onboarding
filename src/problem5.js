function problem5(money) {
  var answer = [];
  var unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (var u of unit) {
    answer.push(Math.floor(money/u));
    money = money % u;
  }
  return answer;
}

module.exports = problem5;