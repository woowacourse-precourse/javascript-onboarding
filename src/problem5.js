function problem5(money) {
  let answer;

  answer = [];
  [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1].forEach((cash) => {
    answer.push(parseInt(money / cash));
    money = money % cash;
  });

  return answer;
}

module.exports = problem5;
