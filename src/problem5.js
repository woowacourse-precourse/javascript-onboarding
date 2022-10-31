function problem5(money) {
  let answer = [];
  const CASH = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  CASH.forEach((won) => {
    answer.push(parseInt(money / won));
    money = money % won;
  });
  return answer;
}

module.exports = problem5;
