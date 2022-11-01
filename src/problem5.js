function problem5(money) {
  var answer = [];
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(var i = 0; i < won.length; i++) {
    answer.push(parseInt(money / won[i]));
    money %= won[i];
  }
  return answer;
}

module.exports = problem5;
