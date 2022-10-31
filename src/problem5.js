function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 결과
  const cost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // 단위

  for (let i = 0; i < cost.length; i++) {
    // 돈 단위 높은 순서대로 뺄 수 있는만큼 빼며 남은 돈 최신화
    if (money / cost[i] >= 1) {
      let count = parseInt(money / cost[i]);
      answer[i] += count;
      money -= cost[i] * count;
    }
  }
  return answer;
}

module.exports = problem5;
