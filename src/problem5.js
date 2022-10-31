function problem5(money) {
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  moneyArr.map((i) => {
    answer.push(parseInt(money / i));
    money = money % i;
  });
  return answer;
}

module.exports = problem5;
