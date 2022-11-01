function problem5(money) {
  var answer;
  const MONEY_STANDARDS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  answer = MONEY_STANDARDS.map((standard) => {
    const count = Math.floor(money / standard);
    money = money % standard;
    return count;
  });

  return answer;
}

module.exports = problem5;
