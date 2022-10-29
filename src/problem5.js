function problem5(money) {
  var answer = [];
  let changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < 9; i++) {
    change = parseInt(money / changes[i])
    answer.push(change);
    money -= (change * changes[i]);
  }
  return answer;
}

module.exports = problem5;
