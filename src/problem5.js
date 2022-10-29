function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 결과
  const cost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // 단위

  for (let i = 0; i < cost.length; i++) {
    if (money / cost[i] >= 1) {
      let count = parseInt(money / cost[i]);
      answer[i] += count;
      money -= cost[i] * count;
    }
  }

  return answer;
}

module.exports = problem5;
