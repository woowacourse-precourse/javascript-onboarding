function problem5(money) {
  var answer = Array(9).fill(0);
  const won = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let change = money;

  for (let i = 0; i < won.length; i++) {
    const exchange = Math.floor(change / won[i]);
    answer[i] = exchange;
    change = money % won[i];
  }

  return answer;
}

module.exports = problem5;
