function problem5(money) {
  var answer = [];
  let current = money;

  [50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1].forEach((unit) => {
    answer.push(Math.floor(current / unit));
    current = current % unit;
  });

  return answer;
}

module.exports = problem5;
