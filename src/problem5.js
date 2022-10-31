function problem5(money) {
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];
  for (const value of moneyArr) {
    answer.push(parseInt(money / value));
    money = money % value;
  }
  return answer;
}

module.exports = problem5;
