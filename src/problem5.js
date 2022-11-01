function problem5(money) {
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = Array.from({ length: moneyArr.length }, () => 0);
  moneyArr.map((i, index) => {
    answer[index] = Math.floor(money / i);
    money = money % i;
  });

  return answer;
}

module.exports = problem5;
