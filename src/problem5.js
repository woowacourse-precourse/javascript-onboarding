function problem5(money) {
  let answer = [];
  let moneyInterval = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (let i = 0; i < moneyInterval.length; i++) {
    answer.push(Math.floor(money / moneyInterval[i]));
    money %= moneyInterval[i];
  }
  return answer;
}

module.exports = problem5;
