function problem5(money) {
  const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 출력 결과
  const cost = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; // 단위

  for (let i = 0; i < cost.length; i++) {
    // 돈의 단위가 높은 순서로 뺄 수 있는만큼 최대한 빼기
    if (money / cost[i] >= 1) {
      let count = parseInt(money / cost[i]);
      answer[i] += count;
      money -= cost[i] * count;
    }
  }
  return answer;
}

module.exports = problem5;
