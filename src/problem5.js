function calculate(money, unit) {
  const count = Math.floor(money / unit);
  const rest = money % unit;

  return [count, rest];
}

function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (const unit of units) {
    const [count, rest] = calculate(money, unit);
  }
  return answer;
}

module.exports = problem5;
