function problem5(money) {
  var answer = Array(9).fill(0);
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let change = money;

  for (let i = 0; i < unit.length; i++) {
    const exchange = Math.floor(change / unit[i]);
    answer[i] = exchange;
    change = money % unit[i];
  }

  return answer;
}

module.exports = problem5;
