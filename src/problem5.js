function problem5(money) {
  const MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (let i = 0; i < MONEY.length; i++) {
    answer.push(Math.floor(money / MONEY[i]));
    money -= MONEY[i] * answer[i];
  }

  return answer;
}

module.exports = problem5;
