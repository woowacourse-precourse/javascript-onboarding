function problem5(money) {
  const answer = [];
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  moneyArr.map((item) => {
    answer.push(parseInt(money / item));
    money = money % item;
  });
  return answer;
}

module.exports = problem5;
