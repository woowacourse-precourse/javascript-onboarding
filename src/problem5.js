function problem5(money) {
  var trans = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < trans.length; i++) {
    answer[i] = Math.floor(money / trans[i]);
    money = money % trans[i];
  }
  return answer;
}

module.exports = problem5;
