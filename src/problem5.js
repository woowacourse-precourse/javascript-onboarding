const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
  let answer = [];

  moneyArr.forEach((unit) => {
    answer.push(Math.floor(money / unit));
    money %= unit;
  });

  return answer;
}

module.exports = problem5;
