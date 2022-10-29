const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (var i = 0; i < 9; i++) {
    if (money <= 0) break;
    var cnt = parseInt(money / arr[i]);
    answer[i] = cnt;
    money = parseInt(money % arr[i]);
  }
  return answer;
}

module.exports = problem5;
