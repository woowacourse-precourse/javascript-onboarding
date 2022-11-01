function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var value = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (var i = 0; i < value.length; i++) {
    answer[i] = parseInt(money / value[i]);
    money = money % value[i];
  }
  return answer;
}

module.exports = problem5;
