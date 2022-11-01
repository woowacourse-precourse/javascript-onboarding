function problem5(money) {
  let answer = [];
  const MONETARY_UNIT = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  MONETARY_UNIT.forEach((unit) => {
    answer.push(Math.floor(money / unit));
    money = money % unit;
  });

  return answer;
}

module.exports = problem5;
