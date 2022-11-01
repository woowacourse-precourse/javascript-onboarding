function problem5(money) {
  let answer = [];
  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  for (price of bills) {
    answer.push(parseInt(money / price));
    money -= price * parseInt(money / price);
  }
  return answer;
}

module.exports = problem5;
