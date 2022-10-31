function problem5(money) {
  let answer = [];

  [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1].forEach((unit) => {
    answer.push(Math.floor(money / unit));
    money = money % unit;
  });
  return answer;
}

module.exports = problem5;
