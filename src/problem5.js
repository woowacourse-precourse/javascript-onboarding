function problem5(money) {
  const answer = [];

  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let currentValue = money;

  for (let i = 0; i < won.length; i++) {
    answer.push(Math.floor(currentValue / won[i]));
    currentValue = Math.floor(money % won[i]);
  }

  return answer;
}

module.exports = problem5;
