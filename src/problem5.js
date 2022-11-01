function problem5(money) {
  var answer = [];
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < units.length; i++) {
    answer.push(Math.floor(money / units[i]));
    money %= units[i];
  }

  return answer;
}

module.exports = problem5;
