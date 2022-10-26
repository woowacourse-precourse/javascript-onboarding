function problem5(money) {
  let answer = [];
  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // greedy algorithm: 최대한 상위 지폐로 많이 가져가자
  for (let bill of bills) {
    answer.push(Math.floor(money / bill));
    money = money % bill;
  }

  return answer;
}

module.exports = problem5;
