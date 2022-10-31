function problem5(money) {
  let answer = [];
  let money_unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < money_unit.length; ++i) {
    answer.push(Math.floor(money / money_unit[i]));
    money %= money_unit[i];
  }
  return answer;
}

module.exports = problem5;
