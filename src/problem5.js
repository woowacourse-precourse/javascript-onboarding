function problem5(money) {
  const monetaryUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  let remainingAmount = money;
  for (let won of monetaryUnit) {
    answer.push(Math.floor(remainingAmount / won));
    remainingAmount = remainingAmount % won;
  }

  return answer;
}

module.exports = problem5;
