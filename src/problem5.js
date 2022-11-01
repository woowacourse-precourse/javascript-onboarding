function problem5(money) {
  let price = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (let i = 0; i < price.length; i++) {
    answer.push(parseInt(money / price[i]));
    money %= price[i];
  }
  return answer;
}

module.exports = problem5;
