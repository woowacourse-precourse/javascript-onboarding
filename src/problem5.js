function problem5(money) {
  let divideMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array(divideMoney.length).fill(0);

  if (money === 0) return answer;

  for (let i = 0; i < answer.length; i++) {
    answer[i] = Math.floor(money / divideMoney[i]);
    money = money - divideMoney[i] * answer[i];
  }

  return answer;
}

module.exports = problem5;
