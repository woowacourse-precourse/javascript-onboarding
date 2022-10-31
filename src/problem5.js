function problem5(money) {
  const answer = [];
  const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < moneys.length; ++i) {
    answer.push(Math.floor(money / moneys[i]));
    money %= moneys[i];
  }

  return answer;
}

module.exports = problem5;
