function problem5(money) {
  let answer = [];
  const exchangeArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let exchange of exchangeArr) {
    answer.push(Math.floor(money / exchange));
    money %= exchange;
  }
  return answer;
}

module.exports = problem5;
